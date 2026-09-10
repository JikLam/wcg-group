"use client";

import { useState } from "react";
import SubpageHeader from "../components/subpage-header";
import type { Lang } from "../services/service-data";
import { featuredPartners, strategicPartners } from "./partner-data";

const copy = {
  tc: {
    brand: "鉅瀧集團", home: "集團首頁", about: "關於集團", services: "集團服務", direction: "發展方向", partners: "合作夥伴", contact: "聯絡我們",
    kicker: "合作夥伴", title: "跨行業合作網絡", intro: "我們按項目目標連結策略、技術、平台及市場資源，與不同領域的企業及專業機構探索合作。",
    network: "合作網絡", networkTitle: "客戶及夥伴", networkText: "相關合作網絡涵蓋科技、金融、工業、消費品牌、汽車及地產等行業。標誌及商標屬其各自擁有人所有。", strategic: "策略合作", featured: "客戶及夥伴",
    modes: "合作方式", modesTitle: "由需要出發，組合合適資源", cards: [["策略及項目合作", "釐清目標及項目範圍，按需要整合集團內外的專業團隊。"], ["科技及平台合作", "就企業網絡、數據、安全、防偽及自動化方案探索合作。"], ["品牌及加盟合作", "提供 LPA 品牌授權、營運模式與支援，並按正式加盟文件及協議推進。"], ["專業服務協作", "就融資、上市、家族傳承及建築工程協調合資格專業人士。"]],
    ctaTitle: "與我們洽談合作", ctaText: "請告訴我們你的業務目標及所需資源。", cta: "聯絡我們", rights: "版權所有",
  },
  sc: {
    brand: "钜泷集团", home: "集团首页", about: "关于集团", services: "集团服务", direction: "发展方向", partners: "合作伙伴", contact: "联系我们",
    kicker: "合作伙伴", title: "跨行业合作网络", intro: "我们按项目目标连接策略、技术、平台及市场资源，与不同领域的企业及专业机构探索合作。",
    network: "合作网络", networkTitle: "客户及伙伴", networkText: "相关合作网络涵盖科技、金融、工业、消费品牌、汽车及地产等行业。标志及商标属其各自拥有人所有。", strategic: "战略合作", featured: "客户及伙伴",
    modes: "合作方式", modesTitle: "由需要出发，组合合适资源", cards: [["策略及项目合作", "厘清目标及项目范围，按需要整合集团内外的专业团队。"], ["科技及平台合作", "就企业网络、数据、安全、防伪及自动化方案探索合作。"], ["品牌及加盟合作", "提供 LPA 品牌授权、营运模式与支持，并按正式加盟文件及协议推进。"], ["专业服务协作", "就融资、上市、家族传承及建筑工程协调合资格专业人士。"]],
    ctaTitle: "与我们洽谈合作", ctaText: "请告诉我们你的业务目标及所需资源。", cta: "联系我们", rights: "版权所有",
  },
  en: {
    brand: "WCG", home: "Group Home", about: "About", services: "Group Services", direction: "Our Direction", partners: "Partners", contact: "Contact",
    kicker: "PARTNERSHIPS", title: "A cross-industry network", intro: "We connect strategy, technology, platforms and market resources around each project, exploring opportunities with businesses and professional institutions across different fields.",
    network: "OUR NETWORK", networkTitle: "Clients and partners", networkText: "The network presented here spans technology, finance, industry, consumer brands, automotive and property. All logos and trademarks belong to their respective owners.", strategic: "Strategic partners", featured: "Clients and partners",
    modes: "COLLABORATION", modesTitle: "Resources organised around each need", cards: [["Strategy and project collaboration", "Define objectives and project scope, then connect relevant specialists inside and outside the Group."], ["Technology and platform collaboration", "Explore enterprise network, data, security, authentication and automation solutions."], ["Brand and franchise collaboration", "Provide LPA licensing, operating models and support subject to formal franchise documents and agreements."], ["Professional service coordination", "Coordinate qualified specialists for finance, listing, succession and construction projects."]],
    ctaTitle: "Discuss a partnership", ctaText: "Tell us about your business objectives and the resources you need.", cta: "Contact us", rights: "All rights reserved",
  },
} as const;

export default function PartnersPage() {
  const [lang, setLang] = useState<Lang>("tc");
  const t = copy[lang];
  return (
    <main className="partners-page">
      <SubpageHeader lang={lang} setLang={setLang} labels={t} active="partners" />
      <section className="subpage-hero partners-hero"><div><p className="section-kicker">{t.kicker}</p><h1>{t.title}</h1><p>{t.intro}</p></div><div className="partner-orbit" aria-hidden="true"><span>WCG</span><strong>合作</strong></div></section>
      <section className="partners-network">
        <div><p className="section-kicker">{t.network}</p><h2>{t.networkTitle}</h2><p>{t.networkText}</p></div>
        <div className="partner-logo-groups">
          <section><h3>{t.strategic}</h3><div className="partner-logo-grid strategic">{strategicPartners.map(([name, image]) => <div key={name}><img src={image} alt={name} /></div>)}</div></section>
          <section><h3>{t.featured}</h3><div className="partner-logo-grid featured">{featuredPartners.map(([name, image]) => <div key={name}><img src={image} alt={name} /></div>)}</div></section>
        </div>
      </section>
      <section className="partners-modes"><div><p className="section-kicker">{t.modes}</p><h2>{t.modesTitle}</h2></div><div className="partner-mode-grid">{t.cards.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="direction-cta"><div><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p></div><a className="button button-gold" href="mailto:info@winchancegroup.com">{t.cta}<span>↗</span></a></section>
      <footer className="service-detail-footer"><span>© 2026 Win Chance Group Holdings Limited. {t.rights}.</span><a href="/">{t.home}</a></footer>
    </main>
  );
}
