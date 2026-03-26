"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type Member } from "../data/members";

interface MemberCardProps {
  member: Member;
  rotation?: number;
}

export function MemberCard({ member, rotation = 0 }: MemberCardProps) {
  return (
    <Link href={`/members/${member.id}`} className="block relative z-10 w-full max-w-[320px] mx-auto group">
      <motion.div
        initial={{ rotate: rotation, scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-white p-4 pb-8 shadow-ambient cursor-pointer"
        style={{ borderRadius: "0.2rem" }}
      >
        {/* Sticky Tape at the top */}
        <div className="absolute -top-3 left-1/2 w-20 h-6 bg-[rgba(255,255,255,0.7)] backdrop-blur-sm transform -translate-x-1/2 -rotate-2 rounded-sm" />

        <div className="relative w-full aspect-square bg-[#efe8d2] mb-4 overflow-hidden rounded-sm group-hover:shadow-inner transition-shadow">
          <img 
            src={member.pfpImage || member.image}
            alt={member.name}
            className="w-full h-full object-cover filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
          />
          {/* subtle inside joke sticky note */}
          <div className="absolute bottom-2 right-2 bg-[#ff728d] text-white text-xs p-1 px-2 rotate-3 font-black shadow-sm transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            {member.insideJoke}
          </div>
        </div>

        <h3 className="text-3xl font-black text-[#322f22] mb-1 leading-none" style={{ fontFamily: "var(--font-jakarta)" }}>
          {member.name} <span className="text-[#b31446]">"{member.nickname}"</span>
        </h3>
        <div className="w-12 h-0.5 bg-[#b31446] opacity-50 my-2" />
        <p className="text-sm text-[#322f22]/80 leading-snug mb-4 h-[40px]">
          {member.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {member.traits.slice(0, 2).map((trait, i) => (
            <span 
              key={trait} 
              className={`text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded-sm ${i % 2 === 0 ? 'bg-[#ffe082] text-black' : 'bg-[#a8e6cf] text-[#00694c]'}`}
            >
              {trait}
            </span>
          ))}
        </div>

      </motion.div>
    </Link>
  );
}
