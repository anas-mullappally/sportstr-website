import { Cabin } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
      </head>
      <body className={cabin.className}>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
