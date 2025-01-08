import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import ConvexClientProvider from "@/components/ConvexClientProvider";
import Header from "@/components/Header";
import SyncUserWithConvex from "@/components/SyncUserWithConvex";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ticketr",
  description: "Website to Host and book events",
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
        <ConvexClientProvider>
          <ClerkProvider>
            <SyncUserWithConvex/>
            <Header />
            {children}
          </ClerkProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
