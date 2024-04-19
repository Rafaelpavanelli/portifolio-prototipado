import type { Metadata } from "next";
import localFont from 'next/font/local'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./globals.css";

const Hannari = localFont({
  src: '../fonts/Hannari-Regular.ttf',
  display: 'swap'
})


export const metadata: Metadata = {
  title: "Portifólio",
  description: "Portifólio gerado por Rafael Henrique Pavanelli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Hannari.className}>
        {children}
        </body>
    </html>
  );
}
