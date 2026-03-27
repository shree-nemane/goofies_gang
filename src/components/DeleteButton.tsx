"use client";

import { useState } from "react";
import { deleteQuote, deleteEvidence, deleteRoast } from "@/app/actions";
import { X, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

export function DeleteButton({ id, type, className }: { id: string, type: "quote" | "evidence" | "roast", className?: string }) {
  const [modal, setModal] = useState<"closed" | "confirm" | "password">("closed");
  const [secret, setSecret] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Close modal and reset state
  function closeModal() {
    setModal("closed");
    setSecret("");
    setErrorMsg("");
  }

  // Step 1: Show confirmation dialog
  function showConfirmation() {
    setErrorMsg("");
    setModal("confirm");
  }

  // Step 2: From confirmation, show password prompt
  function proceedToPassword() {
    setErrorMsg("");
    setModal("password");
  }

  async function handleDelete() {
    if (!secret.trim()) {
      setErrorMsg("Secret code required");
      return;
    }
    setIsPending(true);
    setErrorMsg("");
    
    try {
      let res;
      if (type === "quote") {
        res = await deleteQuote(id, secret);
      } else if (type === "evidence") {
        res = await deleteEvidence(id, secret);
      } else {
        res = await deleteRoast(id, secret);
      }
      
      if (res?.error) {
        setErrorMsg(res.error);
      } else if (res?.success) {
        closeModal();
      }
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "An error occurred. Please try again.");
    } finally {
      setIsPending(false);
    }
  }

  if (modal === "closed") {
    return (
      <button 
        onClick={showConfirmation} 
        className={`bg-[#b31446] text-white hover:bg-[#ff728d] w-10 h-10 flex items-center justify-center rounded-sm border-2 border-[#322f22] shadow-[4px_4px_0px_#322f22] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#322f22] ${className}`}
        aria-label="Delete"
        title="Burn it!"
      >
        <Trash2 size={18} strokeWidth={3} />
      </button>
    );
  }

  if (modal === "confirm") {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black/40 backdrop-blur-[2px] p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          className="bg-[#fdf6e3] p-8 md:p-10 border-4 border-[#322f22] shadow-[8px_8px_0px_#ff728d] relative max-w-sm w-full z-10"
        >
          {/* Sticky Tape at the top */}
          <div className="absolute -top-4 left-1/2 w-24 h-8 bg-white/60 transform -translate-x-1/2 rounded-sm -rotate-2 border border-black/5" />
          
          <h2 style={{ fontFamily: "var(--font-jakarta)" }} className="text-2xl md:text-3xl font-black text-[#322f22] mb-4 uppercase tracking-tighter leading-none">
            Wait a sec!
          </h2>
          <p style={{ fontFamily: "var(--font-vietnam)" }} className="text-[#322f22]/80 font-bold mb-8 leading-snug">
            Are you sure you want to scrub this {type}? There's no "undo" button in the real world (or here).
          </p>
          
          <div className="flex flex-col gap-3">
            <button
              onClick={proceedToPassword}
              style={{ fontFamily: "var(--font-vietnam)" }}
              className="w-full bg-[#322f22] text-white px-6 py-4 font-black uppercase tracking-widest hover:bg-[#b31446] transition-colors text-center"
            >
              Yeah, Delete It
            </button>
            <button
              onClick={closeModal}
              style={{ fontFamily: "var(--font-vietnam)" }}
              className="w-full bg-white border-2 border-[#322f22] text-[#322f22] px-6 py-3 font-black uppercase tracking-widest hover:bg-gray-100 transition-colors text-center"
            >
              Nevermind
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (modal === "password") {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black/40 backdrop-blur-[2px] p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          className="bg-[#fdf6e3] p-8 md:p-10 border-4 border-[#322f22] shadow-[8px_8px_0px_#a8e6cf] relative max-w-sm w-full z-10"
        >
          {/* Sticky Tape at the top */}
          <div className="absolute -top-4 left-1/2 w-24 h-8 bg-[#ffe082]/60 transform -translate-x-1/2 rounded-sm rotate-1 border border-black/5" />
          
          <h2 style={{ fontFamily: "var(--font-jakarta)" }} className="text-2xl md:text-3xl font-black text-[#322f22] mb-4 uppercase tracking-tighter leading-none">
            Secret Code?
          </h2>
          
          <div className="mb-6">
            <label style={{ fontFamily: "var(--font-vietnam)" }} className="block text-[10px] font-black text-[#b31446] uppercase tracking-widest mb-2">Prove you're a goofy</label>
            <input 
              type="password" 
              value={secret}
              onChange={e => setSecret(e.target.value)}
              placeholder="••••••••"
              style={{ fontFamily: "var(--font-vietnam)" }}
              className="w-full border-2 border-[#322f22] bg-white p-4 font-bold focus:outline-none focus:border-[#ff728d] caret-[#322f22] transition-colors"
              onKeyDown={e => e.key === "Enter" && handleDelete()}
              autoFocus
            />
          </div>

          {errorMsg && (
            <div style={{ fontFamily: "var(--font-vietnam)" }} className="mb-6 p-4 bg-[#ff728d]/20 border-2 border-[#ff728d] text-[#b31446] font-bold text-xs uppercase tracking-tight">
              {errorMsg}
            </div>
          )}

          <div className="flex flex-col gap-3">
            <button
              onClick={handleDelete}
              disabled={isPending}
              style={{ fontFamily: "var(--font-vietnam)" }}
              className="w-full bg-[#322f22] text-white px-6 py-4 font-black uppercase tracking-widest hover:bg-[#b31446] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-center"
            >
              {isPending ? "Zapping..." : "Confirm Burn"}
            </button>
            <button
              onClick={closeModal}
              disabled={isPending}
              style={{ fontFamily: "var(--font-vietnam)" }}
              className="w-full bg-white border-2 border-[#322f22] text-[#322f22] px-6 py-3 font-black uppercase tracking-widest hover:bg-gray-100 transition-colors disabled:opacity-50 text-center"
            >
              Abort Mission
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
}
