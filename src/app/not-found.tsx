"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-20 text-center relative overflow-hidden">
      {/* Decorative scribbles/elements with animation */}
      <motion.div 
        animate={{ rotate: [12, 15, 12], y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-6xl opacity-10 select-none hidden md:block"
      >
        ?
      </motion.div>
      <motion.div 
        animate={{ rotate: [-12, -15, -12], y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 text-8xl opacity-10 select-none hidden md:block"
      >
        !
      </motion.div>
      
      {/* The main card with spring entrance */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
        animate={{ scale: 1, opacity: 1, rotate: -1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="relative z-10 bg-[#efe8d2] p-8 md:p-12 shadow-ambient border border-[#ebdcb9] rounded-sm max-w-2xl w-full"
      >
        {/* Taped effect at top - more detailed */}
        <div className="absolute -top-6 left-1/2 w-40 h-10 bg-white/40 transform -translate-x-1/2 rotate-2 backdrop-blur-md border-x border-white/20 shadow-sm flex items-center justify-center">
            <div className="w-full h-[1px] bg-white/20" />
        </div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ fontFamily: "var(--font-jakarta)" }} 
          className="text-7xl md:text-9xl font-black text-[#b31446] mb-4 leading-none"
        >
          404
        </motion.h1>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative inline-block mb-8"
        >
          <h2 
            style={{ fontFamily: "var(--font-jakarta)" }} 
            className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#322f22] relative z-10"
          >
            Page Not Found
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-1 left-0 h-3 bg-[#ffe082] -z-10 rotate-1 shadow-sm" 
          />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ fontFamily: "var(--font-caveat)" }} 
          className="text-2xl md:text-3xl text-[#322f22]/80 leading-relaxed mb-10"
        >
          Looks like this page got lost in the chaos. <br className="hidden sm:block" />
          Kind of like our collective brain cell on a Friday night.
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            href="/"
            className="group relative bg-marker-gradient text-white px-10 py-4 rounded-full font-bold shadow-ambient transition-all hover:scale-105 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">Back to the Archive</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
          
          <Link
            href="/members"
            style={{ fontFamily: "var(--font-caveat)" }}
            className="text-2xl text-[#00694c] hover:text-[#b31446] transition-colors flex items-center gap-2"
          >
            Check the members? 
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
                →
            </motion.span>
          </Link>
        </motion.div>
        
        {/* Hand-drawn style doodle */}
        <div className="absolute -bottom-8 -left-4 text-4xl text-[#ff728d] opacity-40 -rotate-12 select-none font-serif">
          Oops...
        </div>
      </motion.div>
      
      {/* Background dashed path - subtle decoration */}
      <svg className="absolute inset-0 w-full h-full -z-10 opacity-5 pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path 
          d="M0,100 Q250,50 500,100 T1000,100 M0,300 Q250,250 500,300 T1000,300 M0,500 Q250,450 500,500 T1000,500" 
          fill="none" 
          stroke="#322f22" 
          strokeWidth="1" 
          strokeDasharray="10,10" 
        />
      </svg>
    </div>
  );
}
