import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Ewaffle — Gamified Course Production Powered by AI",
    template: "%s — Ewaffle",
  },
  description:
    "AI-powered SCORM course production for training companies. White-label ready. Delivered in 4 weeks.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Ewaffle — Gamified Course Production Powered by AI",
    description:
      "AI-powered SCORM course production for training companies. White-label ready. Delivered in 4 weeks.",
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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
