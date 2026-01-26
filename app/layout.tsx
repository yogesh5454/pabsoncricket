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
  title: "Pabson Cricket League",
  description: "Pabson Cricket League is a premier school-level cricket tournament showcasing the best young cricketing talent. Follow live scores, match schedules, player stats, and highlights of the thrilling competition, all in one platform",
  icons: {
    icon: "/pablogo.ico",      
    shortcut: "/favicon.png",    
  },
  openGraph: {
    title: "Pabson Cricket League",
    description: "Follow live scores, match schedules, player stats, and highlights of the thrilling Pabson Cricket League.",
    url: "https://yourdomain.com", // replace with your actual domain
    siteName: "Pabson Cricket League",
    images: [
      {
        url: "/pablogo.png", // optional OG image from your Logo folder
        width: 1200,
        height: 630,
        alt: "Pabson Cricket League",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pabson Cricket League",
    description: "Follow live scores, match schedules, player stats, and highlights of the thrilling Pabson Cricket League.",
    images: ["/pablogo.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
