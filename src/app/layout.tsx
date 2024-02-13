import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { Header, Footer } from "./common/components";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Al-Hodhod",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <SpeedInsights />
          <Analytics />
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
