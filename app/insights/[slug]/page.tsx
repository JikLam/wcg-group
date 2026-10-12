import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsightsHeader from "../insights-header";
import { findInsight, insights } from "../insight-data";

type InsightPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = findInsight(slug);
  if (!article) return {};
  const title = `${article.title} | 鉅瀧商業洞察`;
  const image = new URL(article.image, "https://winchancegroup.com").toString();
  return {
    title,
    description: article.seoDescription,
    keywords: article.keywords,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: { title, description: article.seoDescription, type: "article", publishedTime: article.published, tags: article.tags, images: [{ url: image, width: 1800, height: 1013, alt: article.imageAlt }] },
    twitter: { card: "summary_large_image", title, description: article.seoDescription, images: [image] },
  };
}

export default async function InsightArticlePage({ params }: InsightPageProps) {
  const { slug } = await params;
  const article = findInsight(slug);
  if (!article) notFound();
  const related = insights.filter((item) => item.slug !== article.slug).slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seoDescription,
    image: `https://winchancegroup.com${article.image}`,
    datePublished: article.published,
    dateModified: article.published,
    inLanguage: "zh-Hant-HK",
    author: { "@type": "Organization", name: "Win Chance Group Holdings Limited", url: "https://winchancegroup.com" },
    publisher: { "@type": "Organization", name: "Win Chance Group Holdings Limited", logo: { "@type": "ImageObject", url: "https://winchancegroup.com/wcg-logo-transparent.png" } },
    mainEntityOfPage: `https://winchancegroup.com/insights/${article.slug}`,
    keywords: article.keywords.join(", "),
  };

  return (
    <main className="insight-article-page">
      <InsightsHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <article>
        <header className="insight-article-header">
          <div className="insight-article-heading">
            <a href="/insights" className="insight-back">← 返回商業洞察</a>
            <p className="insight-category">{article.category} · {article.service}</p>
            <h1>{article.title}</h1>
            <p className="insight-deck">{article.summary}</p>
            <div className="insight-meta"><span>發布日期 {article.published}</span><span>{article.readingTime}</span></div>
          </div>
          <img className="insight-article-hero" src={article.image} alt={article.imageAlt} />
        </header>

        <div className="insight-article-layout">
          <aside className="insight-toc"><p>文章目錄</p>{article.sections.map((section, index) => <a key={section.heading} href={`#section-${index + 1}`}><span>0{index + 1}</span>{section.heading}</a>)}</aside>
          <div className="insight-article-body">
            <p className="insight-intro">{article.intro}</p>
            {article.sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.heading}>
                <span className="insight-section-number">0{index + 1}</span>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
              </section>
            ))}
            <section className="insight-brand-note"><p className="section-kicker">WCG PERSPECTIVE</p><h2>由知識走向實際執行</h2><p>{article.conclusion}</p><a className="button button-gold" href={`/services/${article.serviceSlug}`}>了解相關服務<span>↗</span></a></section>
            <section className="insight-references"><h2>參考資料</h2><p>本文只供一般資訊及教育用途，不構成法律、財務、稅務、投資或其他專業意見。</p><ol>{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a></li>)}</ol></section>
            <div className="insight-taxonomy"><div><small>關鍵字</small>{article.keywords.map((item) => <span key={item}>{item}</span>)}</div><div><small>標籤</small>{article.tags.map((item) => <span key={item}>{item}</span>)}</div></div>
          </div>
        </div>
      </article>
      <section className="related-insights"><div><p className="section-kicker">MORE INSIGHTS</p><h2>延伸閱讀</h2></div><div className="related-insights-grid">{related.map((item) => <a key={item.slug} href={`/insights/${item.slug}`}><img src={item.image} alt={item.imageAlt} loading="lazy" /><p>{item.category}</p><h3>{item.title}</h3><span>閱讀全文 →</span></a>)}</div></section>
      <footer className="service-detail-footer"><span>© 2026 Win Chance Group Holdings Limited. 版權所有.</span><a href="/insights">商業洞察</a></footer>
    </main>
  );
}
