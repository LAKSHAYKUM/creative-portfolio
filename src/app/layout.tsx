"use client"; // 1. Yahan "use client" add kiya hai

import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { BASE_URL, OG_IMAGE } from "@/lib/constants";
import LenisWrapper from "@/providers/lenis-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import FooterSection from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import StructuredData from "@/components/common/structured-data";
import Analytics from "@/components/common/analytics";
import ConsoleLog from "@/components/common/console-log";
import CustomCursor from "@/components/ui/custom-cursor";
import { useEffect } from "react"; // 2. useEffect import kiya

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // 3. Yeh raha mouse tracking logic jo spotlight ko chalayega
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", ev.clientX + "px");
      document.documentElement.style.setProperty("--mouse-y", ev.clientY + "px");
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Warm up Vimeo connections early so ShowReel iframes load faster */}
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" />
        <link rel="preconnect" href="https://f.vimeocdn.com" />

        {/* ImageKit serves the 47 AboutScrollSection frames (crossOrigin) */}
        <link
          rel="preconnect"
          href="https://ik.imagekit.io"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://ik.imagekit.io" />

        <StructuredData />
        <Analytics />
      </head>
      <body
        className={`${poppins.variable} ${cormorantGaramond.variable} antialiased  mx-auto `}
      >
        <CustomCursor />
        <ConsoleLog />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LenisWrapper>
            <Navbar />
            {children}
            <FooterSection />
          </LenisWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}