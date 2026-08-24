"use client";

import { useState } from "react";
import { Lang, ServiceRecord, servicePageLabels, services } from "../service-data";

const languageLabels: { key: Lang; label: string }[] = [
  { key: "tc", label: "繁" },
  { key: "sc", label: "简" },
  { key: "en", label: "EN" },
];

export default function ServiceDetail({ service }: { service: ServiceRecord }) {
  const [lang, setLang] = useState<Lang>("tc");
  const t = service.content[lang];
  const labels = servicePageLabels[lang];

  return (
    <main className="service-page">
      <header className="service-detail-header">
        <div className="service-detail-primary">
          <a className="brand-lockup" href="/" aria-label="Win Chance Group Holdings Limited">
            <img src="/wcg-logo.png" alt="WCG" />
            <span><strong>{labels.brand}</strong><small>Win Chance Group Holdings Limited</small></span>
          </a>
          <a className="service-back" href="/#businesses"><span>←</span>{labels.back}</a>
          <div className="language-switcher" aria-label={labels.language}>
            {languageLabels.map((item) => (
              <button key={item.key} type="button" className={lang === item.key ? "active" : ""} onClick={() => setLang(item.key)} aria-pressed={lang === item.key}>{item.label}</button>
            ))}
          </div>
        </div>
        <nav className="detail-service-nav" aria-label={labels.allServices}>
          {services.map((item) => (
            <a key={item.slug} className={item.slug === service.slug ? "active" : ""} href={`/services/${item.slug}`}>
              <span>0{item.index}</span>{item.content[lang].title}
            </a>
          ))}
        </nav>
      </header>

      <section className="service-detail-hero">
        <div className="service-detail-hero-copy">
          <p className="section-kicker">GROUP SERVICE · 0{service.index}</p>
          <h1>{t.title}</h1>
          <p className="service-detail-lead">{t.short}</p>
        </div>
        <div className="service-detail-number" aria-hidden="true">0{service.index}</div>
      </section>

      <section className="service-overview-section">
        <div>
          <p className="section-kicker">{labels.overview}</p>
          <h2>{t.title}</h2>
        </div>
        <p>{t.overview}</p>
      </section>

      <section className="service-offerings-section">
        <div className="service-section-heading">
          <p className="section-kicker">{labels.offerings}</p>
          <h2>{labels.offerings}</h2>
        </div>
        <div className="service-offering-grid">
          {t.offerings.map((offering, index) => (
            <article key={offering}><span>0{index + 1}</span><h3>{offering}</h3></article>
          ))}
        </div>
      </section>

      <section className="service-audience-section">
        <div>
          <p className="section-kicker">{labels.audiences}</p>
          <h2>{labels.audiences}</h2>
        </div>
        <ul>{t.audiences.map((audience) => <li key={audience}>{audience}</li>)}</ul>
      </section>

      <section className="service-process-section">
        <div className="service-section-heading">
          <p className="section-kicker">{labels.process}</p>
          <h2>{labels.process}</h2>
        </div>
        <div className="service-process-grid">
          {labels.steps.map(([title, text], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
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
        <div><p className="section-kicker">CONTACT</p><h2>{labels.contactTitle}</h2><p>{labels.contactText}</p></div>
        <a className="button button-gold" href="mailto:info@winchancegroup.com">{labels.contact}<span>↗</span></a>
      </section>

      <footer className="service-detail-footer">
        <span>© 2026 Win Chance Group Holdings Limited.</span>
        <a href="/">{labels.back}</a>
      </footer>
    </main>
  );
}
