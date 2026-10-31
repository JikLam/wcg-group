"use client";

import SubpageHeader from "../components/subpage-header";
import { usePersistedLanguage } from "../components/use-persisted-language";
import type { Lang } from "../services/service-data";
import { insightCategories, insights } from "./insight-data";
import WhatsAppLink from "../components/whatsapp-link";

const headerLabels = {
  tc: { brand: "鉅瀧集團", home: "集團首頁", about: "關於集團", services: "集團服務", direction: "發展方向", partners: "合作夥伴", insights: "商業洞察", contact: "聯絡我們" },
  sc: { brand: "钜泷集团", home: "集团首页", about: "关于集团", services: "集团服务", direction: "发展方向", partners: "合作伙伴", insights: "商业洞察", contact: "联系我们" },
  en: { brand: "Win Chance Group Holdings Limited", home: "Group Home", about: "About", services: "Group Services", direction: "Our Direction", partners: "Partners", insights: "Insights", contact: "Contact" },
} as const;

const interfaceCopy = {
  tc: {
    title: "鉅瀧商業洞察",
    intro: "從香港市場出發，整理企業決策者需要的資本、科技、建築與傳承知識。",
    articles: "專題文章",
    featured: "精選",
    read: "閱讀全文",
    categoryNav: "文章分類",
    ctaTitle: "需要把知識轉化為行動方案？",
    ctaText: "鉅瀧集團連結七大專業範疇，協助企業梳理方向及推進項目。",
    contact: "聯絡我們",
    rights: "版權所有",
    home: "集團首頁",
  },
  sc: {
    title: "钜泷商业洞察",
    intro: "从香港市场出发，整理企业决策者需要的资本、科技、建筑与传承知识。",
    articles: "专题文章",
    featured: "精选",
    read: "阅读全文",
    categoryNav: "文章分类",
    ctaTitle: "需要把知识转化为行动方案？",
    ctaText: "钜泷集团连接七大专业范畴，协助企业梳理方向及推进项目。",
    contact: "联系我们",
    rights: "版权所有",
    home: "集团首页",
  },
  en: {
    title: "WCG Business Insights",
    intro: "Practical knowledge for decision-makers across capital, technology, construction and succession in Hong Kong.",
    articles: "Articles",
    featured: "Featured",
    read: "Read article",
    categoryNav: "Article categories",
    ctaTitle: "Ready to turn knowledge into action?",
    ctaText: "WCG connects seven specialist fields to help businesses define direction and move projects forward.",
    contact: "Contact us",
    rights: "All rights reserved",
    home: "Group Home",
  },
} as const;

const categoryCopy: Record<string, Record<Lang, string>> = {
  "資本與企業發展": { tc: "資本與企業發展", sc: "资本与企业发展", en: "Capital & Corporate Growth" },
  "品牌與內容": { tc: "品牌與內容", sc: "品牌与内容", en: "Brand & Content" },
  "數碼與科技": { tc: "數碼與科技", sc: "数码与科技", en: "Digital & Technology" },
  "建築創新": { tc: "建築創新", sc: "建筑创新", en: "Construction Innovation" },
  "財富與傳承": { tc: "財富與傳承", sc: "财富与传承", en: "Wealth & Succession" },
};

const serviceCopy: Record<string, Record<Lang, string>> = {
  "企業融資及上市": { tc: "企業融資及上市", sc: "企业融资及上市", en: "Corporate Finance & Listing" },
  "數碼市場推廣": { tc: "數碼市場推廣", sc: "数码市场推广", en: "Digital Marketing" },
  "建築建設工程": { tc: "建築建設工程", sc: "建筑建设工程", en: "Construction & Engineering" },
  "創新科技研發": { tc: "創新科技研發", sc: "创新科技研发", en: "Innovation & Technology" },
  "家族傳承規劃": { tc: "家族傳承規劃", sc: "家族传承规划", en: "Family Succession Planning" },
  "影視娛樂製作": { tc: "影視娛樂製作", sc: "影视娱乐制作", en: "Entertainment Production" },
  "品牌名店加盟": { tc: "品牌名店加盟", sc: "品牌名店加盟", en: "Brand Franchise" },
};

type LocalArticle = { title: string; summary: string };

