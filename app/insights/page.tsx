import type { Metadata } from "next";
import InsightsHeader from "./insights-header";
import { insightCategories, insights } from "./insight-data";

export const metadata: Metadata = {
  title: "鉅瀧商業洞察 | 香港企業、科技、建築與傳承知識",
  description: "鉅瀧集團商業洞察，分享香港企業融資、數碼推廣、創新科技、建築工程及家族傳承的實務知識。",
};

export default function InsightsPage() {
  const featured = insights[0];
  return (
    <main className="insights-page">
      <InsightsHeader />
      <section className="insights-hero">
        <div>
          <p className="section-kicker">WCG BUSINESS INSIGHTS</p>
          <h1>鉅瀧商業洞察</h1>
          <p>從香港市場出發，整理企業決策者需要的資本、科技、建築與傳承知識。</p>
        </div>
        <div className="insights-hero-index"><span>05</span><small>專題文章</small></div>
      </section>

      <section className="insights-featured">
        <a href={`/insights/${featured.slug}`} className="insights-featured-image"><img src={featured.image} alt={featured.imageAlt} /></a>
        <div className="insights-featured-copy">
          <p className="insight-category">精選 · {featured.category}</p>
          <h2><a href={`/insights/${featured.slug}`}>{featured.title}</a></h2>
          <p>{featured.summary}</p>
          <div className="insight-meta"><span>{featured.published}</span><span>{featured.readingTime}</span></div>
          <a className="text-link" href={`/insights/${featured.slug}`}>閱讀全文 <span>→</span></a>
        </div>
      </section>

      <nav className="insights-category-nav" aria-label="文章分類">
        {insightCategories.map((category) => <a key={category} href={`#${category}`}>{category}</a>)}
      </nav>

      <section className="insights-library">
        {insightCategories.map((category) => {
          const items = insights.filter((article) => article.category === category);
          return (
            <div className="insight-segment" id={category} key={category}>
              <div className="insight-segment-heading"><p className="section-kicker">KNOWLEDGE SCOPE</p><h2>{category}</h2><span>{String(items.length).padStart(2, "0")}</span></div>
              <div className="insight-card-grid">
                {items.map((article) => (
                  <article className="insight-card" key={article.slug}>
                    <a className="insight-card-image" href={`/insights/${article.slug}`}><img src={article.image} alt={article.imageAlt} loading="lazy" /></a>
                    <div><p className="insight-category">{article.service}</p><h3><a href={`/insights/${article.slug}`}>{article.title}</a></h3><p>{article.summary}</p><div className="insight-meta"><span>{article.published}</span><span>{article.readingTime}</span></div><a className="insight-card-link" href={`/insights/${article.slug}`}>閱讀全文 <span>↗</span></a></div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </section>
      <section className="direction-cta"><div><h2>需要把知識轉化為行動方案？</h2><p>鉅瀧集團連結七大專業範疇，協助企業梳理方向及推進項目。</p></div><a className="button button-gold" href="/#contact">聯絡我們<span>↗</span></a></section>
      <footer className="service-detail-footer"><span>© 2026 Win Chance Group Holdings Limited. 版權所有.</span><a href="/">集團首頁</a></footer>
    </main>
  );
}
