"use client";

import SubpageHeader from "../components/subpage-header";
import { usePersistedLanguage } from "../components/use-persisted-language";

const labels = {
  tc: { brand: "鉅瀧集團", home: "集團首頁", about: "關於集團", services: "集團服務", direction: "發展方向", partners: "合作夥伴", insights: "商業洞察", contact: "聯絡我們" },
  sc: { brand: "钜泷集团", home: "集团首页", about: "关于集团", services: "集团服务", direction: "发展方向", partners: "合作伙伴", insights: "商业洞察", contact: "联系我们" },
  en: { brand: "Win Chance Group Holdings Limited", home: "Group Home", about: "About", services: "Group Services", direction: "Our Direction", partners: "Partners", insights: "Insights", contact: "Contact" },
} as const;

export default function InsightsHeader() {
  const [lang, setLang] = usePersistedLanguage();
  return <SubpageHeader lang={lang} setLang={setLang} labels={labels[lang]} active="insights" />;
}
