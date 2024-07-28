import type { Metadata } from "next";
import localFont from 'next/font/local'


import "./globals.css";

const Hannari = localFont({
  src: '../fonts/Hannari-Regular.ttf',
  display: 'swap'
})


export const metadata: Metadata = {
  title: "Portifólio",
  description: "Portifólio gerado por Rafael Henrique Pavanelli"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  style={{scrollBehavior:'smooth'}}>
      <body className={Hannari.className} style={{backgroundColor: '#151515'}}>
        {children}
        </body>
    </html>
  );
}
