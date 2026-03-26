"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

const links = [
  { href: "/members", label: "THE CREW" },
  { href: "/wall-of-shame", label: "WALL OF SHAME" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/quotes", label: "QUOTES" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="w-full relative z-20 py-6 px-4 md:px-12 flex items-center justify-between">
      <Link
        href="/"
        className="text-4xl text-[#b31446] font-extrabold tracking-tighter"
        style={{ fontFamily: "var(--font-jakarta)" }}
      >
        GOOFIES
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        {links.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{ fontFamily: "var(--font-jakarta)" }}
              className={cn(
                "relative text-sm font-bold uppercase tracking-widest transition-colors",
                isActive ? "text-[#b31446]" : "text-[#322f22] hover:text-[#b31446]"
              )}
            >
              {link.label}
              {isActive && (
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#ff728d] opacity-80 decoration-wavy rounded-full transform -rotate-1" />
              )}
            </Link>
          );
        })}
      </nav>
      <Link
        href="/wall-of-shame"
        style={{ fontFamily: "var(--font-vietnam)" }}
        className="bg-marker-gradient text-white px-6 py-3 rounded-full font-bold shadow-ambient hover:scale-105 transition-transform rotate-2 hover:rotate-0"
      >
        Scrapbook It
      </Link>
    </header>
  );
}
