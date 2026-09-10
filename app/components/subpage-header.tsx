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
  active: "about" | "services" | "direction" | "partners";
}) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const links = [
    ["home", labels.home, "/"],
    ["about", labels.about, "/about"],
    ["direction", labels.direction, "/direction"],
    ["partners", labels.partners, "/partners"],
    ["contact", labels.contact, "/#contact"],
  ] as const;

  return (
    <header className="direction-header subpage-header" onMouseLeave={() => setServicesOpen(false)}>
      <a className="brand-lockup" href="/" aria-label="Win Chance Group Holdings Limited">
        <img src="/wcg-logo-transparent.png" alt="WCG" />
        <span><strong>{labels.brand}</strong><small>Win Chance Group Holdings Limited</small></span>
      </a>
      <nav className={open ? "open" : ""} aria-label={labels.home}>
        {links.slice(0, 2).map(([key, label, href]) => <a key={key} className={key === active ? "active" : ""} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <div className={`subpage-services-trigger ${servicesOpen ? "open" : ""}`} onMouseEnter={() => setServicesOpen(true)}>
          <button type="button" className={active === "services" ? "active" : ""} aria-expanded={servicesOpen} onClick={() => setServicesOpen(!servicesOpen)}>{labels.services}</button>
          <div className="subpage-service-bar">
            <a className="subpage-service-overview" href="/services" onClick={() => { setOpen(false); setServicesOpen(false); }}>
              {lang === "tc" ? "服務一覽" : lang === "sc" ? "服务一览" : "Overview"}<span>→</span>
            </a>
            <div className="subpage-service-links">
              {services.map((service) => (
                <a key={service.slug} href={`/services/${service.slug}`} onClick={() => { setOpen(false); setServicesOpen(false); }}>
                  <span>0{service.index}</span>{service.content[lang].title}
                </a>
              ))}
            </div>
          </div>
        </div>
        {links.slice(2).map(([key, label, href]) => <a key={key} className={key === active ? "active" : ""} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <button className="subpage-menu-toggle" type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
      <div className="language-switcher" aria-label="語言">
        {languages.map((item) => (
          <button key={item.key} type="button" className={lang === item.key ? "active" : ""} onClick={() => setLang(item.key)} aria-pressed={lang === item.key}>{item.label}</button>
        ))}
      </div>
    </header>
  );
}
