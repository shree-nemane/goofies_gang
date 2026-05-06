import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact the Curator",
  description: "Send a message to the curator of this chaotic collection. We might read it, we might roast it.",
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen py-16 md:py-24 px-4 bg-[#fdf6e3] relative overflow-hidden">
      {/* Decorative chaotic elements */}
      <div className="absolute top-10 right-10 text-[#ff728d] opacity-20 text-9xl pointer-events-none rotate-12 -z-10 font-bold">
        ?
      </div>
      <div className="absolute bottom-10 left-10 text-[#00694c] opacity-20 text-9xl pointer-events-none -rotate-12 -z-10 font-bold">
        !
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] opacity-20 pointer-events-none -z-20" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div style={{ fontFamily: "var(--font-jakarta)" }} className="inline-block bg-[#b31446] text-white px-4 py-1 -rotate-2 mb-4 text-xs font-black uppercase tracking-[0.3em]">
            Official Channel
          </div>
          <h1 
            style={{ fontFamily: "var(--font-jakarta)" }} 
            className="text-5xl md:text-7xl font-black text-[#322f22] uppercase tracking-tighter leading-none mb-6"
          >
            Contact the <span className="text-[#b31446] underline decoration-wavy decoration-[#ff728d]/50">Curator</span>
          </h1>
          <p style={{ fontFamily: "var(--font-caveat)" }} className="text-2xl md:text-3xl text-[#322f22]/70 italic">
            Got a roast too hot for the public? A memory too blurry for the locker? 
            Or just want to complain about the lack of sanity? Drop a line.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 border-4 border-[#322f22] shadow-[12px_12px_0px_#322f22] relative">
          {/* Sticky Tape Decor */}
          <div className="absolute -top-6 left-10 w-24 h-10 bg-[#ffe082]/60 border border-black/5 -rotate-3" />
          <div className="absolute -bottom-6 right-10 w-24 h-10 bg-[#a8e6cf]/60 border border-black/5 rotate-2" />

          <form className="flex flex-col gap-8">
            <div className="space-y-2">
              <label 
                style={{ fontFamily: "var(--font-vietnam)" }} 
                className="text-[10px] font-black uppercase tracking-widest text-[#b31446]"
              >
                What should we call you? (Besides "Goofy")
              </label>
              <input 
                type="text" 
                placeholder="Goofie"
                style={{ fontFamily: "var(--font-vietnam)" }}
                className="w-full border-b-4 border-[#322f22] p-4 text-xl font-bold bg-transparent focus:outline-none focus:border-[#ff728d] transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <label 
                style={{ fontFamily: "var(--font-vietnam)" }} 
                className="text-[10px] font-black uppercase tracking-widest text-[#b31446]"
              >
                Your Direct Line (Email)
              </label>
              <input 
                type="email" 
                placeholder="Yoo@thegang.com"
                style={{ fontFamily: "var(--font-vietnam)" }}
                className="w-full border-b-4 border-[#322f22] p-4 text-xl font-bold bg-transparent focus:outline-none focus:border-[#ff728d] transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <label 
                style={{ fontFamily: "var(--font-vietnam)" }} 
                className="text-[10px] font-black uppercase tracking-widest text-[#b31446]"
              >
                What's the tea? / The Complaint / The Vibe
              </label>
              <textarea 
                rows={4}
                placeholder="I think the Wall of Shame needs more pink..."
                style={{ fontFamily: "var(--font-caveat)" }}
                className="w-full border-4 border-[#322f22] p-6 text-2xl bg-gray-50/50 focus:outline-none focus:bg-white transition-all resize-none"
                required
              />
            </div>

            <button 
              type="submit"
              style={{ fontFamily: "var(--font-jakarta)" }}
              className="mt-4 bg-[#322f22] text-white px-8 py-6 text-xl font-black uppercase tracking-widest hover:bg-[#b31446] transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              Send it to the Abyss
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-[#d8cdae] border-dashed">
             <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                  <span style={{ fontFamily: "var(--font-vietnam)" }} className="block text-[10px] font-black uppercase tracking-tighter text-[#322f22]/50 italic">Status: Always Listening (Probably)</span>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#ff728d] rounded-full border-2 border-[#322f22] flex items-center justify-center font-bold text-white -rotate-12">G</div>
                  <div className="w-10 h-10 bg-[#a8e6cf] rounded-full border-2 border-[#322f22] flex items-center justify-center font-bold text-[#00694c] rotate-6">A</div>
                  <div className="w-10 h-10 bg-[#ffe082] rounded-full border-2 border-[#322f22] flex items-center justify-center font-bold text-[#322f22] -rotate-3">N</div>
                  <div className="w-10 h-10 bg-indigo-300 rounded-full border-2 border-[#322f22] flex items-center justify-center font-bold text-[#1e1b4b] rotate-12">G</div>
                </div>
             </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p style={{ fontFamily: "var(--font-caveat)" }} className="text-xl text-[#322f22]/60">
            * We usually respond in 3-5 business eons. Patience is a virtue, chaos is a lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
}
