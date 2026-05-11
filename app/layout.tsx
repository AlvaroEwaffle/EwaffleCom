import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ewaffle.com — LMS a medida para empresas grandes",
    template: "%s — Ewaffle",
  },
  description:
    "Plataformas LMS a medida para empresas con primera linea, onboarding masivo, compliance y capacitacion trazable.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Ewaffle.com — LMS a medida para empresas grandes",
    description:
      "Plataformas LMS a medida para primera linea, onboarding masivo y capacitacion trazable.",
    url: "https://e-waffle.com",
    siteName: "Ewaffle",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`h-full antialiased ${poppins.variable}`}>
      <body className={`min-h-full flex flex-col ${poppins.className}`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* WhatsApp Float Button */}
        <a
          href="https://wa.me/56920115198?text=Hola%2C%20me%20interesa%20conocer%20Ewaffle.com%20para%20una%20plataforma%20LMS%20a%20medida"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contáctanos por WhatsApp"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            backgroundColor: "#25D366",
            borderRadius: "50%",
            width: "56px",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            zIndex: 9999,
            textDecoration: "none",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="white">
            <path d="M16.003 0C7.174 0 .003 7.17.003 15.998c0 2.821.738 5.477 2.025 7.789L0 32l8.418-2.207a15.95 15.95 0 0 0 7.585 1.926h.001C24.832 31.719 32 24.549 32 15.72 32 7.17 24.83 0 16.003 0zm0 29.15c-2.513 0-4.977-.675-7.12-1.952l-.511-.302-5.278 1.384 1.41-5.143-.334-.53a13.163 13.163 0 0 1-2.018-7.01c0-7.264 5.911-13.175 13.18-13.175 7.264 0 13.176 5.911 13.176 13.175 0 7.264-5.912 13.553-13.505 13.553zm7.25-9.87c-.397-.199-2.348-1.158-2.712-1.29-.364-.13-.629-.199-.894.2-.265.397-1.027 1.29-1.259 1.556-.231.265-.464.298-.861.1-.397-.199-1.677-.618-3.195-1.972-1.181-1.053-1.978-2.352-2.21-2.749-.232-.397-.025-.612.174-.809.179-.178.397-.464.596-.695.199-.232.265-.397.397-.662.133-.265.066-.497-.033-.695-.1-.199-.894-2.153-1.225-2.948-.322-.776-.649-.671-.894-.683-.231-.01-.497-.013-.762-.013-.265 0-.695.1-.1059.497-.364.397-1.392 1.358-1.392 3.312 0 1.954 1.425 3.841 1.623 4.107.199.265 2.802 4.278 6.789 5.999.949.41 1.689.654 2.266.838.952.303 1.818.26 2.503.157.763-.113 2.348-.96 2.679-1.887.332-.926.332-1.72.232-1.887-.099-.166-.364-.265-.761-.464z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
