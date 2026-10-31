import type { Metadata } from "next";
import InsightsContent from "./insights-content";

export const metadata: Metadata = {
  title: "鉅瀧商業洞察 | 香港企業、科技、建築與傳承知識",
  description: "鉅瀧集團商業洞察，分享香港企業融資、數碼推廣、創新科技、建築工程及家族傳承的實務知識。",
};

export default function InsightsPage() {
  return <InsightsContent />;
}
