"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 py-12 md:py-20">

      {/* Decorative polaroids in background - Adjusted for responsiveness */}
      <motion.div
        initial={{ opacity: 0, rotate: -15, x: -100, y: -50 }}
        animate={{ opacity: 1, rotate: -5, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-10 left-4 md:left-12 lg:left-24 bg-white p-2 md:p-4 shadow-ambient transform z-0 hidden sm:block"
        style={{ borderRadius: "0.25rem" }}
      >
        <img 
          className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 object-cover bg-gray-200 rounded-sm mb-2 md:mb-4" 
          src='/home_page_pic/g1.jpg' 
          alt="Memory 1" 
        />
        <p style={{ fontFamily: "var(--font-caveat)" }} className="text-sm md:text-xl text-center">Typical Tuesday.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: 15, x: 100, y: 50 }}
        animate={{ opacity: 1, rotate: 8, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-10 right-4 md:right-16 lg:right-32 bg-white p-2 md:p-4 shadow-ambient transform z-0 hidden md:block"
        style={{ borderRadius: "0.25rem" }}
      >
        <img 
          className="w-32 h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 bg-gray-200 rounded-sm mb-2 md:mb-4 object-cover" 
          src='/home_page_pic/g2.jpg' 
          alt="Memory 2" 
        />
        <p style={{ fontFamily: "var(--font-caveat)" }} className="text-sm md:text-xl text-center text-[#b31446]">Mistakes were made.</p>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="relative inline-block"
        >
          <div className="absolute -top-8 md:-top-6 -right-4 md:-right-12 bg-yellow-200 px-3 md:px-4 py-1 rotate-6 shadow-sm border-t border-yellow-300 z-20">
            <span style={{ fontFamily: "var(--font-caveat)" }} className="text-sm md:text-lg font-bold whitespace-nowrap">⚠️ FRAGILE BRAIN</span>
          </div>
          <h1
            className="text-5xl sm:text-7xl md:text-9xl font-black text-[#b31446] tracking-tight uppercase leading-none"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            GOOFIES
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative mt-6 mb-8 md:mb-12"
        >
          <div className="absolute top-1/2 left-0 w-full h-1.5 md:h-2 bg-[#ff728d] -z-10 -translate-y-1/2 opacity-60" />
          <p style={{ fontFamily: "var(--font-caveat)" }} className="text-3xl md:text-5xl italic px-4 whitespace-nowrap">
            12 idiots. 1 brain cell.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-4 md:mt-8 items-center"
        >
          <Link
            href="/members"
            className="w-full sm:w-auto bg-marker-gradient text-white px-8 py-4 rounded-3xl font-bold text-lg shadow-ambient transition-all hover:scale-105 hover:rotate-2 relative z-10 text-center"
          >
            Enter the Chaos
            <div className="absolute -top-3 left-1/2 w-8 h-4 bg-white opacity-40 transform -translate-x-1/2 -rotate-2" />
          </Link>
          <Link
            href="/wall-of-shame"
            className="w-full sm:w-auto bg-[#ffe082] text-black px-8 py-4 rounded-lg font-bold text-lg shadow-ambient transition-all hover:scale-105 hover:-rotate-2 rotate-1 text-center"
          >
            Meet the Idiots
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
