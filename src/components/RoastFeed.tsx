"use client";

import { motion } from "framer-motion";
import { incrementBurn } from "@/app/actions";
import { DeleteButton } from "./DeleteButton";
import { Flame } from "lucide-react";
import { useState } from "react";

type Roast = {
  id: string;
  target: string;
  author: string;
  message: string;
  burns: number;
  createdAt: Date;
  hasImage: boolean;
};

export function RoastFeed({ roasts }: { roasts: Roast[] }) {
  if (roasts.length === 0) {
    return (
      <div className="text-center py-12 text-[#322f22]/50 text-2xl" style={{ fontFamily: "var(--font-caveat)" }}>
        It's too quiet in here. Start roasting!
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12 w-full">
      {roasts.map((roast, index) => {
        const isEven = index % 2 === 0;
        
        // Cycle through 5 vibrant color palettes
        const palettes = [
          { bg: "bg-[#efe8d2]", text: "text-[#322f22]", avatar: "bg-[#efe8d2]", burn: "text-[#b31446]" },
          { bg: "bg-[#ff728d]", text: "text-white", avatar: "bg-white/30", burn: "text-white" },
          { bg: "bg-[#a8e6cf]", text: "text-[#00694c]", avatar: "bg-white/50", burn: "text-[#00694c]" },
          { bg: "bg-[#ffe082]", text: "text-[#322f22]", avatar: "bg-[#322f22]/10", burn: "text-[#b31446]" },
          { bg: "bg-indigo-300", text: "text-[#1e1b4b]", avatar: "bg-indigo-900/20", burn: "text-[#1e1b4b]" },
        ];
        
        const palette = palettes[index % palettes.length];
        
        const alignClass = isEven ? "self-start" : "self-end flex-row-reverse";
        const tailClass = isEven ? "rounded-r-2xl rounded-bl-2xl" : "rounded-l-2xl rounded-br-2xl";

        return (
          <motion.div 
            key={roast.id}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex gap-4 group relative ${alignClass} w-full max-w-xl`}
          >
            <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-black ${palette.avatar} ${palette.text} uppercase`}>
              {roast.author.charAt(0)}
            </div>
            
            <div className={`${palette.bg} p-4 sm:p-6 ${palette.text} ${tailClass} shadow-[4px_4px_0px_rgba(0,0,0,0.1)] w-full relative`}>
              <DeleteButton id={roast.id} type="roast" className={`absolute -top-3 ${isEven ? '-right-3' : '-left-3'} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              {roast.hasImage && (
                <div className="mb-4 rounded-xl overflow-hidden border-2 border-white/20">
                  <img src={`/api/roast/${roast.id}/image`} alt="Evidence" className="w-full h-auto object-cover max-h-64" loading="lazy" />
                </div>
              )}
              
              <p style={{ fontFamily: "var(--font-caveat)" }} className="text-2xl mb-4 leading-snug">"{roast.message}"</p>
              
              <div className="flex justify-between items-end border-t border-black/10 pt-3 mt-2">
                <div style={{ fontFamily: "var(--font-vietnam)" }} className="text-[10px] uppercase font-bold tracking-widest opacity-70">
                  Target: {roast.target} <br/> — {roast.author}
                </div>
                
                <BurnButton id={roast.id} initialBurns={roast.burns} color={palette.burn} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function BurnButton({ id, initialBurns, color }: { id: string, initialBurns: number, color: string }) {
  const [burns, setBurns] = useState(initialBurns);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleBurn() {
    setIsLoading(true);
    setError(null);
    const previousBurns = burns;
    
    // Optimistic update
    setBurns(b => b + 1);
    
    try {
      // Generate a session ID for this user (in production, use actual user ID/session)
      const userId = localStorage.getItem("userId") || generateUserId();
      const result = await incrementBurn(id, userId);
      
      if (!result.success) {
        // Rollback on failure
        setBurns(previousBurns);
        setError(result.error || "Failed to burn roast");
      } else if (result.data && typeof result.data === 'object' && 'burns' in result.data) {
        // Sync with server state
        setBurns((result.data as { burns: number }).burns);
      }
    } catch (err) {
      // Rollback on error
      setBurns(previousBurns);
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
      // Clear error after 3 seconds
      if (error) {
        setTimeout(() => setError(null), 3000);
      }
    }
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <button 
        onClick={handleBurn}
        disabled={isLoading}
        className={`flex items-center gap-1 font-black ${color} hover:scale-110 transition-transform disabled:opacity-50 disabled:cursor-not-allowed ${isLoading ? "scale-125" : ""}`}
        style={{ fontFamily: "var(--font-vietnam)" }}
        aria-label="Add a burn"
        title={error ? error : "Burn this roast"}
      >
        <Flame size={16} className={isLoading ? "fill-current animate-pulse" : ""} />
        <span>{burns}</span>
      </button>
      {error && (
        <span className="text-xs text-red-600 font-bold">{error}</span>
      )}
    </div>
  );
}

// Generate a simple session ID for user tracking
function generateUserId(): string {
  const id = `user-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  localStorage.setItem("userId", id);
  return id;
}
