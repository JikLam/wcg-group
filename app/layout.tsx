import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "www.winchancegroup.com";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const title = "鉅瀧集團 | Win Chance Group Holdings Limited";
  const description = "鉅瀧集團立足香港，為企業提供創新多元策略方案。";

  return {
    metadataBase: base,
    title,
    description,
    icons: { icon: "/wcg-logo.png", shortcut: "/wcg-logo.png", apple: "/wcg-logo.png" },
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: new URL("/og.png", base).toString(), width: 1536, height: 896, alt: "Win Chance Group" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/og.png", base).toString()],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
