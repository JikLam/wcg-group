import type { Metadata } from "next";
import "./globals.css";

const siteOrigin = new URL("https://winchancegroup.com");
const title = "鉅瀧集團 | Win Chance Group Holdings Limited";
const description = "鉅瀧集團立足香港，為企業提供創新多元策略方案。";

export const metadata: Metadata = {
  metadataBase: siteOrigin,
  title,
  description,
  icons: { icon: "/wcg-logo-transparent.png", shortcut: "/wcg-logo-transparent.png", apple: "/wcg-logo-transparent.png" },
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: new URL("/og.png", siteOrigin).toString(), width: 1536, height: 896, alt: "Win Chance Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [new URL("/og.png", siteOrigin).toString()],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <head>
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prefetch: [
                {
                  source: "document",
                  where: { href_matches: "/*" },
                  eagerness: "moderate",
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
