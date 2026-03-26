"use client";

import { motion } from "framer-motion";
import { DeleteButton } from "@/components/DeleteButton";

type Evidence = {
  id: string;
  caption: string;
  height: string;
  rotation: number;
  createdAt: Date;
};

export function EvidenceGallery({ items }: { items: Evidence[] }) {
  if (items.length === 0) {
    return (
      <div className="text-center py-20 text-[#322f22]/50 text-2xl" style={{ fontFamily: "var(--font-caveat)" }}>
        No evidence found. The jury is waiting.
      </div>
    );
  }

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 relative">
      <div className="absolute top-0 bottom-0 left-1/3 w-32 bg-white/40 -z-10 -skew-x-12 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-1/4 w-48 bg-[#ffe082]/30 -z-10 rotate-3 pointer-events-none" />

      {items.map((img, i) => (
        <motion.div 
          key={img.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: (i % 3) * 0.1 }}
          className="break-inside-avoid relative w-full mb-8 transform hover:scale-105 hover:rotate-0 transition-all duration-300 z-10 cursor-zoom-in group"
          style={{ rotate: `${img.rotation}deg` }}
        >
          <div className="bg-white p-4 shadow-ambient">
            <div className={`absolute -top-3 left-1/2 w-16 h-5 transform -translate-x-1/2 rounded-sm opacity-90 ${i % 2 === 0 ? 'bg-[#ff728d] -rotate-2' : 'bg-[#a8e6cf] rotate-1'}`} />

            <div className={`w-full bg-gray-200 mb-4 ${img.height}`}>
              <img src={`/api/evidence/${img.id}/image`} alt={img.caption} loading="lazy" decoding="async" className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500" />
            </div>
            
            <p style={{ fontFamily: "var(--font-caveat)" }} className="text-xl text-center text-[#322f22] pb-2 break-words">
              {img.caption}
            </p>
            
            {i % 4 === 0 && (
              <div className="absolute -bottom-4 -left-4 bg-[#b31446] text-white font-black px-2 py-1 rotate-12 shadow-sm text-sm border-2 border-white">
                10/10
              </div>
            )}
            {i % 5 === 0 && (
              <div className="absolute -top-4 -right-2 bg-[#00694c] text-white rounded-full w-8 h-8 flex items-center justify-center -rotate-12 shadow-sm border border-white">
                ⭑
              </div>
            )}
            
            <DeleteButton id={img.id} type="evidence" className="absolute -bottom-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
