import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteTitle = "Vichra | Sales Tekstil allmakind";
const siteDescription =
  "Temukan pilihan kain polyester, katun, dan rayon bersama Vichra, sales tekstil dari allmakind.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Vichra",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Vichra by allmakind",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}