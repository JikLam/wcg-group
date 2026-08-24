"use client";

import { FormEvent, useState } from "react";

type Lang = "tc" | "sc" | "en";

const content = {
  tc: {
    brand: "鉅瀧集團",
    company: "Win Chance Group Holdings Limited",
    nav: [
      ["about", "關於集團"],
      ["businesses", "集團服務"],
      ["direction", "發展方向"],
      ["contact", "聯絡我們"],
    ],
    menuLabel: "開啟導覽選單",
    serviceMenu: "集團服務",
    serviceScope: "服務範圍",
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
    aboutKicker: "ABOUT WCG",
    aboutTitle: "以跨界視野，推動企業持續成長",
    aboutText:
      "我們相信，每項長遠發展都源於清晰策略、可靠執行與相互信任。集團整合品牌、娛樂、科技、汽車產業、企業融資及傳承規劃等專業能力，協助合作夥伴掌握新機遇。",
    pillars: [
      ["使命", "以專業整合與創新思維，為客戶建立可持續、可實踐的增長方案。"],
      ["願景", "成為連接香港、中國內地與國際市場的可信賴策略合作夥伴。"],
      ["核心價值", "追求極致・創新共贏・以人為本・誠信協作"],
    ],
    businessKicker: "OUR BUSINESSES",
    businessTitle: "七大業務，共建企業生態",
    businessIntro:
      "集團整合七大專業範疇，所有服務內容均可於本頁直接瀏覽，讓企業及合作夥伴快速了解我們的能力與合作方向。",
    businesses: [
      ["影視娛樂製作", "整合內容、製作與現場體驗，連結文化創意與商業價值。", "商演及大型活動・專業展覽・影視內容・沉浸式體驗"],
      ["經典名車業務", "圍繞珍藏汽車文化，發展展覽、會所、品牌體驗與專業服務。", "名車博物館・會員會所・品牌門店・護理維修"],
      ["創新科技研發", "以人工智能、物聯網及數據技術，協助企業建立可信賴的數碼能力。", "AIoT・防偽溯源・企業系統・智慧互動"],
      ["數碼市場推廣", "從品牌策略到內容及績效營銷，建立一致而可衡量的市場影響力。", "品牌策劃・內容生態・社交媒體・整合營銷"],
      ["家族傳承規劃", "以長遠視角協調家族治理、資產安排與跨境發展需要。", "家族治理・資產規劃・跨境配置・升學規劃"],
      ["企業融資策劃", "協助中小企梳理融資需要，連接合適的企業發展方案。", "企業融資諮詢・資金規劃・信用狀態諮詢・SME 服務"],
      ["品牌建設發展", "由品牌定位延伸至空間及資產管理，建立一致的企業體驗。", "品牌創建・品牌管理・知識產權・空間顧問"],
    ],
    directionKicker: "OUR DIRECTION",
    directionTitle: "讓專業各展所長，讓資源彼此連結",
    directionText:
      "集團網站集中展示各項專業服務，並以 WCG 的共同價值、專業網絡及企業管治連結不同團隊，為客戶提供更完整的跨領域方案。",
    stages: ["建立清晰的集團品牌", "連接各項專業服務", "拓展跨地域合作機會"],
    milestone: "發展里程碑",
    milestoneYear: "2025",
    milestoneText: "Win Chance Group Holdings Limited 正式成立，開展多元業務整合與品牌建設。更多里程碑將於資料核實後更新。",
    contactKicker: "CONTACT",
    contactTitle: "攜手探索下一個機遇",
    contactText: "如欲了解集團業務或商討合作，歡迎與我們聯絡。",
    addressLabel: "地址",
    address: "香港鰂魚涌海澤街28號東港中心14樓1411室",
    phoneLabel: "電話",
    phone: "+852 2668 2600",
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
    nav: [["about", "关于集团"], ["businesses", "集团服务"], ["direction", "发展方向"], ["contact", "联系我们"]],
    menuLabel: "打开导航菜单", serviceMenu: "集团服务", serviceScope: "服务范围",
    eyebrow: "多元策略・专业协作・长远价值",
    heroTitle: "连接创意、科技与资本，\n成就长远价值。",
    heroText: "钜泷集团立足香港，汇聚跨领域专业力量，为企业及合作伙伴提供具前瞻性、可落地的综合策略方案。",
    explore: "探索集团业务", contactUs: "联系我们", established: "成立年份", sectors: "核心业务", base: "集团基地", year: "2025", seven: "七大范畴", hk: "香港",
    aboutKicker: "ABOUT WCG", aboutTitle: "以跨界视野，推动企业持续成长",
    aboutText: "我们相信，每项长远发展都源于清晰策略、可靠执行与相互信任。集团整合品牌、娱乐、科技、汽车产业、企业融资及传承规划等专业能力，协助合作伙伴掌握新机遇。",
    pillars: [["使命", "以专业整合与创新思维，为客户建立可持续、可实践的增长方案。"], ["愿景", "成为连接香港、中国内地与国际市场的可信赖策略合作伙伴。"], ["核心价值", "追求极致・创新共赢・以人为本・诚信协作"]],
    businessKicker: "OUR BUSINESSES", businessTitle: "七大业务，共建企业生态", businessIntro: "集团整合七大专业范畴，所有服务内容均可于本页直接浏览，让企业及合作伙伴快速了解我们的能力与合作方向。",
    businesses: [
      ["影视娱乐制作", "整合内容、制作与现场体验，连接文化创意与商业价值。", "商演及大型活动・专业展览・影视内容・沉浸式体验"],
      ["经典名车业务", "围绕珍藏汽车文化，发展展览、会所、品牌体验与专业服务。", "名车博物馆・会员会所・品牌门店・护理维修"],
      ["创新科技研发", "以人工智能、物联网及数据技术，协助企业建立可信赖的数字能力。", "AIoT・防伪溯源・企业系统・智慧互动"],
      ["数字市场推广", "从品牌策略到内容及绩效营销，建立一致而可衡量的市场影响力。", "品牌策划・内容生态・社交媒体・整合营销"],
      ["家族传承规划", "以长远视角协调家族治理、资产安排与跨境发展需要。", "家族治理・资产规划・跨境配置・升学规划"],
      ["企业融资策划", "协助中小企梳理融资需要，连接合适的企业发展方案。", "企业融资咨询・资金规划・信用状态咨询・SME 服务"],
      ["品牌建设发展", "由品牌定位延伸至空间及资产管理，建立一致的企业体验。", "品牌创建・品牌管理・知识产权・空间顾问"],
    ],
    directionKicker: "OUR DIRECTION", directionTitle: "让专业各展所长，让资源彼此连接", directionText: "集团网站集中展示各项专业服务，并以 WCG 的共同价值、专业网络及企业管治连接不同团队，为客户提供更完整的跨领域方案。", stages: ["建立清晰的集团品牌", "连接各项专业服务", "拓展跨地域合作机会"],
    milestone: "发展里程碑", milestoneYear: "2025", milestoneText: "Win Chance Group Holdings Limited 正式成立，开展多元业务整合与品牌建设。更多里程碑将于资料核实后更新。",
    contactKicker: "CONTACT", contactTitle: "携手探索下一个机遇", contactText: "如欲了解集团业务或商讨合作，欢迎与我们联系。", addressLabel: "地址", address: "香港鲗鱼涌海泽街28号东港中心14楼1411室", phoneLabel: "电话", phone: "+852 2668 2600", emailLabel: "电邮", email: "info@winchancegroup.com",
    form: { name: "姓名", company: "公司名称", email: "电邮地址", message: "查询内容", send: "发送查询" },
    legal: "公司注册、牌照及法律资料将于核实后更新。网站内容只作一般企业介绍用途。", privacy: "隐私政策", terms: "使用条款", rights: "版权所有",
  },
  en: {
    brand: "WCG", company: "Win Chance Group Holdings Limited",
    nav: [["about", "About"], ["businesses", "Group Services"], ["direction", "Direction"], ["contact", "Contact"]],
    menuLabel: "Open navigation menu", serviceMenu: "Group services", serviceScope: "Service scope",
    eyebrow: "Integrated strategy · Expert collaboration · Enduring value",
    heroTitle: "Connecting creativity, technology and capital for enduring value.",
    heroText: "Rooted in Hong Kong, Win Chance Group brings together cross-sector expertise to deliver forward-looking, actionable strategies for businesses and partners.",
    explore: "Explore our businesses", contactUs: "Contact us", established: "Established", sectors: "Core businesses", base: "Group base", year: "2025", seven: "Seven sectors", hk: "Hong Kong",
    aboutKicker: "ABOUT WCG", aboutTitle: "A cross-sector perspective on sustainable growth",
    aboutText: "We believe enduring progress begins with clear strategy, dependable execution and mutual trust. WCG connects expertise across branding, entertainment, technology, automotive culture, corporate finance and succession planning to help partners act on new opportunities.",
    pillars: [["Mission", "Create practical, sustainable growth through integrated expertise and innovative thinking."], ["Vision", "Be a trusted strategic partner connecting Hong Kong, Mainland China and international markets."], ["Values", "Excellence · Innovation · People · Integrity · Partnership"]],
    businessKicker: "OUR BUSINESSES", businessTitle: "Seven businesses. One connected ecosystem.", businessIntro: "WCG brings seven specialist fields together in one place. Every service is presented directly on this page so businesses and partners can quickly understand our capabilities and potential areas of collaboration.",
    businesses: [
      ["Entertainment Production", "Connecting cultural creativity and commercial value through content, production and live experiences.", "Live events · Exhibitions · Screen content · Immersive experiences"],
      ["Classic Automotive", "Developing exhibitions, clubs, brand experiences and specialist services around collector-car culture.", "Museums · Members’ clubs · Brand stores · Vehicle care"],
      ["Innovation & Technology", "Applying AI, IoT and data technologies to build trusted digital capabilities for enterprises.", "AIoT · Traceability · Enterprise systems · Smart interaction"],
      ["Digital Marketing", "Building consistent, measurable market impact from brand strategy to content and performance.", "Brand strategy · Content · Social media · Integrated campaigns"],
      ["Family Succession Planning", "Taking a long-term view of family governance, asset arrangements and cross-border needs.", "Governance · Asset planning · Cross-border allocation · Education"],
      ["Corporate Finance Advisory", "Helping SMEs clarify funding needs and connect with appropriate business-development solutions.", "Funding advisory · Capital planning · Credit consultation · SME services"],
      ["Brand Development", "Extending brand positioning into spatial and asset management for a consistent corporate experience.", "Brand creation · Brand management · IP · Spatial consultancy"],
    ],
    directionKicker: "OUR DIRECTION", directionTitle: "Specialist strengths, connected resources", directionText: "The Group website presents every specialist service in one place, connecting teams through WCG’s shared values, professional network and corporate governance to deliver more complete cross-sector solutions.", stages: ["Build a clear group identity", "Connect specialist services", "Expand cross-market partnerships"],
    milestone: "Milestone", milestoneYear: "2025", milestoneText: "Win Chance Group Holdings Limited was established to integrate a diversified portfolio and build a unified corporate brand. Further milestones will be added after verification.",
    contactKicker: "CONTACT", contactTitle: "Let’s explore the next opportunity", contactText: "Contact us to learn about the Group or discuss a potential partnership.", addressLabel: "Address", address: "Unit 1411, 14/F, Eastern Harbour Centre, 28 Hoi Chak Street, Quarry Bay, Hong Kong", phoneLabel: "Telephone", phone: "+852 2668 2600", emailLabel: "Email", email: "info@winchancegroup.com",
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
  const t = content[lang];

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `${lang === "en" ? "Website enquiry" : "網站查詢"} — ${data.get("company") || data.get("name")}`;
    const body = `${t.form.name}: ${data.get("name")}\n${t.form.company}: ${data.get("company")}\n${t.form.email}: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${t.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="header-primary-row">
          <a className="brand-lockup" href="#top" aria-label={t.company}>
            <img src="/wcg-logo.png" alt="WCG" />
            <span><strong>{t.brand}</strong><small>{t.company}</small></span>
          </a>

          <nav className="primary-nav" aria-label="Primary navigation">
            {t.nav.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
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
                <a key={title} href={`#business-${index + 1}`} onClick={() => setMenuOpen(false)}>
                  <span>0{index + 1}</span>{title}
                </a>
              ))}
            </div>
          </nav>
          <nav className="mobile-utility-nav" aria-label="Mobile navigation">
            {t.nav.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-intro">{t.heroText}</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#businesses">{t.explore}<span>↘</span></a>
            <a className="text-link" href="#contact">{t.contactUs}<span>→</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-emblem"><img src="/wcg-logo.png" alt="" /></div>
          <span className="visual-caption">WIN CHANCE GROUP · HONG KONG · 2025</span>
        </div>
        <div className="hero-stats">
          <div><small>{t.established}</small><strong>{t.year}</strong></div>
          <div><small>{t.sectors}</small><strong>{t.seven}</strong></div>
          <div><small>{t.base}</small><strong>{t.hk}</strong></div>
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
      </section>

      <section className="section businesses" id="businesses">
        <div className="businesses-intro">
          <p className="section-kicker">{t.businessKicker}</p>
          <h2>{t.businessTitle}</h2>
          <p>{t.businessIntro}</p>
        </div>
        <div className="business-list">
          {t.businesses.map(([title, description, tags], index) => {
            const services = tags.split(lang === "en" ? " · " : "・");
            return (
              <article className="business-item" id={`business-${index + 1}`} key={title}>
                <span className="business-number">0{index + 1}</span>
                <div className="business-copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="service-scope-label">{t.serviceScope}</span>
                  <ul>{services.map((service) => <li key={service}>{service}</li>)}</ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section direction" id="direction">
        <div className="direction-copy">
          <p className="section-kicker">{t.directionKicker}</p>
          <h2>{t.directionTitle}</h2>
          <p>{t.directionText}</p>
        </div>
        <div className="direction-steps">
          {t.stages.map((stage, index) => <div key={stage}><span>0{index + 1}</span><p>{stage}</p></div>)}
        </div>
        <aside className="milestone">
          <small>{t.milestone}</small><strong>{t.milestoneYear}</strong><p>{t.milestoneText}</p>
        </aside>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-details">
          <p className="section-kicker">{t.contactKicker}</p>
          <h2>{t.contactTitle}</h2>
          <p className="contact-intro">{t.contactText}</p>
          <dl>
            <div><dt>{t.addressLabel}</dt><dd>{t.address}</dd></div>
            <div><dt>{t.phoneLabel}</dt><dd><a href="tel:+85226682600">{t.phone}</a></dd></div>
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
        <div className="footer-brand"><img src="/wcg-logo.png" alt="WCG" /><span>{t.company}</span></div>
        <p className="legal-note" id="legal">{t.legal}</p>
        <div className="footer-bottom"><span>© 2026 {t.company}. {t.rights}.</span><span>{t.privacy} · {t.terms}</span></div>
      </footer>
    </main>
  );
}
