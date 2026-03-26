"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Camera, Flame } from "lucide-react";

export function GroupDynamics() {
  return (
    <section className="py-24 px-4 w-full relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Memory Vault Card */}
        <motion.div
          whileHover={{ y: -5, rotate: 1 }}
          className="bg-[#efe8d2] p-8 border-2 border-dashed border-[#d8cdae] col-span-1 md:col-span-2 relative drop-shadow-sm"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="w-32 h-32 bg-white flex-shrink-0 relative rounded-sm shadow-ambient rotate-2 p-2">
              <img className="w-full h-full object-cover self-center" src="home_page_pic/GOOFIES01.png" alt="" />
              {/* <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1543807535-eceef0bc6599')] bg-cover bg-center rounded-sm" /> */}
            </div>
            <div>
              <h3 className="text-2xl font-black mb-3 text-[#322f22]" style={{ fontFamily: "var(--font-jakarta)" }}>
                THE VAULT
              </h3>
              <p className="text-[#322f22]/80 leading-relaxed mb-6">
                Every blurry photo, every "you had to be there" moment, and every receipt for 40 chicken nuggets at midnight.
              </p>
              <div className="flex items-center gap-3 text-sm font-bold opacity-60">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-[#ff728d]" />
                  <div className="w-6 h-6 rounded-full bg-[#ffe082]" />
                  <div className="w-6 h-6 rounded-full bg-[#a8e6cf]" />
                </div>
                <span  style={{ fontFamily: "var(--font-jakarta)" }}>Online memeories</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Wall of shame */}
        <Link href="/wall-of-shame" className="block h-full cursor-pointer">
          <motion.div
            whileHover={{ scale: 1.02, rotate: -1 }}
            className="h-full bg-[#00694c] text-white p-8 relative flex flex-col justify-center items-center text-center shadow-ambient"
          >
            <div className="absolute top-2 right-2 w-8 h-8 opacity-20"><Flame size={32} /></div>
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mb-4">
              <span className="text-xl font-bold">★</span>
            </div>
            <h3 className="text-2xl font-black mb-2" style={{ fontFamily: "var(--font-jakarta)" }}>
              WALL OF SHAME
            </h3>
            <p className="text-white/80 text-sm">
              423 documented fails and counting.
            </p>
          </motion.div>
        </Link>

        {/* Current Active Idiot */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-[#ffe082] p-8 relative shadow-ambient rotate-1"
        >
          <div className="absolute -top-3 left-10 w-12 h-4 bg-white/40 transform -rotate-2 rounded-sm" />
          <p className="font-black text-xl uppercase text-black/90">
            Current Active Idiot:  <span className="bg-black text-white px-2 py-1 rounded ml-2">RAHUL</span>
          </p>
        </motion.div>

        {/* Join CTA */}
        <motion.div
          whileHover={{ scale: 0.98 }}
          className="bg-white p-8 col-span-1 md:col-span-2 relative shadow-ambient flex flex-col md:flex-row items-center justify-between"
          style={{ borderRadius: "0.2rem" }}
        >
          <div>
            <h3 className="text-3xl font-black text-[#b31446] mb-2" style={{ fontFamily: "var(--font-jakarta)" }}>
              SCRAPBOOK NOW
            </h3>
            <p className="text-[#322f22]/80">Contribute your own mess to the digital pile. No judgment, just pure goofiness.</p>
          </div>
          <Link
            href="/gallery"
            className="mt-6 md:mt-0 bg-[#b31446] hover:bg-[#901038] transition-colors text-white px-8 py-3 rounded-full font-bold shadow-sm whitespace-nowrap"
          >
            Upload Junk ➔
          </Link>
          
          <div className="absolute right-4 bottom-4 opacity-10 pointer-events-none">
            <Users size={120} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
