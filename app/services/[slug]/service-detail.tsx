"use client";

import { usePersistedLanguage } from "../../components/use-persisted-language";
import SubpageHeader from "../../components/subpage-header";
import WhatsAppLink from "../../components/whatsapp-link";
import { ServiceRecord, servicePageLabels, services } from "../service-data";

const headerLabels = {
  tc: { brand: "鉅瀧集團", home: "集團首頁", about: "關於集團", services: "集團服務", direction: "發展方向", partners: "合作夥伴", insights: "商業洞察", contact: "聯絡我們" },
  sc: { brand: "钜泷集团", home: "集团首页", about: "关于集团", services: "集团服务", direction: "发展方向", partners: "合作伙伴", insights: "商业洞察", contact: "联系我们" },
  en: { brand: "Win Chance Group Holdings Limited", home: "Group Home", about: "About", services: "Group Services", direction: "Our Direction", partners: "Partners", insights: "Insights", contact: "Contact" },
} as const;

function formatHeading(text: string) {
  return text.replace(/[。.]$/, "").replace(/[，,]\s*/g, "\n");
}

export default function ServiceDetail({ service }: { service: ServiceRecord }) {
  const [lang, setLang] = usePersistedLanguage();
  const t = service.content[lang];
  const labels = servicePageLabels[lang];
  const overviewParts = splitOverview(t.overview);

  return (
    <main className="service-page">
      <SubpageHeader lang={lang} setLang={setLang} labels={headerLabels[lang]} active="services" />

      <section className="service-detail-hero">
        <div className="service-detail-hero-copy">
          <p className="section-kicker">{lang === "tc" ? "集團服務" : lang === "sc" ? "集团服务" : "GROUP SERVICE"} · 0{service.index}</p>
          <h1>{t.title}</h1>
          <p className="service-detail-lead">{t.short}</p>
        </div>
        <div className={`service-detail-media ${service.imageFit === "contain" ? "is-contained" : ""}`}>
          <img
            src={service.image}
            alt={t.title}
            fetchPriority="high"
            decoding="async"
            style={{ objectFit: service.imageFit, objectPosition: service.imagePosition }}
          />
          <span aria-hidden="true">0{service.index}</span>
        </div>
      </section>

      <section className="service-intro-section">
        <div className="service-intro-heading">
          <p className="section-kicker">{labels.overview}</p>
          <h2>{formatHeading(t.short)}</h2>
        </div>
        <div className="service-intro-copy">
          {overviewParts.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="service-gallery-section" aria-label={t.title}>
        <figure className="service-gallery-main"><img src={service.gallery[0]} alt={`${t.title} — 01`} loading="lazy" decoding="async" /></figure>
        <figure className="service-gallery-side"><img src={service.gallery[1]} alt={`${t.title} — 02`} loading="lazy" decoding="async" /></figure>
        <div className="service-gallery-note"><span>0{service.index}</span><p>{t.short}</p></div>
      </section>

      <section className="service-capabilities-section">
        <div className="service-capabilities-heading">
          <p className="section-kicker">{labels.offerings}</p>
          <h2>{labels.offerings}</h2>
        </div>
        <div className="service-capability-list">
          {t.offerings.map((offering, index) => (
            <article key={offering}><span>0{index + 1}</span><h3>{offering}</h3><b>↗</b></article>
          ))}
        </div>
      </section>

      <section className="service-fit-section">
        <div className="service-audience-block">
          <div><p className="section-kicker">{labels.audiences}</p><h2>{labels.audiences}</h2></div>
          <ul>{t.audiences.map((audience, index) => <li key={audience}><span>0{index + 1}</span>{audience}</li>)}</ul>
        </div>
        <div className="service-process-block">
          <div><p className="section-kicker">{labels.process}</p><h2>{labels.process}</h2></div>
          <div className="service-process-list">
            {labels.steps.map(([title, text], index) => (
              <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-other-section">
        <p className="section-kicker">{labels.other}</p>
        <div className="service-other-links">
          {services.filter((item) => item.slug !== service.slug).map((item) => (
            <a key={item.slug} href={`/services/${item.slug}`}><span>0{item.index}</span>{item.content[lang].title}<b>→</b></a>
          ))}
        </div>
      </section>

      <section className="service-cta">
        <div><p className="section-kicker">{lang === "tc" ? "聯絡我們" : lang === "sc" ? "联系我们" : "CONTACT"}</p><h2>{labels.contactTitle}</h2><p>{labels.contactText}</p></div>
        <WhatsAppLink label={labels.contact} />
      </section>

      <footer className="service-detail-footer">
        <span>© 2026 Win Chance Group Holdings Limited.</span>
        <a href="/">{labels.back}</a>
      </footer>
    </main>
  );
}

function splitOverview(text: string) {
  const sentences = text.match(/[^。！？.!?]+[。！？.!?]?/g)?.map((part) => part.trim()).filter(Boolean) ?? [text];
  if (sentences.length > 1) return sentences;

  const separator = text.includes("，") ? "，" : ",";
  const clauses = text.split(separator).map((part) => part.trim()).filter(Boolean);
  if (clauses.length < 3) return [text];

  const midpoint = Math.ceil(clauses.length / 2);
  return [clauses.slice(0, midpoint).join(separator) + separator, clauses.slice(midpoint).join(separator)];
}
