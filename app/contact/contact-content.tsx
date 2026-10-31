"use client";

import { FormEvent, useRef, useState } from "react";
import SubpageHeader from "../components/subpage-header";
import { usePersistedLanguage } from "../components/use-persisted-language";
import WhatsAppLink, { whatsappHref, whatsappNumber } from "../components/whatsapp-link";

const copy = {
  tc: {
    brand: "鉅瀧集團", home: "集團首頁", about: "關於集團", services: "集團服務", direction: "發展方向", partners: "合作夥伴", insights: "商業洞察", contact: "聯絡我們",
    kicker: "聯絡我們", title: "讓我們一起探索\n下一個機遇", intro: "如欲了解集團業務、查詢服務或商討合作，歡迎留下資料。我們會按查詢內容安排合適團隊跟進。",
    addressLabel: "地址", address: "香港鰂魚涌海澤街28號東港中心14樓1411室", phoneLabel: "電話", phone: "+852 2668 2600", whatsappLabel: "WhatsApp", wechatLabel: "微信", wechat: "WCG91949413", emailLabel: "電郵", email: "info@winchancegroup.com", whatsappCta: "WhatsApp 聯絡我們",
    formTitle: "告訴我們你的需要", formIntro: "請填寫以下資料，我們會盡快回覆。", name: "姓名", company: "公司名稱", emailField: "電郵地址", message: "查詢內容", send: "發送查詢", sending: "正在發送…", success: "查詢已成功發送，我們會盡快回覆。", error: "暫時未能發送，請稍後再試或直接電郵聯絡我們。", rights: "版權所有",
  },
  sc: {
    brand: "钜泷集团", home: "集团首页", about: "关于集团", services: "集团服务", direction: "发展方向", partners: "合作伙伴", insights: "商业洞察", contact: "联系我们",
    kicker: "联系我们", title: "让我们一起探索\n下一个机遇", intro: "如欲了解集团业务、查询服务或商讨合作，欢迎留下资料。我们会按查询内容安排合适团队跟进。",
    addressLabel: "地址", address: "香港鲗鱼涌海泽街28号东港中心14楼1411室", phoneLabel: "电话", phone: "+852 2668 2600", whatsappLabel: "WhatsApp", wechatLabel: "微信", wechat: "WCG91949413", emailLabel: "电邮", email: "info@winchancegroup.com", whatsappCta: "WhatsApp 联系我们",
    formTitle: "告诉我们你的需要", formIntro: "请填写以下资料，我们会尽快回复。", name: "姓名", company: "公司名称", emailField: "电邮地址", message: "查询内容", send: "发送查询", sending: "正在发送…", success: "查询已成功发送，我们会尽快回复。", error: "暂时未能发送，请稍后再试或直接电邮联系我们。", rights: "版权所有",
  },
  en: {
    brand: "Win Chance Group Holdings Limited", home: "Group Home", about: "About", services: "Group Services", direction: "Our Direction", partners: "Partners", insights: "Insights", contact: "Contact",
    kicker: "CONTACT", title: "Let’s explore the\nnext opportunity", intro: "Contact us to learn about the Group, enquire about a service or discuss a potential partnership. We will connect your enquiry with the relevant team.",
    addressLabel: "Address", address: "Unit 1411, 14/F, Eastern Harbour Centre, 28 Hoi Chak Street, Quarry Bay, Hong Kong", phoneLabel: "Telephone", phone: "+852 2668 2600", whatsappLabel: "WhatsApp", wechatLabel: "WeChat", wechat: "WCG91949413", emailLabel: "Email", email: "info@winchancegroup.com", whatsappCta: "Contact us on WhatsApp",
    formTitle: "Tell us what you need", formIntro: "Complete the form below and we will reply as soon as possible.", name: "Name", company: "Company", emailField: "Email address", message: "How can we help?", send: "Send enquiry", sending: "Sending…", success: "Your enquiry has been sent. We will reply shortly.", error: "We could not send your enquiry. Please try again later or email us directly.", rights: "All rights reserved",
  },
} as const;

export default function ContactContent() {
  const [lang, setLang] = usePersistedLanguage();
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const formStartedAt = useRef(Date.now());
  const t = copy[lang];

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setFormStatus("sending");

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          message: data.get("message"),
          website: data.get("website"),
          startedAt: formStartedAt.current,
          lang,
        }),
      });

      if (!response.ok) throw new Error("Unable to send enquiry");
      form.reset();
      formStartedAt.current = Date.now();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <main className="contact-page">
      <SubpageHeader lang={lang} setLang={setLang} labels={t} active="contact" />
      <section className="contact-page-hero">
        <div className="contact-page-hero-copy">
          <p className="section-kicker">{t.kicker}</p>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
          <WhatsAppLink label={t.whatsappCta} />
        </div>
        <div className="contact-image-grid" aria-label="Win Chance Group professional teams">
          <img className="contact-image-main" src="/insights/hong-kong-ipo-readiness.jpg" alt="Asian professional team collaborating in a Hong Kong office" />
          <img src="/insights/privacy-first-digital-marketing.jpg" alt="Asian professional working with secure customer data in Hong Kong" />
          <img src="/insights/gallery/ai-workflow-mapping.jpg" alt="Asian business team planning a client project together" />
        </div>
      </section>
      <section className="contact-page-section">
        <div className="contact-details">
          <p className="section-kicker">WCG · HONG KONG</p>
          <dl>
            <div><dt>{t.addressLabel}</dt><dd>{t.address}</dd></div>
            <div><dt>{t.phoneLabel}</dt><dd><a href="tel:+85226682600">{t.phone}</a></dd></div>
            <div><dt>{t.whatsappLabel}</dt><dd><a className="contact-whatsapp-number" href={whatsappHref} target="_blank" rel="noreferrer">{whatsappNumber}</a></dd></div>
            <div><dt>{t.wechatLabel}</dt><dd>{t.wechat}</dd></div>
            <div><dt>{t.emailLabel}</dt><dd><a href={`mailto:${t.email}`}>{t.email}</a></dd></div>
          </dl>
        </div>
        <div className="contact-page-form-wrap">
          <div className="contact-page-form-heading"><p className="section-kicker">ENQUIRY</p><h2>{t.formTitle}</h2><p>{t.formIntro}</p></div>
          <form className="contact-form" onSubmit={submitEnquiry}>
            <label className="contact-honeypot" aria-hidden="true"><span>Website</span><input name="website" tabIndex={-1} autoComplete="off" /></label>
            <label><span>{t.name}</span><input name="name" required autoComplete="name" /></label>
            <label><span>{t.company}</span><input name="company" autoComplete="organization" /></label>
            <label><span>{t.emailField}</span><input name="email" type="email" required autoComplete="email" /></label>
            <label className="full"><span>{t.message}</span><textarea name="message" rows={5} required /></label>
            <button className="button button-gold" type="submit" disabled={formStatus === "sending"}>{formStatus === "sending" ? t.sending : t.send}<span>↗</span></button>
            {formStatus !== "idle" && formStatus !== "sending" ? <p className={`contact-form-status ${formStatus}`} role="status">{formStatus === "success" ? t.success : t.error}</p> : null}
          </form>
        </div>
      </section>
      <footer className="service-detail-footer"><span>© 2026 Win Chance Group Holdings Limited. {t.rights}.</span><a href="/">{t.home}</a></footer>
    </main>
  );
}
