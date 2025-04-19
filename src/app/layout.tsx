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
  title: {
    default: 'PlanNet',
    template: '%s | Plan.Net',
    absolute: 'PlanNet: Crie sua Rotina!',
  },
  robots: {
    follow: true,
    index: true,
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
        {children}
      </body>
    </html>
  );
}
