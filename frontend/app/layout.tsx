import type { Metadata } from "next";
import { Kalam, Patrick_Hand } from "next/font/google";
import "./globals.css";

// 1. Load Fonts
const kalam = Kalam({ 
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-kalam' 
});

const patrick = Patrick_Hand({ 
  subsets: ['latin'], 
  weight: ['400'],
  variable: '--font-patrick' 
});

export const metadata: Metadata = {
  title: "Jasmine's Portfolio",
  description: "Me: software enginner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 2. Apply variables to body so @theme can find them */}
      <body className={`${kalam.variable} ${patrick.variable} font-body antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}