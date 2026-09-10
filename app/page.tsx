"use client";

import { FormEvent, useRef, useState } from "react";
import { services as serviceRecords } from "./services/service-data";
import { featuredPartners, strategicPartners } from "./partners/partner-data";

type Lang = "tc" | "sc" | "en";

const content = {
  tc: {
    brand: "鉅瀧集團",
    company: "Win Chance Group Holdings Limited",
    nav: [
      ["about", "關於集團"],
      ["businesses", "集團服務"],
      ["direction", "發展方向"],
      ["collaboration", "合作夥伴"],
      ["contact", "聯絡我們"],
    ],
    menuLabel: "開啟導覽選單",
    serviceMenu: "集團服務",
    serviceScope: "服務範圍",
    learnMore: "了解更多",
    eyebrow: "多元策略・專業協作・長遠價值",
    heroTitle: "連結創意、科技與資本，\n成就長遠價值。",
    heroText:
      "鉅瀧集團立足香港，匯聚跨領域專業力量，為企業及合作夥伴提供具前瞻性、可落地的綜合策略方案。",
    explore: "探索集團業務",
    contactUs: "聯絡我們",
    established: "成立年份",
    sectors: "核心業務",
    base: "集團基地",
    year: "2025",
    seven: "七大範疇",
    hk: "香港",
    heroCaption: "鉅瀧集團・香港・2025",
    aboutKicker: "關於鉅瀧",
    aboutTitle: "以跨界視野，推動企業持續成長",
    aboutText:
      "鉅瀧集團的業務涵蓋影視娛樂、企業融資及上市、品牌加盟、創新科技、建築工程、數碼市場推廣及家族傳承。我們引進專業人才與技術，按客戶需要整合跨領域資源，建立長期互信的合作關係。",
    pillars: [
      ["使命", "以專業整合與創新思維，為客戶建立可持續、可實踐的增長方案。"],
      ["願景", "成為連接香港、中國內地與國際市場的可信賴策略合作夥伴。"],
      ["核心價值", "追求極致・創新共贏・以人為本・誠信協作"],
    ],
    businessKicker: "集團業務",
    businessTitle: "七大業務，共建企業生態",
    businessIntro:
      "集團整合七大專業範疇，所有服務內容均可於本頁直接瀏覽，讓企業及合作夥伴快速了解我們的能力與合作方向。",
    businesses: [
      ["影視娛樂製作", "由創意策劃到現場執行，提供一站式影視、活動及數碼直播服務。", "直播製作・現場活動・影視內容・後期製作"],
      ["企業融資及上市", "從資金需要、融資結構到上市準備，建立清晰的資本發展路徑。", "融資評估・結構規劃・上市準備・專業協調"],
      ["LPA 品牌及加盟", "以經典汽車文化與多元零售體驗，拓展品牌營運及加盟合作。", "名車體驗・品牌零售・加盟授權・創業支援"],
      ["創新科技研發", "整合企業網絡、數據安全、數碼防偽及智能自動化。", "SD-WAN・數碼防偽・數據平台・智能自動化"],
      ["建築建設工程", "由前期規劃到施工管理，協調建築及基礎設施項目。", "規劃設計・建築工程・基礎設施・施工管理"],
      ["數碼市場推廣", "以搜尋、社交媒體、內容及自動化工具，建立可衡量的品牌增長。", "搜尋推廣・社交內容・全渠道推廣・AI 自動化"],
      ["家族傳承規劃", "以長遠的法律、財務及家族治理框架，守護財富、企業與核心價值。", "資產盤點・信託保險・企業傳承・家族治理"],
    ],
    collaborationKicker: "合作夥伴",
    collaborationTitle: "匯聚專業資源，推進共同項目",
    collaborationIntro: "集團按項目需要連結企業、品牌、創業者與專業機構。合作可涵蓋整合項目、品牌加盟、科技平台及專業顧問協調。",
    collaborationTypes: [["企業及品牌", "整合市場、內容、科技、工程與資本發展需要。"], ["創業及加盟夥伴", "透過 LPA 品牌授權、營運模式及支援服務開展合作。"], ["科技及平台夥伴", "共同探索企業網絡、數據、防偽及智能自動化應用。"], ["專業機構", "按項目協調合資格的法律、會計、稅務、財務及工程專業人士。"]],
    collaborationCta: "洽談合作",
    overviewLabel: "集團概覽",
    swipeHint: "左右滑動，探索七大業務範疇",
    previous: "上一項",
    next: "下一項",
    directionKicker: "發展方向",
    directionTitle: "讓專業各展所長，讓資源彼此連結",
    directionText:
      "集團網站集中展示各項專業服務，並以 WCG 的共同價值、專業網絡及企業管治連結不同團隊，為客戶提供更完整的跨領域方案。",
    stages: ["建立清晰的集團品牌", "連接各項專業服務", "拓展跨地域合作機會"],
    milestone: "發展里程碑",
    milestoneYear: "2025",
    milestoneText: "Win Chance Group Holdings Limited 正式成立，開展多元業務整合與品牌建設。更多里程碑將於資料核實後更新。",
    contactKicker: "聯絡我們",
    contactTitle: "攜手探索下一個機遇",
    contactText: "如欲了解集團業務或商討合作，歡迎與我們聯絡。",
    addressLabel: "地址",
    address: "香港鰂魚涌海澤街28號東港中心14樓1411室",
    phoneLabel: "電話",
    phone: "+852 2668 2600",
    whatsappLabel: "WhatsApp",
    whatsapp: "+852 4413 1113",
    wechatLabel: "微信",
    wechat: "WCG91949413",
    emailLabel: "電郵",
    email: "info@winchancegroup.com",
    form: {
      name: "姓名",
      company: "公司名稱",
      email: "電郵地址",
      message: "查詢內容",
      send: "發送查詢",
    },
    legal: "公司註冊、牌照及法律資料將於核實後更新。網站內容只作一般企業介紹用途。",
    privacy: "私隱政策",
    terms: "使用條款",
    rights: "版權所有",
  },
  sc: {
    brand: "钜泷集团",
    company: "Win Chance Group Holdings Limited",
    nav: [["about", "关于集团"], ["businesses", "集团服务"], ["direction", "发展方向"], ["collaboration", "合作伙伴"], ["contact", "联系我们"]],
    menuLabel: "打开导航菜单", serviceMenu: "集团服务", serviceScope: "服务范围", learnMore: "了解更多",
    eyebrow: "多元策略・专业协作・长远价值",
    heroTitle: "连接创意、科技与资本，\n成就长远价值。",
    heroText: "钜泷集团立足香港，汇聚跨领域专业力量，为企业及合作伙伴提供具前瞻性、可落地的综合策略方案。",
    explore: "探索集团业务", contactUs: "联系我们", established: "成立年份", sectors: "核心业务", base: "集团基地", year: "2025", seven: "七大范畴", hk: "香港",
    heroCaption: "钜泷集团・香港・2025",
    aboutKicker: "关于钜泷", aboutTitle: "以跨界视野，推动企业持续成长",
    aboutText: "钜泷集团的业务涵盖影视娱乐、企业融资及上市、品牌加盟、创新科技、建筑工程、数字市场推广及家族传承。我们引进专业人才与技术，按客户需要整合跨领域资源，建立长期互信的合作关系。",
    pillars: [["使命", "以专业整合与创新思维，为客户建立可持续、可实践的增长方案。"], ["愿景", "成为连接香港、中国内地与国际市场的可信赖策略合作伙伴。"], ["核心价值", "追求极致・创新共赢・以人为本・诚信协作"]],
    businessKicker: "集团业务", businessTitle: "七大业务，共建企业生态", businessIntro: "集团整合七大专业范畴，所有服务内容均可于本页直接浏览，让企业及合作伙伴快速了解我们的能力与合作方向。",
    businesses: [
      ["影视娱乐制作", "由创意策划到现场执行，提供一站式影视、活动及数字直播服务。", "直播制作・现场活动・影视内容・后期制作"],
      ["企业融资及上市", "从资金需要、融资结构到上市准备，建立清晰的资本发展路径。", "融资评估・结构规划・上市准备・专业协调"],
      ["LPA 品牌及加盟", "以经典汽车文化与多元零售体验，拓展品牌营运及加盟合作。", "名车体验・品牌零售・加盟授权・创业支持"],
      ["创新科技研发", "整合企业网络、数据安全、数字防伪及智能自动化。", "SD-WAN・数字防伪・数据平台・智能自动化"],
      ["建筑建设工程", "由前期规划到施工管理，协调建筑及基础设施项目。", "规划设计・建筑工程・基础设施・施工管理"],
      ["数字市场推广", "以搜索、社交媒体、内容及自动化工具，建立可衡量的品牌增长。", "搜索推广・社交内容・全渠道推广・AI 自动化"],
      ["家族传承规划", "以长远的法律、财务及家族治理框架，守护财富、企业与核心价值。", "资产盘点・信托保险・企业传承・家族治理"],
    ],
    collaborationKicker: "合作伙伴", collaborationTitle: "汇聚专业资源，推进共同项目", collaborationIntro: "集团按项目需要连接企业、品牌、创业者与专业机构。合作可涵盖整合项目、品牌加盟、科技平台及专业顾问协调。",
    collaborationTypes: [["企业及品牌", "整合市场、内容、科技、工程与资本发展需要。"], ["创业及加盟伙伴", "透过 LPA 品牌授权、营运模式及支持服务开展合作。"], ["科技及平台伙伴", "共同探索企业网络、数据、防伪及智能自动化应用。"], ["专业机构", "按项目协调合资格的法律、会计、税务、财务及工程专业人士。"]], collaborationCta: "洽谈合作",
    overviewLabel: "集团概览", swipeHint: "左右滑动，探索七大业务范畴", previous: "上一项", next: "下一项",
    directionKicker: "发展方向", directionTitle: "让专业各展所长，让资源彼此连接", directionText: "集团网站集中展示各项专业服务，并以 WCG 的共同价值、专业网络及企业管治连接不同团队，为客户提供更完整的跨领域方案。", stages: ["建立清晰的集团品牌", "连接各项专业服务", "拓展跨地域合作机会"],
    milestone: "发展里程碑", milestoneYear: "2025", milestoneText: "Win Chance Group Holdings Limited 正式成立，开展多元业务整合与品牌建设。更多里程碑将于资料核实后更新。",
    contactKicker: "联系我们", contactTitle: "携手探索下一个机遇", contactText: "如欲了解集团业务或商讨合作，欢迎与我们联系。", addressLabel: "地址", address: "香港鲗鱼涌海泽街28号东港中心14楼1411室", phoneLabel: "电话", phone: "+852 2668 2600", whatsappLabel: "WhatsApp", whatsapp: "+852 4413 1113", wechatLabel: "微信", wechat: "WCG91949413", emailLabel: "电邮", email: "info@winchancegroup.com",
    form: { name: "姓名", company: "公司名称", email: "电邮地址", message: "查询内容", send: "发送查询" },
    legal: "公司注册、牌照及法律资料将于核实后更新。网站内容只作一般企业介绍用途。", privacy: "隐私政策", terms: "使用条款", rights: "版权所有",
  },
  en: {
    brand: "WCG", company: "Win Chance Group Holdings Limited",
    nav: [["about", "About"], ["businesses", "Group Services"], ["direction", "Direction"], ["collaboration", "Partners"], ["contact", "Contact"]],
    menuLabel: "Open navigation menu", serviceMenu: "Group services", serviceScope: "Service scope", learnMore: "Learn more",
    eyebrow: "Integrated strategy · Expert collaboration · Enduring value",
    heroTitle: "Connecting creativity, technology and capital for enduring value.",
    heroText: "Rooted in Hong Kong, Win Chance Group brings together cross-sector expertise to deliver forward-looking, actionable strategies for businesses and partners.",
    explore: "Explore our businesses", contactUs: "Contact us", established: "Established", sectors: "Core businesses", base: "Group base", year: "2025", seven: "Seven sectors", hk: "Hong Kong",
    heroCaption: "WIN CHANCE GROUP · HONG KONG · 2025",
    aboutKicker: "ABOUT WCG", aboutTitle: "A cross-sector perspective on sustainable growth",
    aboutText: "WCG operates across entertainment, corporate finance and listing, brand franchising, innovation and technology, construction, digital marketing and family succession. We bring together specialist talent, technology and resources around each client’s needs to build trusted, long-term partnerships.",
    pillars: [["Mission", "Create practical, sustainable growth through integrated expertise and innovative thinking."], ["Vision", "Be a trusted strategic partner connecting Hong Kong, Mainland China and international markets."], ["Values", "Excellence · Innovation · People · Integrity · Partnership"]],
    businessKicker: "OUR BUSINESSES", businessTitle: "Seven businesses. One connected ecosystem.", businessIntro: "WCG brings seven specialist fields together in one place. Every service is presented directly on this page so businesses and partners can quickly understand our capabilities and potential areas of collaboration.",
    businesses: [
      ["Entertainment Production", "One-stop screen, event and digital-live production from creative planning to on-site delivery.", "Streaming · Live events · Screen content · Post-production"],
      ["Corporate Finance & Listing", "Clarifying the path from funding needs and capital structure to listing readiness.", "Funding assessment · Capital structure · Listing readiness · Coordination"],
      ["LPA Brand & Franchise", "Growing brand operations and franchise partnerships through classic-car culture and retail experiences.", "Automotive experiences · Retail · Licensing · Entrepreneur support"],
      ["Innovation & Technology", "Connecting enterprise networks, data security, digital authentication and automation.", "SD-WAN · Authentication · Data platforms · Automation"],
      ["Construction & Engineering", "Coordinating building and infrastructure projects from planning through construction management.", "Planning · Buildings · Infrastructure · Construction management"],
      ["Digital Marketing", "Building measurable growth through search, social media, content and automation.", "Search · Social content · Omnichannel marketing · AI automation"],
      ["Family Succession Planning", "Protecting wealth, enterprise continuity and family values through a long-term framework.", "Asset review · Trusts and insurance · Business succession · Governance"],
    ],
    collaborationKicker: "PARTNERSHIPS", collaborationTitle: "Professional resources for shared projects", collaborationIntro: "The Group connects businesses, brands, entrepreneurs and professional institutions according to each project. Collaboration may span integrated projects, brand franchising, technology platforms and adviser coordination.",
    collaborationTypes: [["Businesses and brands", "Connect market, content, technology, construction and capital-development needs."], ["Entrepreneurs and franchisees", "Develop opportunities through LPA licensing, operating models and support."], ["Technology and platform partners", "Explore enterprise networks, data, authentication and intelligent automation."], ["Professional institutions", "Coordinate qualified legal, accounting, tax, finance and engineering specialists as required."]], collaborationCta: "Discuss a partnership",
    overviewLabel: "Group overview", swipeHint: "Swipe to explore our seven business sectors", previous: "Previous", next: "Next",
    directionKicker: "OUR DIRECTION", directionTitle: "Specialist strengths, connected resources", directionText: "The Group website presents every specialist service in one place, connecting teams through WCG’s shared values, professional network and corporate governance to deliver more complete cross-sector solutions.", stages: ["Build a clear group identity", "Connect specialist services", "Expand cross-market partnerships"],
    milestone: "Milestone", milestoneYear: "2025", milestoneText: "Win Chance Group Holdings Limited was established to integrate a diversified portfolio and build a unified corporate brand. Further milestones will be added after verification.",
    contactKicker: "CONTACT", contactTitle: "Let’s explore the next opportunity", contactText: "Contact us to learn about the Group or discuss a potential partnership.", addressLabel: "Address", address: "Unit 1411, 14/F, Eastern Harbour Centre, 28 Hoi Chak Street, Quarry Bay, Hong Kong", phoneLabel: "Telephone", phone: "+852 2668 2600", whatsappLabel: "WhatsApp", whatsapp: "+852 4413 1113", wechatLabel: "WeChat", wechat: "WCG91949413", emailLabel: "Email", email: "info@winchancegroup.com",
    form: { name: "Name", company: "Company", email: "Email address", message: "How can we help?", send: "Send enquiry" },
    legal: "Company registration, licensing and legal information will be updated after verification. This website provides general corporate information only.", privacy: "Privacy", terms: "Terms", rights: "All rights reserved",
  },
} as const;

