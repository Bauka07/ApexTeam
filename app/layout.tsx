import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Navbar } from "@/components/features/navbar";
import { AppProviders } from "@/components/providers/AppProviders";
import { ThemeBootstrapScript } from "@/components/providers/ThemeBootstrapScript";

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
  title: "apex-team",
  description: "Apex Team digital product studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeBootstrapScript />
        <AppProviders>
          <Navbar />
          <main className="flex flex-1 flex-col">{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}
