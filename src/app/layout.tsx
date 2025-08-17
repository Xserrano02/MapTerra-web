import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientToaster from "../componentes/Toaster";
import Script from "next/script";
import FbPixelListener from "./fb-pixel-listener";
import MarketingBootstrap from "../lib/marketing-bootstrap";
import EngagementSignals from "../componentes/EngagementSignals";
import { TbDrone } from "react-icons/tb";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://mapterra.com"),
  title: {
    default: "MAPTERRA | Drones y datos geoespaciales RTK & LiDAR",
    template: "%s | MAPTERRA",
  },
  description:
    "Soluciones integrales con drones de última generación: RTK, LiDAR, nube de puntos 3D y ortofotos de precisión centimétrica en Latinoamérica.",
  keywords: [
    "drones RTK",
    "LiDAR",
    "topografía",
    "orto­fotomapa",
    "nube de puntos",
    "cartografía catastral",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_SV",
    url: "/",
    title: "MAPTERRA | Drones y datos geoespaciales",
    description:
      "Datos geoespaciales de precisión centimétrica que transforman proyectos de ingeniería, urbanismo y medio ambiente.",
    siteName: "MAPTERRA",
    images: [
      {
        url: "/og-default.webp",
        width: 1200,
        height: 630,
        alt: "Vista aérea generada por dron con malla LiDAR superpuesta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mapterra",
    creator: "@mapterra",
  },
  icons: { icon: "/MAPTERRRA-05.PNG" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MAPTERRA",
    url: "https://mapterra.com",
    logo: "https://mapterra.com/logo.webp",
    sameAs: [
      "https://facebook.com/mapterra",
      "https://instagram.com/mapterra",
      "https://www.linkedin.com/company/mapterra",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Escalón",
      addressLocality: "San Salvador",
      addressCountry: "SV",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+503 7346-7800",
      email: "contacto@mapterra.com",
    },
  };

  const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

  return (
    <html lang="es">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-clip`}
      >
        <ClientToaster />

        {pixelId && (
          <>
            <Script id="fb-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${pixelId}');
                fbq('track', 'PageView');
              `}
            </Script>

            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                alt=""
                src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
              />
            </noscript>

            <FbPixelListener />
            <MarketingBootstrap />
            <EngagementSignals />
          </>
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLD) }}
        />
        {children}
      </body>
    </html>
  );
}
