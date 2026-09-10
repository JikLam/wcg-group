"use client";

import Link from "next/link";
import { useState } from "react";
import type { Lang } from "../services/service-data";

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
  const links = [
    ["home", labels.home, "/"],
    ["about", labels.about, "/about"],
    ["services", labels.services, "/services"],
    ["direction", labels.direction, "/direction"],
    ["partners", labels.partners, "/partners"],
    ["contact", labels.contact, "/#contact"],
  ] as const;

  return (
    <header className="direction-header subpage-header">
      <Link className="brand-lockup" href="/" aria-label="Win Chance Group Holdings Limited">
        <img src="/wcg-logo-transparent.png" alt="WCG" />
        <span><strong>{labels.brand}</strong><small>Win Chance Group Holdings Limited</small></span>
      </Link>
      <nav className={open ? "open" : ""} aria-label={labels.home}>
        {links.map(([key, label, href]) => (
          <Link key={key} className={key === active ? "active" : ""} href={href} onClick={() => setOpen(false)}>{label}</Link>
        ))}
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
