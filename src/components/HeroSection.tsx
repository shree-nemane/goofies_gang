"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 py-20">

      {/* Decorative polaroids in background */}
      <motion.div
        initial={{ opacity: 0, rotate: -15, x: -100, y: -50 }}
        animate={{ opacity: 1, rotate: -5, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-10 left-10 md:left-24 bg-white p-4 shadow-ambient transform z-0"
        style={{ borderRadius: "0.25rem" }}
      >
        <img className="w-32 h-32 md:w-48 md:h-48 object-cover bg-gray-200 rounded-sm mb-4" src='/home_page_pic/g1.jpg' alt="" />
        {/* <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-200 rounded-sm mb-4 bg-[url('/home_page_pic/g1.jpg')] bg-cover bg-center" /> */}
        <p style={{ fontFamily: "var(--font-caveat)" }} className="text-xl text-center">Typical Tuesday.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: 15, x: 100, y: 50 }}
        animate={{ opacity: 1, rotate: 8, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-20 right-10 md:right-32 bg-white p-4 shadow-ambient transform z-0"
        style={{ borderRadius: "0.25rem" }}
      >
        <img className="w-40 h-40 md:w-56 md:h-56 bg-gray-200 rounded-sm mb-4 object-cover" src='/home_page_pic/g2.jpg' alt="" />
        {/* <div className="w-40 h-40 md:w-56 md:h-56 bg-gray-200 rounded-sm mb-4 bg-[url('https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&q=80')] bg-cover bg-center" /> */}
        <p style={{ fontFamily: "var(--font-caveat)" }} className="text-xl text-center text-[#b31446]">Mistakes were made.</p>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="relative inline-block"
        >
          <div className="absolute -top-6 -right-12 bg-yellow-200 px-4 py-1 rotate-6 shadow-sm border-t border-yellow-300">
            <span style={{ fontFamily: "var(--font-caveat)" }} className="text-lg font-bold">⚠️ FRAGILE BRAIN</span>
          </div>
          <h1
            className="text-7xl md:text-9xl font-black text-[#b31446] tracking-tight uppercase"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            GOOFIES
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative mt-4 mb-12"
        >
          <div className="absolute top-1/2 left-0 w-full h-2 bg-[#ff728d] -z-10 -translate-y-1/2 opacity-60" />
          <p style={{ fontFamily: "var(--font-caveat)" }} className="text-4xl md:text-5xl italic px-4">
            12 idiots. 1 brain cell.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 mt-8 items-center"
        >
          <Link
            href="/members"
            className="bg-marker-gradient text-white px-8 py-4 rounded-3xl font-bold text-lg shadow-ambient transition-all hover:scale-105 hover:rotate-2 relative z-10"
          >
            Enter the Chaos
            <div className="absolute -top-3 left-1/2 w-8 h-4 bg-white opacity-40 transform -translate-x-1/2 -rotate-2" />
          </Link>
          <Link
            href="/wall-of-shame"
            className="bg-[#ffe082] text-black px-8 py-4 rounded-lg font-bold text-lg shadow-ambient transition-all hover:scale-105 hover:-rotate-2 rotate-1"
          >
            Meet the Idiots
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
