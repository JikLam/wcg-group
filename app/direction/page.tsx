"use client";

import { useState } from "react";
import SubpageHeader from "../components/subpage-header";

type Lang = "tc" | "sc" | "en";

const copy = {
  tc: {
    brand: "鉅瀧集團",
    home: "集團首頁",
    about: "關於集團",
    services: "集團服務",
    direction: "發展方向",
    partners: "合作夥伴",
    contact: "聯絡我們",
    kicker: "發展方向",
    title: "讓專業各展所長，\n讓資源彼此連結",
    intro: "鉅瀧集團以清晰的企業定位、跨領域協作與長遠視野，連結不同專業團隊，為企業及合作夥伴建立更完整、更具延展性的發展方案。",
    overview: "集團發展概覽",
    overviewTitle: "由多元專業，走向協同價值",
    overviewText: [
      "我們相信，真正可持續的企業價值，來自專業能力與資源網絡之間的有效連結。集團以香港為基地，整合影視娛樂、企業融資及上市、LPA 品牌加盟、創新科技、建築工程、數碼推廣及家族傳承等範疇，按不同需要組合合適團隊。",
      "在保持各項業務專業自主的同時，集團亦建立共同品牌價值、合作標準與資源平台，讓跨領域項目可以更清晰地規劃、協調及推進。",
    ],
    pillars: [
      ["建立清晰的集團品牌", "以一致的企業形象、服務標準與溝通方式，建立市場認受性及長期信任。"],
      ["連接各項專業服務", "按客戶目標整合不同範疇的專業能力，令策略與執行更緊密銜接。"],
      ["拓展跨地域合作機會", "立足香港，連結中國內地及國際市場的資源與合作夥伴，開拓可持續機遇。"],
    ],
    milestone: "發展里程碑",
    milestoneText: "Win Chance Group Holdings Limited 正式成立，開展多元業務整合與品牌建設。更多重要里程碑將於資料核實後陸續更新。",
    ctaTitle: "攜手探索下一個機遇",
    ctaText: "如欲了解集團發展方向或商討合作，歡迎與我們聯絡。",
    cta: "聯絡我們",
    rights: "版權所有",
  },
  sc: {
    brand: "钜泷集团", home: "集团首页", about: "关于集团", services: "集团服务", direction: "发展方向", partners: "合作伙伴", contact: "联系我们",
    kicker: "发展方向", title: "让专业各展所长，\n让资源彼此连接",
    intro: "钜泷集团以清晰的企业定位、跨领域协作与长远视野，连接不同专业团队，为企业及合作伙伴建立更完整、更具延展性的发展方案。",
    overview: "集团发展概览", overviewTitle: "由多元专业，走向协同价值",
    overviewText: ["我们相信，真正可持续的企业价值，来自专业能力与资源网络之间的有效连接。集团以香港为基地，整合影视娱乐、企业融资及上市、LPA 品牌加盟、创新科技、建筑工程、数字推广及家族传承等范畴，按不同需要组合合适团队。", "在保持各项业务专业自主的同时，集团亦建立共同品牌价值、合作标准与资源平台，让跨领域项目可以更清晰地规划、协调及推进。"],
    pillars: [["建立清晰的集团品牌", "以一致的企业形象、服务标准与沟通方式，建立市场认受性及长期信任。"], ["连接各项专业服务", "按客户目标整合不同范畴的专业能力，令策略与执行更紧密衔接。"], ["拓展跨地域合作机会", "立足香港，连接中国内地及国际市场的资源与合作伙伴，开拓可持续机遇。"]],
    milestone: "发展里程碑", milestoneText: "Win Chance Group Holdings Limited 正式成立，开展多元业务整合与品牌建设。更多重要里程碑将于资料核实后陆续更新。",
    ctaTitle: "携手探索下一个机遇", ctaText: "如欲了解集团发展方向或商讨合作，欢迎与我们联系。", cta: "联系我们", rights: "版权所有",
  },
  en: {
    brand: "WCG", home: "Group Home", about: "About", services: "Group Services", direction: "Our Direction", partners: "Partners", contact: "Contact",
    kicker: "OUR DIRECTION", title: "Specialist strengths,\nconnected resources",
    intro: "With a clear corporate identity, cross-sector collaboration and a long-term outlook, Win Chance Group connects specialist teams to create more complete and scalable strategies for businesses and partners.",
    overview: "GROUP OVERVIEW", overviewTitle: "From diverse expertise to shared value",
    overviewText: ["We believe sustainable enterprise value comes from effective connections between professional capabilities and resource networks. Based in Hong Kong, the Group brings together entertainment, corporate finance and listing, LPA franchising, technology, construction, digital marketing and family succession expertise.", "While every business retains its professional focus, WCG provides shared brand values, collaboration standards and a common resource platform so cross-sector projects can be planned, coordinated and delivered with greater clarity."],
    pillars: [["Build a clear group identity", "Create long-term market trust through a consistent corporate image, service standard and way of communicating."], ["Connect specialist services", "Combine expertise across fields around each partner’s objectives, bringing strategy and execution closer together."], ["Expand cross-market partnerships", "Connect resources and partners across Hong Kong, Mainland China and international markets to develop sustainable opportunities."]],
    milestone: "MILESTONE", milestoneText: "Win Chance Group Holdings Limited was established to integrate a diversified portfolio and build a unified corporate brand. Further verified milestones will be added as the Group develops.",
    ctaTitle: "Let’s explore the next opportunity", ctaText: "Contact us to learn more about the Group’s direction or discuss a potential partnership.", cta: "Contact us", rights: "All rights reserved",
  },
} as const;

export default function DirectionPage() {
  const [lang, setLang] = useState<Lang>("tc");
  const t = copy[lang];

  return (
    <main className="direction-page">
      <SubpageHeader lang={lang} setLang={setLang} labels={t} active="direction" />

      <section className="direction-hero">
        <div className="direction-hero-copy">
          <p className="section-kicker">{t.kicker}</p>
          <h1>{t.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
          <p>{t.intro}</p>
        </div>
        <div className="direction-mark" aria-hidden="true">
          <span>WCG</span><strong>2022</strong>
        </div>
      </section>

      <section className="direction-overview">
        <div>
          <p className="section-kicker">{t.overview}</p>
          <h2>{t.overviewTitle}</h2>
        </div>
        <div className="direction-overview-copy">
          {t.overviewText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="direction-priorities">
        {t.pillars.map(([title, text], index) => (
          <article key={title}>
            <span>0{index + 1}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="direction-milestone">
        <p className="section-kicker">{t.milestone}</p>
        <strong>2022</strong>
        <p>{t.milestoneText}</p>
      </section>

      <section className="direction-cta">
        <div><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p></div>
        <a className="button button-gold" href="mailto:info@winchancegroup.com">{t.cta}<span>↗</span></a>
      </section>

      <footer className="service-detail-footer">
        <span>© 2026 Win Chance Group Holdings Limited. {t.rights}.</span>
        <a href="/">{t.home}</a>
      </footer>
    </main>
  );
}
