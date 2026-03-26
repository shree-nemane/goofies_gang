import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Be_Vietnam_Pro, Caveat } from "next/font/google";
import "./globals.css";
import { Navigation } from "../components/Navigation";
import { SparkleBot } from "../components/SparkleBot";
import { ErrorBoundary } from "../components/ErrorBoundary";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-vietnam",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GOOFIES - The Chaos Collection",
  description: "A digital scrapbook of friendships — chaotic, funny, and emotional.",
  icons: {
    icon: '/icon.png',
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
        className={`${plusJakartaSans.variable} ${beVietnamPro.variable} ${caveat.variable} antialiased text-[#322f22] bg-[#fdf6e3] relative min-h-screen flex flex-col`}
      >
        <Navigation />
        <ErrorBoundary>
          <main className="relative z-10 w-full overflow-x-hidden flex-1">
            {children}
          </main>
        </ErrorBoundary>
        
        {/* Footnote */}
        <footer className="w-full relative z-10 py-12 px-4 md:px-12 bg-[#efe8d2] border-t border-[#d8cdae] border-dashed text-sm flex flex-col md:flex-row items-center justify-between text-[#322f22]/70">
          <div className="flex flex-col mb-4 md:mb-0">
            <span className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-jakarta)" }}>GOOFIES</span>
            <span>Hand-taped with love by the GOOFIES Crew</span>
            <span className="text-xs italic mt-2 text-[#00694c]/60">We are not responsible for lost brain cells.</span>
          </div>
          <div className="flex gap-6 uppercase tracking-widest text-[10px] font-bold">
            <a href="/members" className="hover:text-[#b31446]">The Vault</a>
            <a href="/privacy" className="hover:text-[#b31446]">Privacy Scribbles</a>
            <a href="#" className="hover:text-[#b31446]">Contact the Curator</a>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-[9px] uppercase tracking-[0.2em] opacity-30 mt-8 md:mt-0">
            © 2022 Goofies Co. | Hand-taped with love by the Goofies crew
          </div>
        </footer>
        <SparkleBot />
      </body>
    </html>
  );
}
