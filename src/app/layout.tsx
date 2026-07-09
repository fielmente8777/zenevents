import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import "./style.scss";
import { WebProvider } from "@/context-api/WebContext";
import LandingFooter from "@/components/footer/LandingFooter";
import PopUpForm from "@/components/pop-up/PopUpForm";
import ImagePopup from "@/components/pop-up/ImagePopup";
import Script from "next/script";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import { contact } from "@/utils/constent";
import Call from "@/components/ContactButton/Call";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metaData: Metadata = {
  title:
    "Zen Events & Sushi | Luxury Event Catering & Premium Sushi Experiences",

  description:
    "Zen Events & Sushi brings premium sushi, Sakura-inspired styling, and elegant Japanese hospitality to weddings, corporate events, private parties, and celebrations. Bringing Blossom to Every Celebration.",

  keywords: [
    "Zen Events & Sushi",
    "Luxury Event Catering",
    "Premium Sushi Catering",
    "Wedding Catering",
    "Corporate Event Catering",
    "Private Party Catering",
    "Japanese Catering",
    "Sushi Catering",
    "Sakura Inspired Events",
    "Event Catering",
    "Luxury Events",
  ],

  openGraph: {
    title: "Zen Events & Sushi | Bringing Blossom to Every Celebration",
    description:
      "Where premium sushi meets beautifully styled, Zen-inspired events.",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RX85JEC21R"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RX85JEC21R');`}
        </Script>

        {/* <!-- Google Tag Manager --> */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K4C7HLSZ');`,
          }}
        ></Script>
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body>
        <WebProvider>
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-K4C7HLSZ"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}
          {children}
          <Whatsapp whatsAppNumber={contact.phone[0]} />
          <Call callNumber={contact.phone[0]} />
          <LandingFooter />
          <PopUpForm />
          <ImagePopup />
        </WebProvider>
      </body>
      {/* <!-- Eazbot Script (Next.js) --> */}
      <Script id="chatbot-config" strategy="afterInteractive">
        {`
          window.eazbotConfig = {
          ndid: "c4f6099b-e0b8-4ff5-8d80-734dd2985312",
          hid: "41446770",
        };
        `}
      </Script>
      <Script
        src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
