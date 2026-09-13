import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riviera House and Grounds",
  description: "Pool and Garden maintenance across the Côte d’Azur",
  openGraph: {
    title: "Riviera House and Grounds",
    description: "Pool and Garden maintenance across the Côte d’Azur",
    url: "https://yourwebsite.com",
    siteName: "Riviera House and Grounds",
    images: [
      {
        url: "https://yourwebsite.com/beautifulpool.jpg",
        width: 1200,
        height: 630,
        alt: "Riviera House and Grounds Pool and Garden",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riviera House and Grounds",
    description: "Pool and Garden maintenance across the Côte d’Azur",
    images: ["https://yourwebsite.com/beautifulpool.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}