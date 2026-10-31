import type { Metadata } from "next";
import ContactContent from "./contact-content";

export const metadata: Metadata = {
  title: "聯絡我們 | Win Chance Group Holdings Limited",
  description: "聯絡鉅瀧集團，查詢集團服務、業務合作及專業項目支援。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
