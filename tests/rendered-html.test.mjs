import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://wcg-group.test${path}`, { headers: { accept: "text/html" } }),
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
  assert.match(html, /\/services\/entertainment-production/);
  assert.match(html, /了解更多/);
  assert.doesNotMatch(html, /wcg-loan-hk|獨立網站籌備中|Dedicated site in preparation/i);
  assert.match(html, /info@winchancegroup\.com/);
  assert.match(html, /\/og\.png/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|react-loading-skeleton/i);
});

for (const detail of [
  { path: "/services/entertainment-production", title: "影視娛樂製作", text: "商演及大型活動策劃製作" },
  { path: "/services/brand-development", title: "品牌建設發展", text: "品牌創建與定位策略" },
]) {
  test(`server-renders detail metadata for ${detail.path}`, async () => {
    const response = await render(detail.path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(`<title>${detail.title} \\| 鉅瀧集團<\\/title>`));
    assert.match(html, new RegExp(detail.text));
    assert.match(html, new RegExp(`property="og:title" content="${detail.title} \\| 鉅瀧集團"`));
    assert.match(html, new RegExp(`name="twitter:title" content="${detail.title} \\| 鉅瀧集團"`));
    assert.doesNotMatch(html, /\/og\.png/);
  });
}
