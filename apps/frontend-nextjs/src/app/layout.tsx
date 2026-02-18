
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import AppSidebar from "@/components/ui/AppSidebar";
import Glow from "@/components/ui/Glow";
import Footer from "@/components/ui/Footer";
import ScrollToTop from '@/components/ScrollToTop';
import WindowsScrollbar from '@/components/WindowsScrollbar';
import DisableBfCache from '@/components/DisableBfCache';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Isaac Tay | Hello!",
  description: "Hi! I'm a whimsy ai and software engineer, obsessed with building cool software for fun!",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Glow />
        <WindowsScrollbar />
        <ScrollToTop />
        
        <div className="mx-auto lg:min-h-screen max-w-screen-xl lg:px-12 h-screen lg:h-auto">
          <div className="w-full lg:h-full lg:flex lg:flex-row lg:gap-x-8">

            <header className="flex flex-col w-full lg:w-[30%] lg:h-[99dvh] lg:sticky lg:top-0 lg:py-20 lg:px-0 lg:z-50">
              <AppSidebar />
            </header>

            <main className="flex flex-col w-full min-h-screen lg:h-auto lg:w-[70%] lg:py-20 text-md lg:text-base p-5 pt-[70px] lg:px-0 z-0">
              {children}
            </main>

            <footer className="lg:hidden items-end p-5">
              <Footer />
            </footer>

          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}