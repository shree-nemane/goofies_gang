"use client";

import { motion } from "framer-motion";
import { DeleteButton } from "@/components/DeleteButton";

type Quote = {
  id: string;
  text: string;
  author: string;
  context: string;
  color: string;
  createdAt: Date;
};

const QUOTE_COLOR_CLASS_MAP: Record<string, string> = {
  white: "bg-white",
  red: "bg-red-300",
  blue: "bg-blue-300",
  yellow: "bg-yellow-200",
  green: "bg-green-300",
  purple: "bg-purple-300",
  pink: "bg-pink-300",
  slate: "bg-slate-300",
};

export function QuoteGrid({ quotes }: { quotes: Quote[] }) {
  if (quotes.length === 0) {
    return (
      <div className="text-center py-20 text-[#322f22]/50 text-2xl" style={{ fontFamily: "var(--font-caveat)" }}>
        No quotes yet. Be the first to add one!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 gap-y-12 md:gap-y-16 mt-8 pb-20 md:pb-32">
      {quotes.map((q, i) => (
        <motion.div
          key={q.id}
          initial={{ opacity: 0, scale: 0.9, rotate: i % 2 === 0 ? 2 : -2 }}
          animate={{ opacity: 1, scale: 1, rotate: i % 2 === 0 ? -1.5 : 1 }}
          whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className={`${QUOTE_COLOR_CLASS_MAP[q.color] ?? q.color ?? "bg-white"} p-6 md:p-10 shadow-ambient relative flex flex-col justify-between min-h-[280px] md:aspect-square group cursor-default`}
          style={{ borderRadius: "0.2rem" }}
        >
          <div className={`absolute -top-3 left-1/2 w-16 md:w-20 h-5 md:h-6 bg-white/50 backdrop-blur-sm transform -translate-x-1/2 rounded-sm ${i % 2 === 0 ? '-rotate-2' : 'rotate-1'}`} />
          
          <div className="flex-1 flex items-center justify-center py-6">
            <p style={{ fontFamily: "var(--font-caveat)" }} className="text-2xl md:text-4xl text-[#322f22] leading-tight text-center relative z-10 w-full overflow-hidden break-words px-2">
              <span className="text-[#b31446] opacity-30 absolute -top-4 -left-4 text-5xl md:text-6xl pointer-events-none">"</span>
              {q.text}
              <span className="text-[#b31446] opacity-30 absolute -bottom-6 -right-2 text-5xl md:text-6xl pointer-events-none">"</span>
            </p>
          </div>
          
          <div className="mt-4 md:mt-8 border-t border-[rgba(50,47,34,0.1)] pt-4 overflow-hidden">
            <p style={{ fontFamily: "var(--font-vietnam)" }} className="font-black text-[#322f22] uppercase tracking-widest text-xs md:text-sm truncate">— {q.author}</p>
            <p style={{ fontFamily: "var(--font-vietnam)" }} className="text-[9px] md:text-[10px] uppercase font-bold text-[#b31446] mt-1 tracking-widest opacity-80 truncate">{q.context}</p>
          </div>

          <div className="absolute -bottom-3 -right-3 sm:opacity-0 group-hover:opacity-100 transition-opacity">
            <DeleteButton id={q.id} type="quote" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
