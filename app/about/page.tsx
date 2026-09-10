"use client";

import { useState } from "react";
import SubpageHeader from "../components/subpage-header";
import { services, type Lang } from "../services/service-data";

const copy = {
  tc: {
    brand: "鉅瀧集團", home: "集團首頁", about: "關於集團", services: "集團服務", direction: "發展方向", partners: "合作夥伴", contact: "聯絡我們",
    kicker: "關於鉅瀧", title: "整合專業能力，\n連結發展機會", intro: "Win Chance Group Holdings Limited 於 2025 年成立，立足香港，業務涵蓋七個專業範疇。",
    profile: "集團簡介", profileTitle: "跨領域的企業服務平台", paragraphs: ["鉅瀧集團匯聚影視娛樂、企業融資及上市、LPA 品牌加盟、創新科技、建築工程、數碼市場推廣及家族傳承等專業能力，按客戶的業務目標組合所需資源。", "集團引進不同領域的技術與人才，重視實際執行、專業協作及市場發展。我們與客戶及合作夥伴建立長期互信關係，並持續探索跨領域合作機會。"],
    philosophy: "集團理念", philosophyTitle: "追求極致，創新共贏", values: [["以人為本", "尊重專業人才與合作夥伴，重視清晰溝通及共同目標。"], ["專業協作", "按項目需要連結合適團隊，讓策略、技術與執行互相配合。"], ["長遠關係", "以誠信和成果建立信任，與客戶及夥伴共同發展。"]],
    scope: "七大業務", scopeTitle: "專業服務範疇", learn: "了解服務", cta: "商討合作", rights: "版權所有",
  },
  sc: {
    brand: "钜泷集团", home: "集团首页", about: "关于集团", services: "集团服务", direction: "发展方向", partners: "合作伙伴", contact: "联系我们",
    kicker: "关于钜泷", title: "整合专业能力，\n连接发展机会", intro: "Win Chance Group Holdings Limited 于 2025 年成立，立足香港，业务涵盖七个专业范畴。",
    profile: "集团简介", profileTitle: "跨领域的企业服务平台", paragraphs: ["钜泷集团汇聚影视娱乐、企业融资及上市、LPA 品牌加盟、创新科技、建筑工程、数字市场推广及家族传承等专业能力，按客户的业务目标组合所需资源。", "集团引进不同领域的技术与人才，重视实际执行、专业协作及市场发展。我们与客户及合作伙伴建立长期互信关系，并持续探索跨领域合作机会。"],
    philosophy: "集团理念", philosophyTitle: "追求极致，创新共赢", values: [["以人为本", "尊重专业人才与合作伙伴，重视清晰沟通及共同目标。"], ["专业协作", "按项目需要连接合适团队，让策略、技术与执行互相配合。"], ["长远关系", "以诚信和成果建立信任，与客户及伙伴共同发展。"]],
    scope: "七大业务", scopeTitle: "专业服务范畴", learn: "了解服务", cta: "商讨合作", rights: "版权所有",
  },
  en: {
    brand: "WCG", home: "Group Home", about: "About", services: "Group Services", direction: "Our Direction", partners: "Partners", contact: "Contact",
    kicker: "ABOUT WCG", title: "Integrated expertise,\nconnected opportunities", intro: "Win Chance Group Holdings Limited was established in 2025. Based in Hong Kong, the Group operates across seven specialist fields.",
    profile: "GROUP PROFILE", profileTitle: "A cross-sector business services platform", paragraphs: ["WCG brings together entertainment, corporate finance and listing, LPA franchising, innovation and technology, construction, digital marketing and family succession expertise, combining resources around each client’s business objectives.", "The Group introduces technology and specialist talent from different fields, with an emphasis on practical delivery, professional collaboration and market development. We build trusted, long-term relationships and continue to explore cross-sector opportunities."],
    philosophy: "GROUP PHILOSOPHY", philosophyTitle: "Excellence through shared innovation", values: [["People", "Respect expertise and partners through clear communication and shared objectives."], ["Professional collaboration", "Connect the right teams so strategy, technology and delivery work together."], ["Long-term relationships", "Build trust through integrity and results, growing together with clients and partners."]],
    scope: "SEVEN BUSINESSES", scopeTitle: "Our specialist services", learn: "View service", cta: "Discuss a partnership", rights: "All rights reserved",
  },
} as const;

export default function AboutPage() {
  const [lang, setLang] = useState<Lang>("tc");
  const t = copy[lang];

  return (
    <main className="about-page">
      <SubpageHeader lang={lang} setLang={setLang} labels={t} active="about" />
      <section className="subpage-hero about-hero">
        <div><p className="section-kicker">{t.kicker}</p><h1>{t.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1><p>{t.intro}</p></div>
        <div className="subpage-year"><small>EST.</small><strong>2025</strong><span>HONG KONG</span></div>
      </section>
      <section className="about-profile">
        <div><p className="section-kicker">{t.profile}</p><h2>{t.profileTitle}</h2></div>
        <div className="about-profile-copy">{t.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>
      <section className="about-values">
        <div><p className="section-kicker">{t.philosophy}</p><h2>{t.philosophyTitle}</h2></div>
        <div className="about-values-grid">{t.values.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="about-services">
        <p className="section-kicker">{t.scope}</p><h2>{t.scopeTitle}</h2>
        <div className="about-service-list">{services.map((service) => <a key={service.slug} href={`/services/${service.slug}`}><span>0{service.index}</span><strong>{service.content[lang].title}</strong><em>{t.learn} →</em></a>)}</div>
      </section>
      <section className="direction-cta"><div><h2>{t.cta}</h2><p>info@winchancegroup.com · +852 2668 2600</p></div><a className="button button-gold" href="mailto:info@winchancegroup.com">{t.contact}<span>↗</span></a></section>
      <footer className="service-detail-footer"><span>© 2026 Win Chance Group Holdings Limited. {t.rights}.</span><a href="/">{t.home}</a></footer>
    </main>
  );
}
