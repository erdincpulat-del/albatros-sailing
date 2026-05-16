import type { Metadata } from "next";
import "./globals.css";

import { LanguageProvider } from "../contexts/LanguageProvider";
import SiteHeader from "@/components/layout/SiteHeader";

export const metadata: Metadata = {
  metadataBase: new URL("https://albatrossailing.com.tr"),

  title: {
    default: "Albatros Sailing",
    template: "%s | Albatros Sailing",
  },

  description:
    "Premium sailing academy, offshore sailing education, yacht training, Bodrum sailing routes and maritime education experience.",

  keywords: [
    "Albatros Sailing",
    "yelken eğitimi",
    "offshore yelken eğitimi",
    "bodrum yelken eğitimi",
    "yelkenli yat eğitimi",
    "yat kaptanlığı eğitimi",
    "sailing academy",
    "offshore sailing",
    "bodrum sailing school",
  ],

  verification: {
    google: "J0cUzbPii5Dav",
  },

  openGraph: {
    title: "Albatros Sailing",
    description:
      "Premium sailing academy and offshore sailing training experience.",
    url: "https://albatrossailing.com.tr",
    siteName: "Albatros Sailing",
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Albatros Sailing",
    description:
      "Premium sailing academy and offshore sailing training experience.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <LanguageProvider>
          <SiteHeader />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}