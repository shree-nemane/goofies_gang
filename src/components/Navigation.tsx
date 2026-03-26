"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

const links = [
  { href: "/members", label: "THE CREW" },
  { href: "/wall-of-shame", label: "WALL OF SHAME" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/quotes", label: "QUOTES" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes or window resizes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <header className="w-full relative z-40 py-4 md:py-6 px-4 md:px-12 flex items-center justify-between bg-[#fdf6e3]/80 backdrop-blur-md md:bg-transparent md:backdrop-blur-none transition-all duration-300">
        <Link
          href="/"
          className="text-3xl md:text-4xl text-[#b31446] font-extrabold tracking-tighter"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          GOOFIES
        </Link>

        {/* Desktop Navigation */}
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

        <div className="flex items-center gap-4">
          <Link
            href="/wall-of-shame"
            style={{ fontFamily: "var(--font-vietnam)" }}
            className="hidden sm:block bg-marker-gradient text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-bold shadow-ambient hover:scale-105 transition-transform rotate-2 hover:rotate-0"
          >
            Scrapbook It
          </Link>
          
          {/* Mobile Menu Toggle - Only visible when menu is closed */}
          {!isOpen && (
            <button 
              className="md:hidden p-2 text-[#b31446] rounded-full bg-white shadow-sm border border-[#b31446]/10"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={28} />
            </button>
          )}
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-[-100px] z-[99999] bg-[#fdf6e3] md:hidden flex flex-col pt-[120px] px-[124px]"
            style={{ backgroundColor: '#fdf6e3' }}
          >
            {/* Extremely solid background layer to prevent ANY bleed-through */}
            <div className="absolute inset-0 bg-[#fdf6e3] z-0" />
            
            {/* Background Texture for the menu */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none z-[1]" />
            
            {/* Close Button Inside Overlay */}
            <div className="w-full flex justify-end p-4 md:p-6 relative z-20">
              <button 
                className="p-2 text-[#b31446] rounded-full bg-white shadow-md border border-[#b31446]/20"
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col gap-8 relative z-10 items-center text-center mt-4 overflow-y-auto pb-12 flex-1">
              {links.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{ fontFamily: "var(--font-jakarta)" }}
                    className={cn(
                      "text-4xl font-black uppercase tracking-tighter transition-all hover:scale-110",
                      isActive ? "text-[#b31446]" : "text-[#322f22]"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              
              <div className="w-full max-w-xs h-0.5 bg-[#b31446]/20 my-4" />
              
              <Link
                href="/wall-of-shame"
                onClick={() => setIsOpen(false)}
                className="w-full max-w-xs bg-marker-gradient text-white px-8 py-5 rounded-full font-bold text-xl text-center shadow-ambient hover:scale-105 transition-transform"
              >
                Scrapbook It
              </Link>

              {/* Decorative Doodles for Mobile Menu */}
              <div style={{ fontFamily: "var(--font-caveat)" }} className="mt-8 text-center text-[#322f22]/60 text-3xl rotate-2 px-6">
                "The Chaos continues..."
                <div className="mt-2 text-sm uppercase tracking-widest font-sans font-bold opacity-30">Stay Goofie</div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