const simplifiedArticles: Record<string, LocalArticle> = {
  "whatsapp-business-customer-service-hong-kong": { title: "WhatsApp 查询多，成交少？香港中小企必做的 5 个改善", summary: "客人问完价就消失？用 5 个简单改善，整理网站入口、回复及跟进，附可直接改写的 WhatsApp 信息。" },
  "hong-kong-ipo-readiness-guide": { title: "香港企业上市前准备：由财务基础到管治架构的实务路线图", summary: "上市不是提交申请前数月才开始的工作。本文整理香港企业由资金需求、财务纪录、内部监控到专业团队协调的上市前准备框架。" },
  "privacy-first-digital-marketing-hong-kong": { title: "香港数码推广合规入门：收集客户资料前必须想清楚的五件事", summary: "由表格、会员计划到电邮与即时通讯推广，香港企业应如何建立以私隐为先的客户资料流程？本文以五个实务环节说明。" },
  "modular-integrated-construction-hong-kong": { title: "MiC 组装合成建筑法是什么？香港工程项目的效益、限制与准备", summary: "MiC 把部分现场工序转移至工厂，但并非简单把房间像积木般叠起。本文说明香港项目采用 MiC 的效益、限制及前期准备。" },
  "secure-ai-adoption-for-hong-kong-smes": { title: "香港中小企导入 AI：由小型场景开始，同时建立网络安全底线", summary: "AI 不应只是一个聊天工具采购项目。本文提供香港中小企由场景选择、数据整理、权限管理到成效衡量的安全导入框架。" },
  "family-succession-planning-hong-kong": { title: "香港家族传承规划：资产、企业与家族共识如何同步安排", summary: "传承不只是分配资产。本文从家族目标、企业控制、流动性、治理及下一代培育，说明香港家族如何启动有结构的规划。" },
  "hong-kong-corporate-live-stream-production-guide": { title: "香港企业直播活动制作指南：由流程设计到现场备援", summary: "企业直播不是架起摄影机便完成。本文由目标、节目流程、多机拍摄、彩排到网络与录影备援，整理香港企业活动的制作框架。" },
  "hong-kong-franchise-due-diligence-guide": { title: "香港品牌加盟前必读：如何评估单店模型、支持系统与合作条款", summary: "加盟的核心不是买入一个商标，而是验证一套可重复的生意系统。本文整理香港加盟者评估财务、选址、营运支持与合作条款的方法。" },
  "sd-wan-guide-for-hong-kong-businesses": { title: "香港多分店企业 SD-WAN 指南：提升连线韧性与集中管理", summary: "当分店、云端系统与视像会议同时增长，传统网络管理容易变得复杂。本文说明 SD-WAN 的运作、效益、风险与导入步骤。" },
  "hong-kong-commercial-construction-planning": { title: "香港商业建筑项目前期策划：预算、进度与风险管理清单", summary: "商业工程的重大超支往往在动工前已埋下。本文由项目目标、现场调查、预算、审批、采购到风险分配，整理前期策划清单。" },
  "seo-content-strategy-for-hong-kong-businesses": { title: "香港企业 SEO 内容策略：由搜寻意图到可持续自然流量", summary: "SEO 不是在文章重复关键字。本文说明香港企业如何由搜寻意图、主题架构、内容制作、技术基础及成效指标建立长期自然流量。" },
};

const englishArticles: Record<string, LocalArticle> = {
  "whatsapp-business-customer-service-hong-kong": { title: "More WhatsApp Enquiries, Fewer Sales? Five Fixes for Hong Kong SMEs", summary: "A concise Traditional Chinese guide with five practical improvements and ready-to-adapt messages for handling enquiries and follow-ups." },
  "hong-kong-ipo-readiness-guide": { title: "Preparing a Hong Kong Company for an IPO: From Financial Foundations to Governance", summary: "A practical framework for preparing funding needs, financial records, internal controls and advisers well before an IPO application." },
  "privacy-first-digital-marketing-hong-kong": { title: "Privacy-First Digital Marketing in Hong Kong: Five Questions Before Collecting Customer Data", summary: "Five practical steps for building responsible customer-data workflows across forms, memberships, email and instant messaging." },
  "modular-integrated-construction-hong-kong": { title: "What Is MiC? Benefits, Limitations and Preparation for Hong Kong Projects", summary: "How Modular Integrated Construction changes project delivery, and what teams should prepare before design, manufacturing and installation." },
  "secure-ai-adoption-for-hong-kong-smes": { title: "Adopting AI in Hong Kong SMEs: Start Small and Build a Cybersecurity Baseline", summary: "A safe adoption framework covering use-case selection, data preparation, access control and measurable outcomes." },
  "family-succession-planning-hong-kong": { title: "Family Succession Planning in Hong Kong: Aligning Assets, Business and Family Consensus", summary: "A structured approach to family objectives, business control, liquidity, governance and next-generation development." },
  "hong-kong-corporate-live-stream-production-guide": { title: "Corporate Live-Stream Production in Hong Kong: From Programme Design to Redundancy", summary: "A production framework covering objectives, run-of-show, multi-camera filming, rehearsals, connectivity and recording backup." },
  "hong-kong-franchise-due-diligence-guide": { title: "Before Joining a Franchise in Hong Kong: Assessing Economics, Support and Terms", summary: "How prospective franchisees can evaluate unit economics, site selection, operating support and contractual terms." },
  "sd-wan-guide-for-hong-kong-businesses": { title: "SD-WAN for Multi-Branch Hong Kong Businesses: Resilience and Centralised Management", summary: "How SD-WAN works, where it creates value and what to assess before deployment across branches and cloud services." },
  "hong-kong-commercial-construction-planning": { title: "Early Planning for Hong Kong Commercial Construction: Budget, Programme and Risk", summary: "A pre-construction checklist covering objectives, surveys, budgets, approvals, procurement and risk allocation." },
  "seo-content-strategy-for-hong-kong-businesses": { title: "SEO Content Strategy for Hong Kong Businesses: From Search Intent to Sustainable Traffic", summary: "How to connect search intent, topic architecture, production, technical foundations and performance measurement." },
};

