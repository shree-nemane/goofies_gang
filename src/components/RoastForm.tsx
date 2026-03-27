"use client";

import { useState } from "react";
import { addRoast } from "@/app/actions";
import { Flame } from "lucide-react";

export function RoastForm() {
  const [isPending, setIsPending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    setErrorMsg("");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Client-side validation: 5MB limit
    const imageFile = formData.get("image") as File | null;
    if (imageFile && imageFile.size > 5 * 1024 * 1024) {
      setErrorMsg("File must be less than 5MB (Think of the server!)");
      setIsPending(false);
      return;
    }
    
    try {
      const res = await addRoast(formData);
      if (res && res.error) {
        setErrorMsg(res.error);
      } else {
        form.reset();
        setIsOpen(false);
      }
    } catch (err) {
      setErrorMsg("Failed to upload. Please try again.");
    }
    
    setIsPending(false);
  }

  if (!isOpen) {
    return (
      <div className="mt-8 bg-[#00694c] p-8 md:p-12 shadow-ambient shadow-2xl rounded-2xl md:rounded-[2rem] text-white overflow-hidden relative w-full">
        <div className="absolute inset-0 opacity-10 pointer-events-none flex flex-wrap gap-12 overflow-hidden items-center justify-center p-8">
          <Flame size={64} />
          <Flame size={120} />
          <Flame size={80} />
        </div>
        <h3 className="text-3xl font-black mb-4 relative z-10" style={{ fontFamily: "var(--font-jakarta)" }}>GOT SOME FRESH DIRT?</h3>
        <p className="text-white/80 mb-8 max-w-lg text-sm relative z-10">Upload your latest memories or roast your besties. Don't be shy, we're all friends here (kind of).</p>
        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
          <button onClick={() => setIsOpen(true)} className="bg-[#a8e6cf] text-[#00694c] px-6 py-4 rounded-full font-black uppercase text-sm tracking-widest hover:bg-white transition-colors">
            Start Roasting
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 bg-[#fdf6e3] border-4 border-[#322f22] p-8 md:p-12 shadow-[8px_8px_0px_#00694c] relative w-full mb-12">
      <h3 className="text-3xl font-black mb-6 text-[#322f22]" style={{ fontFamily: "var(--font-jakarta)" }}>SUBMIT YOUR ROAST</h3>
      
      {errorMsg && (
        <div className="mb-6 p-4 bg-[#ff728d]/20 border-2 border-[#ff728d] text-[#b31446] font-bold text-sm">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-bold text-[#b31446] uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-vietnam)" }}>Target (Who did it?)</label>
            <select name="target" required className="w-full border-2 border-[#322f22] bg-white p-3 font-bold text-sm focus:outline-none focus:ring-4 focus:ring-[#ffe082]">
              <option value="">Select a victim...</option>
              <option value="harshali">Harshali</option>
              <option value="sudnya">Sudnya</option>
              <option value="preeti">Preeti</option>
              <option value="mandar">Mandar</option>
              <option value="rahul">Rahul</option>
              <option value="aditya">Aditya</option>
              <option value="om-s">Om Sonawane</option>
              <option value="shubham">Shubham</option>
              <option value="om-b">Om Bhamare</option>
              <option value="shreedarshan">Shreedarshan</option>
              <option value="group">The Whole Group</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-[#b31446] uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-vietnam)" }}>Your Name</label>
            <input type="text" name="author" required placeholder="Don't hide" className="w-full border-2 border-[#322f22] bg-white p-3 font-bold text-sm focus:outline-none focus:ring-4 focus:ring-[#ffe082]" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-[#b31446] uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-vietnam)" }}>The Roast</label>
          <textarea name="message" required placeholder="Let them have it..." rows={3} className="w-full border-2 border-[#322f22] bg-white p-3 font-bold text-sm focus:outline-none focus:ring-4 focus:ring-[#ff728d] resize-none"></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-bold text-[#b31446] uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-vietnam)" }}>Photo Evidence (Optional)</label>
            <input type="file" name="image" accept="image/*" className="w-full border-2 border-[#322f22] bg-white p-2 font-bold text-sm focus:outline-none focus:ring-4 focus:ring-[#ffe082] file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-bold file:bg-[#322f22] file:text-white file:uppercase file:tracking-wider hover:file:bg-[#00694c] file:transition-colors file:cursor-pointer cursor-pointer" />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#b31446] uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-vietnam)" }}>Secret Group Code</label>
            <input type="password" name="secret" required placeholder="••••••••" className="w-full border-2 border-[#322f22] bg-white p-3 font-bold text-sm focus:outline-none focus:ring-4 focus:ring-[#a8e6cf]" />
          </div>
        </div>

        <div className="flex gap-4 mt-2">
          <button type="submit" disabled={isPending} className="flex-1 bg-[#b31446] text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-[#322f22] transition-colors disabled:opacity-50" style={{ fontFamily: "var(--font-vietnam)" }}>
            {isPending ? "Posting..." : "Post Roast"}
          </button>
          <button type="button" onClick={() => setIsOpen(false)} className="bg-white border-2 border-[#322f22] text-[#322f22] px-8 py-4 font-black uppercase tracking-widest hover:bg-gray-100 transition-colors" style={{ fontFamily: "var(--font-vietnam)" }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
