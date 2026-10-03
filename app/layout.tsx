import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans({ weight: ["400", "500", "600"], subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = IBM_Plex_Mono({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-mono", display: "swap" });

// absolute links for previews; Vercel provides the production domain
const SITE_URL = process.env.NEXT_PUBLIC_SITE_HOST
  ? `https://${process.env.NEXT_PUBLIC_SITE_HOST}`
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "The Daily Commit · GitHub Edition",
  authors: [{ name: "Kushagra Srivastava", url: "https://github.com/marvillage" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
