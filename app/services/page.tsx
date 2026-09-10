"use client";

import { useState } from "react";
import Link from "next/link";
import SubpageHeader from "../components/subpage-header";
import { services, type Lang } from "./service-data";

const copy = {
  tc: {
    brand: "鉅瀧集團", home: "集團首頁", about: "關於集團", services: "集團服務", direction: "發展方向", partners: "合作夥伴", contact: "聯絡我們",
    kicker: "集團服務", title: "七大專業範疇，\n連結多元發展機遇", intro: "每項業務均由專業團隊推進，亦可按項目需要跨領域協作，為企業及合作夥伴建立更完整的發展方案。",
    index: "服務一覽", indexTitle: "由需要出發，探索合適服務", learn: "了解更多", ctaTitle: "未確定需要哪項服務？", ctaText: "告訴我們你的目標，我們會協助梳理方向及連結合適團隊。", cta: "聯絡我們", rights: "版權所有",
  },
  sc: {
    brand: "钜泷集团", home: "集团首页", about: "关于集团", services: "集团服务", direction: "发展方向", partners: "合作伙伴", contact: "联系我们",
    kicker: "集团服务", title: "七大专业范畴，\n连接多元发展机遇", intro: "每项业务均由专业团队推进，亦可按项目需要跨领域协作，为企业及合作伙伴建立更完整的发展方案。",
    index: "服务一览", indexTitle: "由需要出发，探索合适服务", learn: "了解更多", ctaTitle: "未确定需要哪项服务？", ctaText: "告诉我们你的目标，我们会协助梳理方向及连接合适团队。", cta: "联系我们", rights: "版权所有",
  },
  en: {
    brand: "WCG", home: "Group Home", about: "About", services: "Group Services", direction: "Our Direction", partners: "Partners", contact: "Contact",
    kicker: "GROUP SERVICES", title: "Seven specialist fields,\nconnected opportunities", intro: "Each business is led by a specialist team and can connect across disciplines where a project calls for a more complete growth strategy.",
    index: "SERVICE INDEX", indexTitle: "Start with your needs", learn: "Discover more", ctaTitle: "Not sure where to begin?", ctaText: "Tell us your objective and we will help identify the right direction and team.", cta: "Contact us", rights: "All rights reserved",
  },
} as const;

export default function ServicesPage() {
  const [lang, setLang] = useState<Lang>("tc");
  const t = copy[lang];

  return (
    <main className="services-overview-page">
      <SubpageHeader lang={lang} setLang={setLang} labels={t} active="services" />
      <section className="services-overview-hero">
        <div>
          <p className="section-kicker">{t.kicker}</p>
          <h1>{t.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
          <p>{t.intro}</p>
        </div>
        <div className="services-overview-mark" aria-hidden="true"><span>07</span><small>WCG</small></div>
      </section>

      <section className="services-overview-list">
        <div className="services-overview-intro"><p className="section-kicker">{t.index}</p><h2>{t.indexTitle}</h2></div>
        <div className="services-editorial-grid">
          {services.map((service) => {
            const item = service.content[lang];
            return (
              <Link className="services-editorial-card" key={service.slug} href={`/services/${service.slug}`}>
                <div className={`services-editorial-media ${service.imageFit === "contain" ? "is-contained" : ""}`}>
                  <img src={service.image} alt={item.title} style={{ objectFit: service.imageFit, objectPosition: service.imagePosition }} />
                  <span>0{service.index}</span>
                </div>
                <div className="services-editorial-copy"><h3>{item.title}</h3><p>{item.short}</p><strong>{t.learn}<b>→</b></strong></div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="direction-cta"><div><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p></div><a className="button button-gold" href="mailto:info@winchancegroup.com">{t.cta}<span>↗</span></a></section>
      <footer className="service-detail-footer"><span>© 2026 Win Chance Group Holdings Limited. {t.rights}.</span><Link href="/">{t.home}</Link></footer>
    </main>
  );
}
