import { Cabin } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

const cabin = Cabin({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEB_URL),
  title: `Welcome to Sportstr`,
  description: `Simplify, Manage and Enhance Your Coaching Operations`,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_WEB_URL}`,
  },
  twitter: {
    title: "Sportstr",
    description: `Simplify, Manage and Enhance Your Coaching Operations`,
    images: {
      url: `${process.env.NEXT_PUBLIC_WEB_URL}/logo.svg`,
    },
  },
  openGraph: {
    title: "Sportstr",
    description: `Simplify, Manage and Enhance Your Coaching Operations`,
    images: {
      url: `${process.env.NEXT_PUBLIC_WEB_URL}/logo.svg`,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* icon  */}
        <link rel="icon" href="/favicon.png" />
        {/* Google Tag Manager  */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-K5J68JFP');
  `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GM_TAG} /> */}
      <body className={cabin.className}>
        {/* Google Tag Manager (noscript)  */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K5J68JFP"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
