import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import "./globals.scss";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jesus.net - Free digital tools to help you know Jesus and share Him with others.",
  description:
    "Welcome to Jesus.net! Access mga articles, resources, at tools to deepen your faith and at mas makilala si Jesus—ang Kanyang mga teachings and love.",
  openGraph: {
    title: "Jesus.net - Free digital tools to help you know Jesus and share Him with others.",
    description:
      "Welcome to Jesus.net! Access mga articles, resources, at tools to deepen your faith and at mas makilala si Jesus—ang Kanyang mga teachings and love.",
    url: "https://jesus.net",
    siteName: "Jesus.net Philippines",
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesus.net - Free digital tools to help you know Jesus and share Him with others.",
    description:
      "Welcome to Jesus.net! Access mga articles, resources, at tools to deepen your faith and at mas makilala si Jesus—ang Kanyang mga teachings and love.",
  },
  icons: {
    icon: "/apple-touch-icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NJXH5LJZSV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-NJXH5LJZSV');
          `}
        </Script>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
