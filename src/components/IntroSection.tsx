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
        <div className="text-center mb-16">
          <h2 style={{ fontFamily: "var(--font-jakarta)" }} className="text-3xl md:text-5xl font-bold mb-4 text-[#322f22] tracking-wide uppercase">
            Certified Brain Farts
          </h2>
          <div className="w-24 h-1 bg-[#00694c] mx-auto opacity-80" />
        </div>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-24 mt-4 w-full">
          {[
            { quote: "Wait, if we all share one brain cell, who has it right now? Because I definitely don't.", author: "Kevin, 3 AM", color: "bg-[#ffe082]" },
            { quote: "I tried to cook pasta in Gatorade to save time on electrolytes. It was blue. It was bad.", author: "Sarah, Chef de Chaos", color: "bg-[#ff728d]" },
            { quote: "Guys, I found a way to win Monopoly. You just hide the $500s in your socks.", author: "The Cheating One", color: "bg-[#a8e6cf]" }
          ].map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, rotate: i % 2 === 0 ? 3 : -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: i % 2 === 0 ? -2 : 1.5 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              viewport={{ once: true }}
              className={`${q.color} p-6 w-[300px] shadow-ambient relative flex flex-col justify-between`}
              style={{ borderRadius: "0.2rem" }}
            >
              {/* Sticky Tape */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-white/40 transform -translate-x-1/2 -rotate-1 rounded-sm" />
              <p style={{ fontFamily: "var(--font-caveat)" }} className="text-2xl text-black/80 mb-6 leading-relaxed">
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
