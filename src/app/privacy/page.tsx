import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Scribbles",
  description: "Our very serious (not really) privacy policy. We promise not to sell your embarrassing stories... yet.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full min-h-screen py-24 px-4 bg-[#fdf6e3] overflow-hidden relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="self-start mb-12 relative z-20">
          <Link href="/" style={{ fontFamily: "var(--font-vietnam)" }} className="font-bold text-[#b31446] hover:text-[#ff4081] transition-colors flex items-center gap-2">
            <span className="text-xl">←</span> Back Home
          </Link>
        </div>

        <div className="text-center mb-16 relative">
          <h1 className="text-5xl md:text-7xl font-black text-[#322f22] tracking-tighter" style={{ fontFamily: "var(--font-jakarta)" }}>
            Privacy Policy
          </h1>
          <div className="w-full max-w-sm mx-auto h-2 bg-[#ff728d] mt-2 mb-6 transform rotate-1 opacity-60" />
          <p style={{ fontFamily: "var(--font-caveat)" }} className="text-3xl text-[#b31446] italic">
            The serious stuff. (We promise not to sell your embarrassing stories... yet.)
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-[12px_12px_0px_#ffe082] border-4 border-[#322f22] relative rotate-[1deg] mb-16">
          <div className="absolute -top-6 right-10 md:right-20 bg-[#a8e6cf] px-4 py-2 rotate-6 shadow-sm border-2 border-[#322f22]">
            <span style={{ fontFamily: "var(--font-jakarta)" }} className="font-black text-xs md:text-sm uppercase tracking-widest text-[#00694c]">Last Updated: Today</span>
            <div className="absolute top-0 right-1/2 w-8 h-4 bg-white/40 transform translate-x-1/2 -mt-2 -rotate-2 rounded-sm" />
          </div>

          <div className="space-y-8" style={{ fontFamily: "var(--font-vietnam)" }}>
            <section className="space-y-4 group">
              <h2 className="text-2xl md:text-3xl font-black text-[#322f22] border-b-2 border-dashed border-[#ff728d] pb-2 inline-block transition-colors group-hover:border-[#322f22]">1. The "No Data" Guarantee</h2>
              <p className="text-[#322f22]/80 leading-relaxed text-lg">
                Look, we're just a bunch of chaotic friends putting our inside jokes on the internet. We aren't collecting your data. We wouldn't even know what to do with it if we had it. Does it go in a spreadsheet? A jar? We don't know, and we honestly don't want to find out.
              </p>
            </section>

            <section className="space-y-4 group">
              <h2 className="text-2xl md:text-3xl font-black text-[#322f22] border-b-2 border-dashed border-[#26dfb3] pb-2 inline-block transition-colors group-hover:border-[#322f22]">2. Cookie Policy</h2>
              <p className="text-[#322f22]/80 leading-relaxed text-lg mb-2">
                The only cookies we acknowledge are:
              </p>
              <ul className="list-disc pl-6 text-[#322f22]/80 space-y-2 text-lg font-medium">
                <li>Oreo double-stuffed</li>
                <li>Those soft-baked chocolate chip ones</li>
                <li>The weird peanut butter ones Marcus sometimes brings</li>
              </ul>
              <p className="text-[#322f22]/80 leading-relaxed text-lg mt-2">
                We're not tracking you. We can barely keep track of where we parked the rental car.
              </p>
            </section>

            <section className="space-y-4 group">
              <h2 className="text-2xl md:text-3xl font-black text-[#322f22] border-b-2 border-dashed border-[#ffbf00] pb-2 inline-block transition-colors group-hover:border-[#322f22]">3. Third-Party Sharing</h2>
              <p className="text-[#322f22]/80 leading-relaxed text-lg">
                If the FBI asks, we are just a mirage. We don't share anything with anyone, except maybe fries when we're pretending not to be hungry but then eat half of someone else's order.
              </p>
            </section>

            <section className="space-y-4 group">
              <h2 className="text-2xl md:text-3xl font-black text-[#322f22] border-b-2 border-dashed border-[#ff4081] pb-2 inline-block transition-colors group-hover:border-[#322f22]">4. Your Rights</h2>
              <p className="text-[#322f22]/80 leading-relaxed text-lg">
                You have the right to remain silly. You have the right to look at these embarrassing photos and judge us. You do NOT have the right to demand we redesign the website to be "minimalist". That's just offensive.
              </p>
            </section>

            <div className="bg-[#fdf6e3] p-6 mt-8 border-l-8 border-[#322f22] -rotate-1 shadow-md hover:rotate-0 transition-transform">
              <p style={{ fontFamily: "var(--font-caveat)" }} className="text-2xl md:text-3xl text-[#b31446] font-bold leading-snug">
                Questions? Concerns? Want to compliment our typography? Reach out to <span className="underline decoration-wavy decoration-[#ff728d]">literally.no.one@goofies.com</span>.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Decorative background elements - positioned behind the content */}
      <div className="absolute top-20 left-10 text-8xl text-[#ffcce0] opacity-40 rotate-[30deg] z-0 select-none pointer-events-none font-black" style={{ fontFamily: "var(--font-jakarta)" }}>?</div>
      <div className="absolute bottom-40 right-10 text-9xl text-[#b2f5ea] opacity-40 -rotate-[15deg] z-0 select-none pointer-events-none font-black" style={{ fontFamily: "var(--font-jakarta)" }}>!</div>
      <div className="absolute top-1/2 left-5 text-7xl text-[#ffe082] opacity-40 rotate-[45deg] z-0 select-none pointer-events-none font-black" style={{ fontFamily: "var(--font-jakarta)" }}>*</div>
      <div className="absolute top-1/3 right-12 text-7xl text-[#ffcce0] opacity-40 -rotate-[20deg] z-0 select-none pointer-events-none font-black" style={{ fontFamily: "var(--font-jakarta)" }}>&</div>
      
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] pointer-events-none z-0" />
    </div>
  );
}
