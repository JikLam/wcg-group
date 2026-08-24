import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://wcg-group.test/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the WCG corporate website", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>鉅瀧集團 \| Win Chance Group Holdings Limited<\/title>/i);
  assert.match(html, /連結創意、科技與資本/);
  assert.match(html, /七大業務，共建企業生態/);
  assert.match(html, /集團服務/);
  assert.match(html, /id="business-1"/);
  assert.match(html, /服務範圍/);
  assert.doesNotMatch(html, /wcg-loan-hk|獨立網站籌備中|Dedicated site in preparation/i);
  assert.match(html, /info@winchancegroup\.com/);
  assert.match(html, /\/og\.png/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|react-loading-skeleton/i);
});
