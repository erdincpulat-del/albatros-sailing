import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import FloatingContact from "@/components/ui/FloatingContact";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export const metadata = {
  title: "Albatros Sailing",
  description: "Official Sailing Training Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#050b14",
          color: "#f8fafc",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <SiteHeader />

        <main
          style={{
            paddingTop: 78,
          }}
        >
          {children}
        </main>

        <SiteFooter />

        <FloatingContact />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}