const languageLabels: { key: Lang; label: string }[] = [
  { key: "tc", label: "繁" },
  { key: "sc", label: "简" },
  { key: "en", label: "EN" },
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("tc");
  const [menuOpen, setMenuOpen] = useState(false);
  const scopeTrack = useRef<HTMLDivElement>(null);
  const t = content[lang];

  function moveScope(direction: -1 | 1) {
    const track = scopeTrack.current;
    if (!track) return;
    track.scrollBy({ left: direction * Math.min(track.clientWidth * 0.82, 820), behavior: "smooth" });
  }

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `${lang === "en" ? "Website enquiry" : "網站查詢"} — ${data.get("company") || data.get("name")}`;
    const body = `${t.form.name}: ${data.get("name")}\n${t.form.company}: ${data.get("company")}\n${t.form.email}: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${t.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main className="site-shell">
      <header className="site-header" onMouseLeave={() => setMenuOpen(false)}>
        <div className="header-primary-row">
          <a className="brand-lockup" href="#top" aria-label={t.company}>
            <img src="/wcg-logo-transparent.png" alt="WCG" />
            <span><strong>{t.brand}</strong><small>{t.company}</small></span>
          </a>

          <nav className="primary-nav" aria-label="Primary navigation">
            <a href="/about">{t.nav[0][1]}</a>
            <button type="button" aria-expanded={menuOpen} onMouseEnter={() => setMenuOpen(true)} onClick={() => setMenuOpen(!menuOpen)}>{t.nav[1][1]}</button>
            <a href="/direction">{t.nav[2][1]}</a>
            <a href="/partners">{t.nav[3][1]}</a>
            <a href="#contact">{t.nav[4][1]}</a>
          </nav>

          <button className="menu-toggle" type="button" aria-label={t.menuLabel} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span />
          </button>

          <div className="language-switcher" aria-label="Language">
            {languageLabels.map((item) => (
              <button key={item.key} type="button" className={lang === item.key ? "active" : ""} onClick={() => setLang(item.key)} aria-pressed={lang === item.key}>{item.label}</button>
            ))}
          </div>
        </div>

        <div className={`header-menu ${menuOpen ? "nav-open" : ""}`}>
          <nav className="service-nav" aria-label={t.serviceMenu}>
            <span className="service-nav-label">{t.serviceMenu}</span>
            <div className="service-nav-links">
              {t.businesses.map(([title], index) => (
                <a key={title} href={`/services/${serviceRecords[index].slug}`} onClick={() => setMenuOpen(false)}>
                  <span>0{index + 1}</span>{title}
                </a>
              ))}
            </div>
          </nav>
          <nav className="mobile-utility-nav" aria-label="Mobile navigation">
            <a href="/about" onClick={() => setMenuOpen(false)}>{t.nav[0][1]}</a>
            <a href="/services" onClick={() => setMenuOpen(false)}>{t.nav[1][1]}</a>
            <a href="/direction" onClick={() => setMenuOpen(false)}>{t.nav[2][1]}</a>
            <a href="/partners" onClick={() => setMenuOpen(false)}>{t.nav[3][1]}</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav[4][1]}</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.heroTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
          <p className="hero-intro">{t.heroText}</p>
          <div className="hero-actions">
            <a className="button button-gold" href="/services">{t.explore}<span>↗</span></a>
            <a className="text-link" href="#contact">{t.contactUs}<span>→</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-emblem"><img src="/wcg-logo-transparent.png" alt="" /></div>
          <span className="visual-caption">{t.heroCaption}</span>
        </div>
        <div className="hero-stats">
          <div><small>{t.established}</small><strong>{t.year}</strong></div>
          <div><small>{t.sectors}</small><strong>{t.seven}</strong></div>
          <div><small>{t.base}</small><strong>{t.hk}</strong></div>
        </div>
      </section>

      <section className="section collaboration" id="collaboration">
        <div className="collaboration-heading">
          <p className="section-kicker">{t.collaborationKicker}</p>
          <h2>{t.collaborationTitle}</h2>
          <p>{t.collaborationIntro}</p>
        </div>
        <div className="collaboration-content">
          <a className="partner-wall" href="/partners" aria-label={t.collaborationKicker}>
            {[...strategicPartners, ...featuredPartners].map(([name, image]) => (
              <span key={name}><img src={image} alt={name} loading="lazy" decoding="async" /></span>
            ))}
          </a>
          <div className="collaboration-actions">
            <a className="text-link" href="/partners">{t.learnMore}<span>→</span></a>
            <a className="button button-gold" href="#contact">{t.collaborationCta}<span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-heading">
          <p className="section-kicker">{t.aboutKicker}</p>
          <h2>{t.aboutTitle}</h2>
        </div>
        <div className="about-body">
          <p className="lead">{t.aboutText}</p>
          <div className="principles">
            {t.pillars.map(([title, text], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>

        <div className="scope-showcase">
          <div className="scope-showcase-heading">
            <div>
              <p className="section-kicker">{t.businessKicker}</p>
              <h3>{t.swipeHint}</h3>
            </div>
            <div className="scope-controls" aria-label={t.swipeHint}>
              <button type="button" onClick={() => moveScope(-1)} aria-label={t.previous}>←</button>
              <button type="button" onClick={() => moveScope(1)} aria-label={t.next}>→</button>
            </div>
          </div>
          <div className="scope-track" ref={scopeTrack}>
            {t.businesses.map(([title, description], index) => {
              const record = serviceRecords[index];
              return (
                <a className="scope-card" key={title} href={`/services/${record.slug}`}>
                  <div className="scope-card-media">
                    <img src={record.image} alt="" loading="lazy" decoding="async" style={{ objectFit: record.imageFit, objectPosition: record.imagePosition }} />
                    <span>0{index + 1}</span>
                  </div>
                  <div className="scope-card-copy">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <strong>{t.learnMore}<span>→</span></strong>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-details">
          <p className="section-kicker">{t.contactKicker}</p>
          <h2>{t.contactTitle}</h2>
          <p className="contact-intro">{t.contactText}</p>
          <dl>
            <div><dt>{t.addressLabel}</dt><dd>{t.address}</dd></div>
            <div><dt>{t.phoneLabel}</dt><dd><a href="tel:+85226682600">{t.phone}</a></dd></div>
            <div><dt>{t.whatsappLabel}</dt><dd><a href="https://wa.me/85244131113">{t.whatsapp}</a></dd></div>
            <div><dt>{t.wechatLabel}</dt><dd>{t.wechat}</dd></div>
            <div><dt>{t.emailLabel}</dt><dd><a href={`mailto:${t.email}`}>{t.email}</a></dd></div>
          </dl>
        </div>
        <form className="contact-form" onSubmit={submitEnquiry}>
          <label><span>{t.form.name}</span><input name="name" required autoComplete="name" /></label>
          <label><span>{t.form.company}</span><input name="company" autoComplete="organization" /></label>
          <label><span>{t.form.email}</span><input name="email" type="email" required autoComplete="email" /></label>
          <label className="full"><span>{t.form.message}</span><textarea name="message" rows={4} required /></label>
          <button className="button button-gold" type="submit">{t.form.send}<span>↗</span></button>
        </form>
      </section>

      <footer>
        <div className="footer-brand"><img src="/wcg-logo-transparent.png" alt="WCG" /><span>{t.company}</span></div>
        <p className="legal-note" id="legal">{t.legal}</p>
        <div className="footer-bottom"><span>© 2026 {t.company}. {t.rights}.</span><span>{t.privacy} · {t.terms}</span></div>
      </footer>
    </main>
  );
}
