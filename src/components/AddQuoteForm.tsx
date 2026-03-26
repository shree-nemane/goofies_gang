"use client";

import { useState } from "react";
import { addQuote } from "@/app/actions";

export function AddQuoteForm() {
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
      const res = await addQuote(formData);
      
      if (res && res.error) {
        setErrorMsg(res.error);
      } else {
        form.reset();
        setIsOpen(false);
      }
    } catch (err) {
      setErrorMsg("Failed to pin. Try again.");
    }
    
    setIsPending(false);
  }

  if (!isOpen) {
    return (
      <div 
        onClick={() => setIsOpen(true)}
        className="bg-[#ffe082] p-8 md:p-10 shadow-[8px_8px_0px_#ff728d] border-4 border-[#322f22] relative max-w-2xl mx-auto rotate-1 hover:rotate-0 hover:scale-[1.02] hover:-translate-y-2 transition-all cursor-pointer z-10 w-full mb-12 flex flex-col items-center group"
      >
        <div className="absolute -top-4 left-1/2 w-24 h-8 bg-white/60 transform -translate-x-1/2 rounded-sm -rotate-2" />
        <h3 className="text-3xl font-black mb-2 text-[#322f22] uppercase tracking-tighter" style={{ fontFamily: "var(--font-jakarta)" }}>REMEMBER SOMETHING FUNNY?</h3>
        <p className="text-[#322f22]/80 text-xl font-bold" style={{ fontFamily: "var(--font-caveat)" }}>Click here to pin a new quote to the board.</p>
        <div className="mt-6 bg-[#322f22] text-white px-8 py-3 uppercase font-black text-sm tracking-widest group-hover:bg-[#ff728d] transition-colors" style={{ fontFamily: "var(--font-vietnam)" }}>
          Add Quote
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 shadow-[8px_8px_0px_#ffe082] border-4 border-[#322f22] relative max-w-2xl mx-auto rotate-1 md:-rotate-1 z-10 w-full mb-12">
      <div className="absolute -top-3 left-1/2 w-20 h-6 bg-[#ffe082] transform -translate-x-1/2 rounded-sm rotate-2 opacity-80" />
      <h2 style={{ fontFamily: "var(--font-jakarta)" }} className="text-3xl font-black mb-6 text-[#322f22] uppercase tracking-tighter">Drop a new quote</h2>
      
      {errorMsg && (
        <div style={{ fontFamily: "var(--font-vietnam)" }} className="mb-6 p-4 bg-[#ff728d]/20 border-2 border-[#ff728d] text-[#b31446] font-bold text-sm">
          {errorMsg}
        </div>
      )}

      <form id="add-quote-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label style={{ fontFamily: "var(--font-vietnam)" }} className="block text-sm font-bold text-[#b31446] uppercase tracking-wider mb-2">The Quote</label>
          <textarea 
            name="text" 
            required 
            style={{ fontFamily: "var(--font-caveat)" }}
            className="w-full border-2 border-[#322f22] bg-[#fdf6e3] p-4 text-2xl focus:outline-none focus:border-[#ff728d] caret-[#322f22] transition-colors resize-none"
            placeholder="I meant to do that..."
            rows={2}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label style={{ fontFamily: "var(--font-vietnam)" }} className="block text-sm font-bold text-[#b31446] uppercase tracking-wider mb-2">Author</label>
            <input 
              type="text" 
              name="author" 
              required 
              style={{ fontFamily: "var(--font-vietnam)" }}
              className="w-full border-2 border-[#322f22] bg-[#fdf6e3] p-3 font-bold text-sm focus:outline-none focus:border-[#ff728d] caret-[#322f22] transition-colors"
              placeholder="Marcus"
            />
          </div>
          <div>
            <label style={{ fontFamily: "var(--font-vietnam)" }} className="block text-sm font-bold text-[#b31446] uppercase tracking-wider mb-2">Context / Time</label>
            <input 
              type="text" 
              name="context" 
              required 
              style={{ fontFamily: "var(--font-vietnam)" }}
              className="w-full border-2 border-[#322f22] bg-[#fdf6e3] p-3 font-bold text-sm focus:outline-none focus:border-[#ff728d] caret-[#322f22] transition-colors"
              placeholder="Falling into the pool"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4 items-end sm:grid-cols-[1fr_auto]">
          <div className="w-full">
            <label style={{ fontFamily: "var(--font-vietnam)" }} className="block text-sm font-bold text-[#b31446] uppercase tracking-wider mb-2">Secret Group Code</label>
            <input 
              type="password" 
              name="secret" 
              required 
              style={{ fontFamily: "var(--font-vietnam)" }}
              className="w-full border-2 border-[#322f22] bg-[#fdf6e3] p-3 font-bold text-sm focus:outline-none focus:border-[#a8e6cf] caret-[#322f22] transition-colors"
              placeholder="••••••••"
            />
          </div>
          <div className="w-full sm:w-auto mt-2 sm:mt-0">
            <label style={{ fontFamily: "var(--font-vietnam)" }} className="block text-sm font-bold text-[#b31446] uppercase tracking-wider mb-2">Sticky Color</label>
            <div className="flex gap-4">
              <label className="w-8 h-8 rounded-full cursor-pointer border-2 border-[#322f22] hover:scale-110 transition-transform bg-white">
                <input type="radio" name="color" value="white" defaultChecked className="sr-only" />
              </label>
              <label className="w-8 h-8 rounded-full cursor-pointer border-2 border-[#322f22] hover:scale-110 transition-transform bg-red-400">
                <input type="radio" name="color" value="red" className="sr-only" />
              </label>
              <label className="w-8 h-8 rounded-full cursor-pointer border-2 border-[#322f22] hover:scale-110 transition-transform bg-blue-400">
                <input type="radio" name="color" value="blue" className="sr-only" />
              </label>
              <label className="w-8 h-8 rounded-full cursor-pointer border-2 border-[#322f22] hover:scale-110 transition-transform bg-yellow-300">
                <input type="radio" name="color" value="yellow" className="sr-only" />
              </label>
              <label className="w-8 h-8 rounded-full cursor-pointer border-2 border-[#322f22] hover:scale-110 transition-transform bg-green-300">
                <input type="radio" name="color" value="green" className="sr-only" />
              </label>
              <label className="w-8 h-8 rounded-full cursor-pointer border-2 border-[#322f22] hover:scale-110 transition-transform bg-purple-300">
                <input type="radio" name="color" value="purple" className="sr-only" />
              </label>
              <label className="w-8 h-8 rounded-full cursor-pointer border-2 border-[#322f22] hover:scale-110 transition-transform bg-pink-300">
                <input type="radio" name="color" value="pink" className="sr-only" />
              </label>
              <label className="w-8 h-8 rounded-full cursor-pointer border-2 border-[#322f22] hover:scale-110 transition-transform bg-slate-300">
                <input type="radio" name="color" value="slate" className="sr-only" />
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <button 
            type="submit" 
            disabled={isPending}
            style={{ fontFamily: "var(--font-vietnam)" }}
            className="flex-1 bg-[#322f22] text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-[#ff728d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-center"
          >
            {isPending ? "Pinning..." : "Pin Quote"}
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
