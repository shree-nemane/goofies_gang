"use client";

import { useState } from "react";
import { addEvidence } from "@/app/actions";

export function AddEvidenceForm() {
  const [isPending, setIsPending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    setErrorMsg("");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const res = await addEvidence(formData);
      
      if (res && res.error) {
        setErrorMsg(res.error);
      } else {
        form.reset();
        setIsOpen(false);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to upload. Please try again.");
    }
    
    setIsPending(false);
  }

  if (!isOpen) {
    return (
      <div 
        onClick={() => setIsOpen(true)}
        className="bg-[#00694c] p-8 md:p-10 shadow-[8px_8px_0px_#a8e6cf] border-4 border-[#322f22] relative max-w-2xl mx-auto -rotate-1 hover:rotate-1 hover:scale-[1.02] hover:-translate-y-2 transition-all cursor-pointer z-10 w-full mb-16 flex flex-col items-center group text-white"
      >
        <div className="absolute -top-4 left-1/2 w-24 h-8 bg-black/30 transform -translate-x-1/2 rounded-sm rotate-2" />
        <h3 className="text-3xl font-black mb-2 uppercase tracking-tighter" style={{ fontFamily: "var(--font-jakarta)" }}>MISTAKES WERE MADE?</h3>
        <p className="text-white/80 text-xl font-bold" style={{ fontFamily: "var(--font-caveat)" }}>Click here to add photographic evidence.</p>
        <div className="mt-6 bg-[#a8e6cf] text-[#00694c] px-8 py-3 uppercase font-black text-sm tracking-widest group-hover:bg-white transition-colors" style={{ fontFamily: "var(--font-vietnam)" }}>
          Upload Photo
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fdf6e3] border-4 border-[#322f22] p-8 shadow-[8px_8px_0px_#ff728d] relative max-w-2xl mx-auto z-10 w-full mb-16">
      <div className="absolute -top-4 -right-4 bg-[#a8e6cf] text-[#00694c] font-black uppercase tracking-widest px-4 py-1 rotate-6 border-2 border-white transform hover:scale-110 transition-transform">
        New!
      </div>
      <h2 style={{ fontFamily: "var(--font-jakarta)" }} className="text-3xl font-black mb-6 text-[#322f22] uppercase tracking-tighter">Submit Evidence</h2>
      
      {errorMsg && (
        <div style={{ fontFamily: "var(--font-vietnam)" }} className="mb-6 p-4 bg-[#ff728d]/20 border-2 border-[#ff728d] text-[#b31446] font-bold text-sm">
          {errorMsg}
        </div>
      )}

      <form id="add-evidence-form" onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label style={{ fontFamily: "var(--font-vietnam)" }} className="block text-sm font-bold text-[#b31446] uppercase tracking-wider mb-2">Upload Photo</label>
          <input 
            type="file" 
            name="image" 
            accept="image/*"
            required 
            style={{ fontFamily: "var(--font-vietnam)" }}
            className="w-full border-2 border-[#322f22] bg-white p-2 font-bold text-sm focus:outline-none focus:ring-4 focus:ring-[#ffe082] transition-shadow file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-bold file:bg-[#322f22] file:text-white file:uppercase file:tracking-wider hover:file:bg-[#ff728d] file:transition-colors file:cursor-pointer cursor-pointer"
          />
        </div>
        
        <div>
          <label style={{ fontFamily: "var(--font-vietnam)" }} className="block text-sm font-bold text-[#b31446] uppercase tracking-wider mb-2">Caption that explains everything AND nothing</label>
          <input 
            type="text" 
            name="caption" 
            required 
            style={{ fontFamily: "var(--font-vietnam)" }}
            className="w-full border-2 border-[#322f22] bg-white p-3 font-bold text-sm focus:outline-none focus:ring-4 focus:ring-[#ff728d] transition-shadow"
            placeholder="Mistakes were made."
          />
        </div>

        <div>
          <label style={{ fontFamily: "var(--font-vietnam)" }} className="block text-sm font-bold text-[#b31446] uppercase tracking-wider mb-2">Secret Group Code</label>
          <input 
            type="password" 
            name="secret" 
            required 
            style={{ fontFamily: "var(--font-vietnam)" }}
            className="w-full border-2 border-[#322f22] bg-white p-3 font-bold text-sm focus:outline-none focus:ring-4 focus:ring-[#a8e6cf] transition-shadow placeholder:text-gray-400"
            placeholder="••••••••"
          />
        </div>

        <div className="flex gap-4 mt-2">
          <button 
            type="submit" 
            disabled={isPending}
            style={{ fontFamily: "var(--font-vietnam)" }}
            className="flex-1 bg-[#322f22] text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-[#ffe082] hover:text-[#322f22] transition-all disabled:opacity-50 disabled:cursor-not-allowed text-center border-2 border-transparent hover:border-[#322f22]"
          >
            {isPending ? "Uploading..." : "Add to Locker"}
          </button>
          <button 
            type="button" 
            onClick={() => setIsOpen(false)}
            style={{ fontFamily: "var(--font-vietnam)" }}
            className="bg-white border-2 border-[#322f22] text-[#322f22] px-8 py-4 font-black uppercase tracking-widest hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
