import { members } from "../../../data/members";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function MemberDetail({ params }: { params: Promise<{ id: string }> }) {
   const { id } = await params;
   const member = members.find((m) => m.id === id);

   if (!member) {
      return notFound();
   }

   const themePrimary = member.theme.primary;
   const themeText = member.theme.text;

   return (
      <div style={{ fontFamily: "var(--font-vietnam)" }} className="w-full min-h-screen bg-[#619582] relative overflow-x-hidden pb-16 md:pb-32">
         {/* Background gradients */}
         <div className="absolute inset-0 bg-gradient-to-br from-[#1c5c49]/30 via-[#8bbda9]/40 to-[#45856b]/30 z-0 pointer-events-none" />
         <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[radial-gradient(circle_at_center,_rgba(168,230,207,0.15)_0%,_transparent_70%)] pointer-events-none z-0" />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] pointer-events-none z-0" />

         <div className="max-w-[70rem] mx-auto px-4 pt-24 md:pt-32 relative z-10 flex flex-col gap-12 md:gap-16">

            {/* Back Link */}
            <div className="self-start relative z-20">
               <Link href="/members" className="font-bold text-[#fdf6e3] hover:text-[#ff4081] transition-colors flex items-center gap-2 text-sm md:text-base">
                  <span>←</span> Back to The Crew
               </Link>
            </div>

            {/* TOP ROW: Polaroid & Dossier */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-8 items-start relative w-full justify-between">
               
               {/* Left Column: Large Polaroid */}
               <div className="w-full md:w-[45%] relative md:flex-shrink-0 z-20">
                  <div style={{ fontFamily: "var(--font-caveat)" }} className="absolute -top-4 right-4 bg-[#26dfb3] text-[#00694c] font-black font-semibold text-xl md:text-2xl px-4 py-2 rounded-full rotate-[4deg] z-30 shadow-md border-b-2 border-r-2 border-[#1ca383]">
                     Certified Goof
                  </div>
                  <div className="bg-white p-3 md:p-4 shadow-xl rotate-[1deg] relative transition-transform hover:rotate-0 flex flex-col items-center">
                     <img
                        src={member.image.includes('placeholder') ? 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&q=80' : member.image}
                        alt={member.name}
                        className="w-full aspect-[4/5] object-cover rounded-[1px]"
                     />
                     <div className="w-full mt-4 flex items-center justify-start pb-2">
                        <h1 className="font-extrabold text-xl md:text-2xl text-[#322f22] tracking-tight relative inline-block leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
                           {member.nickname ? `${member.nickname}: ` : ''}{member.name}
                           <div className="absolute -bottom-1 left-0 w-[105%] h-2 bg-[#ff4081] -z-10" />
                        </h1>
                     </div>
                  </div>
               </div>

               {/* Right Column: Dossier & Info */}
               <div className="w-full md:w-[50%] flex flex-col gap-4 mt-4 md:mt-16 relative z-10">
                  <div className="absolute -top-3 left-[20%] w-16 h-6 bg-white/80 transform rotate-1 z-20 shadow-sm rounded-sm hidden md:block" />
                  <div className="bg-[#ffe082] p-6 md:p-10 shadow-lg relative w-full">
                     <h2 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2 text-[#322f22]">
                        <span style={{ fontFamily: "var(--font-jakarta)" }}>✎</span> <span style={{ fontFamily: "var(--font-jakarta)" }}>The Dossier</span>
                     </h2>
                     <p style={{ fontFamily: "var(--font-vietnam)" }} className="leading-relaxed text-[#322f22] text-sm md:text-base">
                        <span className="font-bold">{member.name}</span> {member.longDescription.replace(member.name, "")}
                     </p>
                  </div>

                  <div className="flex gap-3 md:gap-4 w-full">
                     <div className="bg-[#fdf6e3] p-3 md:p-4 flex-1 shadow-md flex flex-col justify-center">
                        <div style={{ fontFamily: "var(--font-jakarta)" }} className="text-[8px] md:text-[10px] tracking-widest uppercase font-bold text-black/50 mb-1">Join Date</div>
                        <div style={{ fontFamily: "var(--font-vietnam)" }} className="font-black text-xs md:text-sm text-[#322f22]">Aug 2019</div>
                     </div>
                     <div className="bg-[#fdf6e3] p-3 md:p-4 flex-1 shadow-md flex flex-col justify-center">
                        <div style={{ fontFamily: "var(--font-jakarta)" }} className="text-[8px] md:text-[10px] tracking-widest uppercase font-bold text-black/50 mb-1">Status</div>
                        <div style={{ fontFamily: "var(--font-vietnam)" }} className="font-black text-xs md:text-sm text-[#322f22]">{member.role}</div>
                     </div>
                  </div>
               </div>
            </div>

            {/* MIDDLE ROW: Story & Isms */}
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full mt-4 md:mt-2 items-start justify-between">
               <div className="w-full md:w-[60%] bg-white p-6 md:p-12 shadow-xl relative z-10 overflow-hidden">
                  <h2 className="text-xl md:text-3xl font-black mb-6 md:mb-8 text-[#322f22]" style={{ fontFamily: "var(--font-jakarta)" }}>
                     {member.coreMemories[0]?.title || `The ${member.name} Experience`}
                  </h2>
                  <div style={{ fontFamily: "var(--font-vietnam)" }} className="text-[#322f22] relative text-sm md:text-[15px] leading-relaxed md:leading-loose space-y-4 md:space-y-6">
                     <p>It was 3 AM in Austin. {member.name} found a food truck that only accepted bartering. We traded a used frisbee and gummy worms for six cilantro tacos.</p>
                     
                     <div className="md:float-right w-full md:w-[220px] md:-mr-4 md:ml-6 my-4 bg-white p-3 shadow-md rotate-[3deg] hover:rotate-0 transition-transform">
                        <img src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80" alt="Evidence" className="w-full aspect-video md:aspect-[4/3] object-cover" />
                        <div className="text-[8px] uppercase text-center mt-2 font-bold tracking-widest text-[#322f22]">Exhibit A</div>
                     </div>
                     <p>The next morning we missed our flight. {member.name} says it was worth it. Our stomachs disagreed.</p>
                  </div>
               </div>

               <div className="w-full md:w-[35%] flex flex-col items-center md:items-end gap-8 relative z-10">
                  <div className="bg-[#26dfb3] p-6 w-full shadow-lg relative -rotate-1">
                     <h3 className="font-extrabold text-lg md:text-xl mb-4 text-[#00694c]" style={{ fontFamily: "var(--font-jakarta)" }}>
                        "The {member.firstName}-isms"
                     </h3>
                     <ul className="space-y-3">
                        {member.signatureLines.map((line, i) => (
                           <li key={i} style={{ fontFamily: "var(--font-caveat)" }} className="flex gap-2 text-[#00694c] font-bold text-lg md:text-xl leading-snug">
                              <span>★</span> "{line}"
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>

            {/* BOTTOM ROW: Vault of Shhh! */}
            <div className="w-full relative">
               <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 md:p-14 shadow-xl border border-white/40">
                  <h2 className="text-3xl md:text-5xl font-black text-[#ff4081] text-center mb-8 md:mb-10" style={{ fontFamily: "var(--font-jakarta)" }}>
                     The Vault of Shhh!
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-dashed border-gray-400">
                        <div className="text-xl mb-2">🔒</div>
                        <h4 className="font-extrabold text-sm mb-1 uppercase tracking-tighter">The Blue Wig Incident</h4>
                        <p className="text-xs text-[#322f22]/70 leading-relaxed">Let's just say blue synthetic hair is hard to get out of upholstery.</p>
                     </div>
                     <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-dashed border-gray-400">
                        <div className="text-xl mb-2">📻</div>
                        <h4 className="font-extrabold text-sm mb-1 uppercase tracking-tighter">Ghost in the Rental</h4>
                        <p className="text-xs text-[#322f22]/70 leading-relaxed">Sarah thought the car was haunted. It was just her phone auto-connecting.</p>
                     </div>
                     <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-dashed border-gray-400">
                        <div className="text-xl mb-2">🍴</div>
                        <h4 className="font-extrabold text-sm mb-1 uppercase tracking-tighter">48-Taco Challenge</h4>
                        <p className="text-xs text-[#322f22]/70 leading-relaxed">She didn't win. But she didn't lose. We all lost that day.</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Snapshots of Chaos */}
            <div className="w-full mt-8 md:mt-16">
               <div className="flex justify-between items-end mb-8 md:mb-12">
                  <h3 className="text-xl md:text-3xl font-black text-[#322f22] relative tracking-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
                     Snapshots of Chaos
                     <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#ff4081] rounded-full" />
                  </h3>
                  <Link href="/gallery" className="text-[10px] md:text-sm font-bold text-[#fdf6e3] hover:text-[#ff4081] uppercase tracking-wide">
                     Full Gallery →
                  </Link>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pb-12">
                  {[1, 2, 3, 4].map((num) => (
                     <div 
                        key={num} 
                        className="bg-white p-3 shadow-lg transition-all hover:scale-105 cursor-pointer"
                        style={{ rotate: num % 2 === 0 ? '2deg' : '-2deg' }}
                     >
                        <img src={`/profile_snapshots/${member.id}/${num}.jpg`} alt={`Candid ${num}`} className="w-full aspect-[4/3] object-cover" />
                     </div>
                  ))}
               </div>
            </div>

         </div>
      </div>
   );
}