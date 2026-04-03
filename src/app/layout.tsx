import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Be_Vietnam_Pro, Caveat } from "next/font/google";
import "./globals.css";
import { Navigation } from "../components/Navigation";
import { SparkleBot } from "../components/SparkleBot";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { Analytics } from "@vercel/analytics/next";

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
  title: {
    default: "GOOFIES - The Chaos Collection",
    template: "%s | GOOFIES",
  },
  description: "A digital scrapbook of friendships — chaotic, funny, and emotional. Archiving the moments we'll probably regret in 10 years.",
  keywords: ["friendship", "scrapbook", "inside jokes", "memories", "roasts", "evidence locker"],
  authors: [{ name: "The GOOFIES Crew" }],
  creator: "The GOOFIES Crew",
  publisher: "GOOFIES Co.",
  metadataBase: new URL("https://goofies-gang.vercel.app"), 
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goofies-gang.vercel.app",
    siteName: "GOOFIES",
    title: "GOOFIES - The Chaos Collection",
    description: "A digital scrapbook of friendships — chaotic, funny, and emotional.",
    images: [
      {
        url: "/og-image.png", // Need to ensure this exists or use a generic one
        width: 1200,
        height: 630,
        alt: "GOOFIES - Digital Scrapbook",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GOOFIES - The Chaos Collection",
    description: "A digital scrapbook of friendships — chaotic, funny, and emotional.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "GOOFIES",
              url: "https://goofies-gang.vercel.app",
              description: "A digital scrapbook of friendships — chaotic, funny, and emotional.",
              publisher: {
                "@type": "Organization",
                name: "The GOOFIES Crew",
                logo: {
                  "@type": "ImageObject",
                  url: "https://goofies-gang.vercel.app/icon.png"
                }
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://goofies-gang.vercel.app/gallery?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        <Navigation />
        <ErrorBoundary>
          <main className="relative z-10 w-full overflow-x-hidden flex-1">
            {children}
          </main>
        </ErrorBoundary>
        
        {/* Footnote */}
        <footer className="w-full relative z-10 py-12 px-4 md:px-12 bg-[#efe8d2] border-t border-[#d8cdae] border-dashed text-sm flex flex-col items-center md:items-start md:flex-row justify-between text-[#322f22]/70 gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-jakarta)" }}>GOOFIES</span>
            <span>Hand-taped with love by the GOOFIES Crew</span>
            <span className="text-xs italic mt-2 text-[#00694c]/60">We are not responsible for lost brain cells.</span>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6 w-full md:w-auto">
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-4 uppercase tracking-widest text-[10px] font-bold">
              <a href="/members" className="hover:text-[#b31446]">The Vault</a>
              <a href="/privacy" className="hover:text-[#b31446]">Privacy Scribbles</a>
              <a href="#" className="hover:text-[#b31446]">Contact the Curator</a>
            </div>
            <div className="text-[9px] uppercase tracking-[0.2em] opacity-30 text-center md:text-right max-w-[280px] md:max-w-none">
              © 2022 Goofies Co. | Hand-taped with love by the Goofies crew
            </div>
          </div>
        </footer>
        <SparkleBot />
        <Analytics />
      </body>
    </html>
  );
}
