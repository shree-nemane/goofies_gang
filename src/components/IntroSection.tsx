"use client";

import { motion } from "framer-motion";

export function IntroSection() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full flex flex-col items-center"
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 style={{ fontFamily: "var(--font-jakarta)" }} className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-[#322f22] tracking-wide uppercase">
            Certified Brain Farts
          </h2>
          <div className="w-16 md:w-24 h-1 bg-[#00694c] mx-auto opacity-80" />
        </div>

        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center md:items-stretch gap-10 md:gap-12 lg:gap-24 mt-4 w-full">
          {[
            { quote: "wingardium leviosa Harry puttar said clamly", author: "Mandar, 3 AM", color: "bg-[#ffe082]" },
            { quote: "Aloo ke saji mai soya sauce kyu dalte", author: "Shree, Chef de Chaos", color: "bg-[#ff728d]" },
            { quote: "I dont have words to express myself", author: "RAHUL, Forever", color: "bg-[#a8e6cf]" }
          ].map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, rotate: i % 2 === 0 ? 3 : -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: i % 2 === 0 ? -2 : 1.5 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              viewport={{ once: true }}
              className={`${q.color} p-6 w-full max-w-[320px] shadow-ambient relative flex flex-col justify-between`}
              style={{ borderRadius: "0.2rem" }}
            >
              {/* Sticky Tape */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-white/40 transform -translate-x-1/2 -rotate-1 rounded-sm" />
              <p style={{ fontFamily: "var(--font-caveat)" }} className="text-xl md:text-2xl text-black/80 mb-6 leading-relaxed">
                &quot;{q.quote}&quot;
              </p>
              <div className="text-xs font-bold uppercase tracking-widest text-black/50 border-t border-black/10 pt-4 flex items-center gap-2">
                <span className="text-[#00694c] text-lg">✒</span> - {q.author}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
