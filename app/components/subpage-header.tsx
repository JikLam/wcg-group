"use client";

import { useState } from "react";
import { services, type Lang } from "../services/service-data";

type HeaderLabels = {
  brand: string;
  home: string;
  about: string;
  services: string;
  direction: string;
  partners: string;
  insights?: string;
  contact: string;
};

const languages: { key: Lang; label: string }[] = [
  { key: "tc", label: "繁" },
  { key: "sc", label: "简" },
  { key: "en", label: "EN" },
];

export default function SubpageHeader({
  lang,
  setLang,
  labels,
  active,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
  labels: HeaderLabels;
  active: "about" | "services" | "direction" | "partners" | "insights" | "contact";
}) {
  const [open, setOpen] = useState(false);
  const links = [
    ["about", labels.about, "/about"],
    ["direction", labels.direction, "/direction"],
    ["partners", labels.partners, "/partners"],
    ["insights", labels.insights ?? (lang === "tc" ? "商業洞察" : lang === "sc" ? "商业洞察" : "Insights"), "/insights"],
    ["contact", labels.contact, "/contact"],
  ] as const;

  return (
    <header className="site-header" onMouseLeave={() => setOpen(false)}>
      <div className="header-primary-row">
        <a className={`brand-lockup ${lang === "en" ? "is-english" : "is-bilingual"}`} href="/" aria-label="Win Chance Group Holdings Limited">
          <img src="/wcg-logo-transparent.png" alt="WCG" />
          <span><strong>{labels.brand}</strong>{lang !== "en" && <small>Win Chance Group Holdings Limited</small>}</span>
        </a>

        <nav className="primary-nav" aria-label={labels.home}>
          <a className={active === "about" ? "active" : ""} href="/about">{labels.about}</a>
          <button type="button" className={active === "services" ? "active" : ""} aria-expanded={open} onMouseEnter={() => setOpen(true)} onClick={() => setOpen(!open)}>{labels.services}</button>
          {links.slice(1).map(([key, label, href]) => <a key={key} className={key === active ? "active" : ""} href={href}>{label}</a>)}
        </nav>

        <button className="menu-toggle" type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>

        <div className="language-switcher" aria-label="Language">
          {languages.map((item) => (
            <button key={item.key} type="button" className={lang === item.key ? "active" : ""} onClick={() => setLang(item.key)} aria-pressed={lang === item.key}>{item.label}</button>
          ))}
        </div>
      </div>

      <div className={`header-menu ${open ? "nav-open" : ""}`}>
        <nav className="service-nav" aria-label={labels.services}>
          <a className="service-nav-label" href="/services" onClick={() => setOpen(false)}>{lang === "tc" ? "服務一覽" : lang === "sc" ? "服务一览" : "Overview"}</a>
          <div className="service-nav-links">
            {services.map((service) => (
              <a key={service.slug} href={`/services/${service.slug}`} onClick={() => setOpen(false)}>
                <span>0{service.index}</span>{service.content[lang].title}
              </a>
            ))}
          </div>
        </nav>
        <nav className="mobile-utility-nav" aria-label="Mobile navigation">
          <a href="/about" onClick={() => setOpen(false)}>{labels.about}</a>
          <a href="/services" onClick={() => setOpen(false)}>{labels.services}</a>
          {links.slice(1).map(([key, label, href]) => <a key={key} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
      </div>
    </header>
  );
}
