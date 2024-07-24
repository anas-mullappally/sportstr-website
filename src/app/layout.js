import { Cabin } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

const cabin = Cabin({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-K5J68JFP" />
      <head>
        {/* icon  */}
        <link rel="icon" href="/favicon.png" />
      </head>
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
