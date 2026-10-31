import type { ReactNode } from "react";

export const whatsappNumber = "+852 6670 2707";

export const whatsappMessage = `您好！我對鉅瀧集團的服務感興趣，希望了解更多詳情。
我感興趣的服務／項目：________
請安排專人與我聯絡，謝謝。

Hello! I’m interested in Win Chance Group’s services and would like to learn more.
Service / project of interest: ________
Please arrange for a member of your team to contact me. Thank you.`;

export const whatsappHref = `https://wa.me/85266702707?text=${encodeURIComponent(whatsappMessage)}`;

export function WhatsAppIcon() {
  return (
    <svg className="whatsapp-icon" viewBox="0 0 32 32" aria-hidden="true">
      <path fill="currentColor" d="M16.04 3C8.86 3 3 8.72 3 15.75c0 2.25.6 4.44 1.74 6.36L3 28.5l6.56-1.69a13.2 13.2 0 0 0 6.48 1.65C23.22 28.46 29 22.74 29 15.75S23.22 3 16.04 3Zm0 23.29c-2.02 0-4-.53-5.72-1.54l-.41-.24-3.9 1 1.04-3.71-.27-.42a10.45 10.45 0 0 1-1.64-5.63c0-5.84 4.89-10.58 10.9-10.58 6 0 10.82 4.74 10.82 10.58S22.04 26.29 16.04 26.29Zm5.97-7.91c-.33-.16-1.94-.94-2.24-1.05-.3-.11-.52-.16-.74.16-.22.33-.85 1.05-1.04 1.27-.19.22-.38.25-.71.08-.33-.16-1.39-.5-2.64-1.59a9.7 9.7 0 0 1-1.83-2.23c-.19-.33-.02-.5.15-.66.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.75-1.01-2.4-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.41-.3.33-1.15 1.1-1.15 2.67 0 1.58 1.18 3.1 1.34 3.32.16.22 2.32 3.47 5.63 4.87.79.33 1.4.53 1.88.68.79.24 1.51.21 2.08.13.63-.09 1.94-.78 2.21-1.53.27-.75.27-1.39.19-1.53-.08-.14-.3-.22-.63-.38Z" />
    </svg>
  );
}

export default function WhatsAppLink({ label, className = "button button-whatsapp", children }: { label?: string; className?: string; children?: ReactNode }) {
  return (
    <a className={className} href={whatsappHref} target="_blank" rel="noreferrer">
      <WhatsAppIcon />{label ?? children}<span aria-hidden="true">↗</span>
    </a>
  );
}
