import { NextRequest, NextResponse } from "next/server";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const requestsByIp = new Map<string, number[]>();

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
  startedAt?: unknown;
  lang?: unknown;
};

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
  })[character] ?? character);
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recentRequests = (requestsByIp.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recentRequests.length >= MAX_REQUESTS) return true;
  recentRequests.push(now);
  requestsByIp.set(ip, recentRequests);
  return false;
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  const allowedOrigins = new Set([
    "https://winchancegroup.com",
    "https://www.winchancegroup.com",
    "http://localhost:3000",
  ]);

  if (origin && !allowedOrigins.has(origin)) {
    return NextResponse.json({ message: "Invalid request origin" }, { status: 403 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ message: "Too many enquiries" }, { status: 429 });
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }

  const name = clean(payload.name, 100);
  const company = clean(payload.company, 120);
  const email = clean(payload.email, 200).toLowerCase();
  const message = clean(payload.message, 4000);
  const website = clean(payload.website, 200);
  const startedAt = typeof payload.startedAt === "number" ? payload.startedAt : 0;
  const lang = payload.lang === "en" ? "en" : payload.lang === "sc" ? "sc" : "tc";

  if (website || !startedAt || Date.now() - startedAt < 3000 || Date.now() - startedAt > 2 * 60 * 60 * 1000) {
    return NextResponse.json({ message: "Invalid submission" }, { status: 400 });
  }

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "Please complete all required fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "arnelimdg@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "WCG Website <website@winchancegroup.com>";

  if (!apiKey) {
    return NextResponse.json({ message: "Email service is not configured" }, { status: 503 });
  }

  const languageLabel = lang === "en" ? "English" : lang === "sc" ? "簡體中文" : "繁體中文";
  const subject = `WCG 網站查詢 — ${company || name}`;
  const text = `姓名：${name}\n公司：${company || "—"}\n電郵：${email}\n網站語言：${languageLabel}\n\n查詢內容：\n${message}`;
  const html = `
    <h2>WCG 網站查詢</h2>
    <p><strong>姓名：</strong>${escapeHtml(name)}</p>
    <p><strong>公司：</strong>${escapeHtml(company || "—")}</p>
    <p><strong>電郵：</strong>${escapeHtml(email)}</p>
    <p><strong>網站語言：</strong>${escapeHtml(languageLabel)}</p>
    <hr />
    <p><strong>查詢內容：</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": crypto.randomUUID(),
    },
    body: JSON.stringify({ from, to: [to], reply_to: email, subject, html, text }),
  });

  if (!response.ok) {
    console.error("Contact email failed", response.status, await response.text());
    return NextResponse.json({ message: "Unable to send enquiry" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
