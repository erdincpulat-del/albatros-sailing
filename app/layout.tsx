import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../contexts/LanguageProvider";
import SiteHeader from "@/components/layout/SiteHeader";

export const metadata: Metadata = {
  title: "Albatros Sailing",
  description: "Professional sailing training platform",
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