function localArticle(slug: string, lang: Lang, original: LocalArticle) {
  if (lang === "sc") return simplifiedArticles[slug] ?? original;
  if (lang === "en") return englishArticles[slug] ?? original;
  return original;
}

export default function InsightsContent() {
  const [lang, setLang] = usePersistedLanguage();
  const t = interfaceCopy[lang];
  const featured = insights[0];
  const featuredText = localArticle(featured.slug, lang, featured);

  return (
    <main className="insights-page">
      <SubpageHeader lang={lang} setLang={setLang} labels={headerLabels[lang]} active="insights" />
      <section className="insights-hero">
        <div><p className="section-kicker">WCG BUSINESS INSIGHTS</p><h1>{t.title}</h1><p>{t.intro}</p></div>
        <div className="insights-hero-index"><span>{String(insights.length).padStart(2, "0")}</span><small>{t.articles}</small></div>
      </section>

      <section className="insights-featured">
        <a href={`/insights/${featured.slug}`} className="insights-featured-image"><img src={featured.image} alt={featured.imageAlt} /></a>
        <div className="insights-featured-copy">
          <p className="insight-category">{t.featured} · {categoryCopy[featured.category]?.[lang] ?? featured.category}</p>
          <h2><a href={`/insights/${featured.slug}`}>{featuredText.title}</a></h2>
          <p>{featuredText.summary}</p>
          <div className="insight-meta"><span>{featured.published}</span><span>{lang === "en" ? "About 8 minutes" : lang === "sc" ? featured.readingTime.replace("約", "约").replace("分鐘", "分钟") : featured.readingTime}</span></div>
          <a className="text-link" href={`/insights/${featured.slug}`}>{t.read} <span>→</span></a>
        </div>
      </section>

      <nav className="insights-category-nav" aria-label={t.categoryNav}>
        {insightCategories.map((category, index) => <a key={category} href={`#insight-category-${index + 1}`}>{categoryCopy[category]?.[lang] ?? category}</a>)}
      </nav>

      <section className="insights-library">
        {insightCategories.map((category, categoryIndex) => {
          const items = insights.filter((article) => article.category === category);
          return (
            <div className="insight-segment" id={`insight-category-${categoryIndex + 1}`} key={category}>
              <div className="insight-segment-heading"><p className="section-kicker">KNOWLEDGE SCOPE</p><h2>{categoryCopy[category]?.[lang] ?? category}</h2><span>{String(items.length).padStart(2, "0")}</span></div>
              <div className="insight-card-grid">
                {items.map((article) => {
                  const articleText = localArticle(article.slug, lang, article);
                  const readingTime = lang === "en" ? article.readingTime.replace(/約\s*(\d+)\s*分鐘/, "About $1 minutes") : lang === "sc" ? article.readingTime.replace("約", "约").replace("分鐘", "分钟") : article.readingTime;
                  return (
                    <article className="insight-card" key={article.slug}>
                      <a className="insight-card-image" href={`/insights/${article.slug}`}><img src={article.image} alt={article.imageAlt} loading="lazy" /></a>
                      <div><p className="insight-category">{serviceCopy[article.service]?.[lang] ?? article.service}</p><h3><a href={`/insights/${article.slug}`}>{articleText.title}</a></h3><p>{articleText.summary}</p><div className="insight-meta"><span>{article.published}</span><span>{readingTime}</span></div><a className="insight-card-link" href={`/insights/${article.slug}`}>{t.read} <span>↗</span></a></div>
                    </article>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
      <section className="direction-cta"><div><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p></div><WhatsAppLink label={t.contact} /></section>
      <footer className="service-detail-footer"><span>© 2026 Win Chance Group Holdings Limited. {t.rights}.</span><a href="/">{t.home}</a></footer>
    </main>
  );
}
