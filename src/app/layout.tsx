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
  title: "UMWERO - AI-Powered Crop Health Intelligence for Africa",
  icons: [
    {
      url: "/logo.png",
      media: "(prefers-color-schema: light)"
    },
    {
      url: "/logo.png",
      media: "(prefers-color-schema: dark)"
    },
  ],
  description:
    "Helping Africa grow healthier crops and secure the future of food. UMWERO provides AI-powered disease detection, real-time crop monitoring, and personalized recommendations for African farmers.",
  keywords: [
    "agriculture",
    "AI",
    "crop health",
    "Africa",
    "Rwanda",
    "farming",
    "disease detection",
    "crop monitoring",
  ],
  authors: [{ name: "UMWERO Team" }],
  openGraph: {
    title: "UMWERO - AI-Powered Crop Health Intelligence for Africa",
    description:
      "Helping Africa grow healthier crops and secure the future of food",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "UMWERO - AI-Powered Crop Health Intelligence for Africa",
    description:
      "Helping Africa grow healthier crops and secure the future of food",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base-100`}
      >
        {children}
      </body>
    </html>
  );
}
