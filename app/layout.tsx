import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import Analytics from "@/components/Analytics";

/* Contenedor propio de e-waffle.com → GA4 G-DZM8MTFY9V (propiedad separada de
   ewaffle.cl). Estaba en origin desde el 13-may (4870367) pero el sitio se
   publicó desde una rama que no lo traía: 25-sep el sitio no medía nada. */
const GTM_ID = "GTM-55QPCXTK";

/* Archivo lleva el peso y IBM Plex Mono la capa técnica —numeración de pasos,
   etiquetas, canales—. Es la misma pareja del catálogo de ewaffle.cl: el mono
   es lo que hace que un fondo oscuro se lea como instrumental y no como una
   landing oscura más. */
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ewaffle — Capacitación que tu gente sí hace",
    template: "%s — Ewaffle",
  },
  description:
    "Simuladores, juegos, guías interactivas, recorridos 360 y video para mutuales, universidades e institutos, y empresas con equipos grandes en terreno. Te lo entregamos funcionando: en tu LMS, o en el nuestro, que va incluido.",
  /* El sitio servía el favicon por defecto de Next —el círculo negro con el
     triángulo— porque `app/favicon.ico` existía y la convención de archivo del
     App Router tiene precedencia sobre lo que se declare acá. Daba igual que
     este bloque apuntara a la marca: Next emitía su propio <link rel="icon">
     primero y ese ganaba. Ese archivo se borró.

     El .ico va multi-tamaño (16 a 256) porque el navegador pide /favicon.ico
     directo aunque el HTML declare un PNG, y también lo piden buscadores y
     lectores. La marca se recortó a su contenido: venía con ~30% de margen
     transparente y a 16px eso dejaba la "w" ilegible. */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Ewaffle — Capacitación que tu gente sí hace",
    description:
      "Simuladores, juegos, guías interactivas, recorridos 360 y video. Te lo entregamos funcionando: en tu LMS, o en el nuestro, que va incluido.",
    url: "https://e-waffle.com",
    siteName: "Ewaffle",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* suppressHydrationWarning: el script de abajo agrega la clase `js` al <html> durante el
       parseo, o sea antes de que React hidrate. React compara su className esperado contra el
       del DOM, ve la clase de más y avisa. La diferencia es intencional —es el mecanismo que
       hace que la página se vea igual cuando el JS no corre— así que el aviso es ruido: en dev
       encendía el badge "1 Issue" en todas las páginas y tapaba avisos que sí importan. */
    <html
      lang="es-CL"
      suppressHydrationWarning
      className={`h-full antialiased ${archivo.variable} ${plexMono.variable}`}
    >
      <body className={`min-h-full flex flex-col ${archivo.className}`}>
        {/* La entrada por scroll parte oculta. Si el JS no corre, esta clase
            nunca se agrega y el contenido se ve igual en vez de quedar en
            blanco — que es como falla siempre este patrón. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Analytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* WhatsApp Float Button */}
        <a
          href="https://wa.me/56920115198?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Ewaffle%20%F0%9F%91%8B"
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
