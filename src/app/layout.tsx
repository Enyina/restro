import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./GlobalRedux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  manifest: "/manifest.json",
  icons: { apple: "/public/icon512_rounded.png" },
  // themeColor:"#FF7F44",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='inter.className'>
        <div  className={`bg-default_background_color m-1  rounded-3xl p-0 min-h-screen md:mx-24 lg:mx-48 xl:mx-96 `}>
<Providers>
        {children}

</Providers>
        </div>
      </body>
    </html>
  );
}
