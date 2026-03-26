import { members } from "../../../data/members";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function MemberDetail({ params }: { params: Promise<{ id: string }> }) {
   const { id } = await params;
   const member = members.find((m) => m.id === id);

   if (!member) {
      return notFound();
   }

   // To determine theme colors based on member data
   const themePrimary = member.theme.primary;
   const themeText = member.theme.text;

   return (
      <div style={{ fontFamily: "var(--font-vietnam)" }} className="w-full min-h-screen bg-[#619582] relative overflow-hidden pb-32">
         {/* Background gradients and checks (Optimized to use fast radial-gradients instead of expensive blur-[100px]) */}
         <div className="absolute inset-0 bg-gradient-to-br from-[#1c5c49]/30 via-[#8bbda9]/40 to-[#45856b]/30 z-0 pointer-events-none" />
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(168,230,207,0.15)_0%,_transparent_70%)] pointer-events-none z-0" />
         <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(215,240,230,0.15)_0%,_transparent_70%)] pointer-events-none z-0" />

         {/* Subtle Checkered overlay (Optimized: Removed mix-blend-mode) */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] pointer-events-none z-0" />

         <div className="max-w-[70rem] mx-auto px-4 pt-32 relative z-10 flex flex-col gap-16">

            {/* Back Link */}
            <div className="self-start -mb-8 relative z-20">
               <Link href="/members" style={{ fontFamily: "var(--font-vietnam)" }} className="font-bold text-[#fdf6e3] hover:text-[#ff4081] transition-colors flex items-center gap-2">
                  <span>←</span> Back to The Crew
               </Link>
            </div>

            {/* TOP ROW: Polaroid & Dossier */}
            <div className="flex flex-col md:flex-row gap-12 lg:gap-8 items-start relative w-full justify-between">

               {/* Decorative sparkle */}
               <div className="absolute -left-20 top-1/2 opacity-80 hidden lg:block select-none -rotate-12">
                  <svg
                     viewBox="0 0 24 24"
                     className="w-20 h-20 text-[#e5f48f]"
                     fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M5.82704,13.0035 C5.89365,12.8536 6.10635,12.8536 6.17296,13.0035 L6.34297,13.375 C7.07036,14.8798 8.21624,16.143 9.6428,17.0131 L9.90768,17.1683 C10.0308,17.2376 10.0308,17.4148 9.90768,17.484 L9.6428,17.6393 C8.21624,18.5094 7.07036,19.7725 6.34297,21.2773 L6.17296,21.6489 C6.10635,21.7987 5.89365,21.7987 5.82704,21.6489 L5.65703,21.2773 C4.92964,19.7725 3.78376,18.5094 2.3572,17.6393 L2.09232,17.484 C1.96923,17.4148 1.96923,17.2376 2.09232,17.1683 L2.3572,17.0131 C3.78376,16.143 4.92964,14.8798 5.65703,13.375 C5.71623,13.2526 5.7717,13.128 5.82704,13.0035 Z" />
                     <path d="M14.4727,2.72991 C14.5893,2.46764 14.9615,2.46764 15.0781,2.72991 L15.3756,3.38009 C16.9063,6.1068 18.2301,7.6138 19.8041,8.82305 L20.2313,9.13951 C20.5295,9.35247 20.836,9.55505 21.1503,9.74673 C21.8292,10.1395 21.8292,10.4497 21.1503,10.8425 C20.7347,11.1028 20.1718,11.4924 20.1718,11.4924 C18.4357,12.7448 16.983,14.35 15.9094,16.2028 C15.5025,16.9466 15.0781,17.8593 15.0781,17.8593 C14.9615,18.1215 14.5893,18.1215 14.4727,17.8593 C14.0483,16.8185 13.6414,16.2028 13.6414,16.2028 C12.6445,14.4823 11.3206,12.9753 9.7466,11.7661 C8.71476,11.0341 7.93694,10.5708 7.93694,10.5708 C7.72154,10.4497 7.72154,10.1395 7.93694,10.0184 C8.71476,9.55505 9.31946,9.13951 9.31946,9.13951 C11.115,7.84441 12.5678,6.23914 13.6414,4.38643 C14.0483,3.64262 14.4727,2.72991 14.4727,2.72991 Z" />
                  </svg>
               </div>

               {/* Left Column: Large Polaroid */}
               <div className="w-full md:w-[45%] relative md:flex-shrink-0 z-20">
                  <div style={{ fontFamily: "var(--font-caveat)" }} className="absolute -top-3 right-4 bg-[#26dfb3] text-[#00694c] font-black font-semibold text-2xl px-4 py-2 rounded-full rotate-[4deg] z-30 shadow-md border-b-2 border-r-2 border-[#1ca383] selection:bg-transparent">
                     Certified Goof
                  </div>
                  <div className="bg-white p-4 shadow-xl rotate-[1deg] relative transition-transform hover:rotate-0 flex flex-col items-center">
                     <img
                        src={member.image.includes('placeholder') ? 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&q=80' : member.image}
                        alt={member.name}
                        loading="lazy" decoding="async"
                        className="w-full aspect-[4/5] object-cover rounded-[1px]"
                     />
                     <div className="w-full mt-4 flex items-center justify-start pb-2">
                        <h1 className="font-extrabold text-[22px] md:text-2xl text-[#322f22] tracking-tight relative inline-block" style={{ fontFamily: "var(--font-jakarta)" }}>
                           {member.nickname ? `${member.nickname}: ` : ''}{member.name}
                           <div className="absolute -bottom-1 left-0 w-[105%] h-2 bg-[#ff4081] -z-10" />
                        </h1>
                     </div>
                  </div>
               </div>

               {/* Right Column: Dossier & Info */}
               <div className="w-full md:w-[50%] flex flex-col gap-4 mt-8 md:mt-16 relative z-10">
                  {/* Tape for dossier */}
                  <div className="absolute -top-3 left-[20%] w-16 h-6 bg-white/80 transform rotate-1 z-20 shadow-sm rounded-sm" />

                  <div className="bg-[#ffe082] p-8 md:p-10 shadow-lg relative w-full shadow-ambient">
                     <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-[#322f22]">
                        <span style={{ fontFamily: "var(--font-jakarta)" }} className="text-2xl">✎</span> <span style={{ fontFamily: "var(--font-jakarta)" }}>The Dossier</span>
                     </h2>
                     <p style={{ fontFamily: "var(--font-vietnam)" }} className="leading-relaxed text-[#322f22] text-[16px]">
                        <span className="font-bold">{member.name}</span> {member.longDescription.replace(member.name, "")}
                     </p>
                  </div>

                  <div className="flex gap-4 w-full mt-2">
                     <div className="bg-[#fdf6e3] p-4 flex-1 shadow-md flex flex-col justify-center">
                        <div style={{ fontFamily: "var(--font-jakarta)" }} className="text-[10px] tracking-widest uppercase font-bold text-black/50 mb-1">Join Date</div>
                        <div style={{ fontFamily: "var(--font-vietnam)" }} className="font-black text-sm text-[#322f22]">Aug 14, 2019</div>
                     </div>
                     <div className="bg-[#fdf6e3] p-4 flex-1 shadow-md flex flex-col justify-center">
                        <div style={{ fontFamily: "var(--font-jakarta)" }} className="text-[10px] tracking-widest uppercase font-bold text-black/50 mb-1">Status</div>
                        <div style={{ fontFamily: "var(--font-vietnam)" }} className="font-black text-sm text-[#322f22]">{member.role}</div>
                     </div>
                  </div>
               </div>
            </div>

            {/* MIDDLE ROW: Story & Isms */}
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full mt-8 md:mt-2 items-start justify-between">

               {/* Story text */}
               <div className="w-full md:w-[60%] bg-white p-8 md:p-12 shadow-xl relative z-10 overflow-hidden">
                  <div className="absolute top-6 right-6 flex gap-2">
                     <div className="w-5 h-5 rounded-full bg-[#ffcce0]" />
                     <div className="w-5 h-5 rounded-full bg-[#b2f5ea]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black font-extrabold mb-8 text-[#322f22]" style={{ fontFamily: "var(--font-jakarta)" }}>
                     {member.coreMemories[0]?.title || `The ${member.name} Experience`}
                  </h2>
                  <div style={{ fontFamily: "var(--font-vietnam)" }} className="text-[#322f22] relative text-[15px] leading-loose space-y-6">
                     <p>It was 3 AM in Austin. Most of us were ready to call it a night, but {member.name} had that 'look' in her eyes. The look that said she found a 2-star rated food truck that only accepted crypto and bartering.</p>

                     {/* Inset polaroid inside the text box */}
                     <div className="md:float-right w-full md:w-[220px] md:-mr-4 md:ml-6 mb-4 mt-2 bg-white p-3 shadow-md rotate-[3deg] hover:rotate-0 transition-transform">
                        <img src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80" alt="Tacos" loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover" />
                        <div style={{ fontFamily: "var(--font-vietnam)" }} className="text-[8px] uppercase text-center mt-2 font-bold tracking-widest text-[#322f22]">Exhibit A: The evidence</div>
                     </div>

                     <p>We spent forty-five minutes convincing a guy named 'Slider' that we didn't have any Bitcoin, but we did have a slightly used frisbee and a half-eaten bag of gummy worms. {member.name} actually negotiated the deal. We got six tacos. Three of them were just cilantro. She ate them all anyway.</p>
                     <p>The next morning, we missed the flight. Worth it? {member.name} says yes. Our stomachs said "please call an ambulance."</p>
                  </div>
               </div>

               {/* Isms & secondary polaroid */}
               <div className="w-full md:w-[35%] flex flex-col items-center md:items-end gap-10 lg:pr-4 mt-8 md:mt-0 relative z-10">
                  <div className="bg-[#26dfb3] p-6 w-full shadow-lg relative -rotate-1">
                     <div className="absolute -top-3 left-1/2 w-16 h-6 bg-white/80 transform -translate-x-1/2 rotate-2 rounded-sm shadow-sm" />
                     <h3 className="font-extrabold text-xl mb-4 border-b-2 border-dashed border-[#00694c]/20 pb-2 text-[#00694c]" style={{ fontFamily: "var(--font-jakarta)" }}>
                        "The {member.firstName}-isms"
                     </h3>
                     <ul className="space-y-4">
                        {member.signatureLines.map((line, i) => (
                           <li key={i} style={{ fontFamily: "var(--font-caveat)" }} className="flex gap-3 text-[#00694c] font-bold text-lg">
                              <span className="text-xl -mt-1">★</span>
                              <span>"{line}"</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className="bg-white p-3 shadow-xl rotate-3 relative hover:rotate-0 transition-transform self-start md:self-auto ml-12 md:ml-0 md:-mr-8">
                     <img src={`/profile_snapshots/${member.id}/p1.jpeg`} alt="Scenery" loading="lazy" decoding="async" className="w-[200px] h-[140px] object-cover" />
                     <p style={{ fontFamily: "var(--font-vietnam)" }} className="mt-3 text-center font-bold text-xs text-[#322f22]">{member.firstName}, 2021</p>
                  </div>
               </div>
            </div>

            {/* BOTTOM ROW: Vault of Shhh! */}
            <div className="w-full relative mt-4">
               <div className="absolute -left-12 -top-12 opacity-80 rotate-[12deg] select-none pointer-events-none">
                  <svg
                     viewBox="0 0 24 24"
                     className="w-20 h-20 text-[#e5f48f]"
                     fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M5.82704,13.0035 C5.89365,12.8536 6.10635,12.8536 6.17296,13.0035 L6.34297,13.375 C7.07036,14.8798 8.21624,16.143 9.6428,17.0131 L9.90768,17.1683 C10.0308,17.2376 10.0308,17.4148 9.90768,17.484 L9.6428,17.6393 C8.21624,18.5094 7.07036,19.7725 6.34297,21.2773 L6.17296,21.6489 C6.10635,21.7987 5.89365,21.7987 5.82704,21.6489 L5.65703,21.2773 C4.92964,19.7725 3.78376,18.5094 2.3572,17.6393 L2.09232,17.484 C1.96923,17.4148 1.96923,17.2376 2.09232,17.1683 L2.3572,17.0131 C3.78376,16.143 4.92964,14.8798 5.65703,13.375 C5.71623,13.2526 5.7717,13.128 5.82704,13.0035 Z" />
                     <path d="M14.4727,2.72991 C14.5893,2.46764 14.9615,2.46764 15.0781,2.72991 L15.3756,3.38009 C16.9063,6.1068 18.2301,7.6138 19.8041,8.82305 L20.2313,9.13951 C20.5295,9.35247 20.836,9.55505 21.1503,9.74673 C21.8292,10.1395 21.8292,10.4497 21.1503,10.8425 C20.7347,11.1028 20.1718,11.4924 20.1718,11.4924 C18.4357,12.7448 16.983,14.35 15.9094,16.2028 C15.5025,16.9466 15.0781,17.8593 15.0781,17.8593 C14.9615,18.1215 14.5893,18.1215 14.4727,17.8593 C14.0483,16.8185 13.6414,16.2028 13.6414,16.2028 C12.6445,14.4823 11.3206,12.9753 9.7466,11.7661 C8.71476,11.0341 7.93694,10.5708 7.93694,10.5708 C7.72154,10.4497 7.72154,10.1395 7.93694,10.0184 C8.71476,9.55505 9.31946,9.13951 9.31946,9.13951 C11.115,7.84441 12.5678,6.23914 13.6414,4.38643 C14.0483,3.64262 14.4727,2.72991 14.4727,2.72991 Z" />
                  </svg>
               </div>

               <div className="bg-white/60 backdrop-blur-sm rounded-[2.5rem] p-10 lg:p-14 shadow-xl border border-white/40 relative">
                  <h2 className="text-4xl md:text-5xl font-black text-[#ff4081] text-center mb-10 drop-shadow-sm" style={{ fontFamily: "var(--font-jakarta)" }}>
                     The Vault of Shhh!
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                     <div className="bg-white rounded-[1.5rem] p-6 shadow-sm border-2 border-dashed border-gray-400 hover:-translate-y-2 transition-transform cursor-pointer">
                        <div className="text-[#ff4081] text-xl mb-3">🔒</div>
                        <h4 style={{ fontFamily: "var(--font-vietnam)" }} className="font-extrabold text-[#322f22] text-[15px] mb-2">The Blue Wig Incident</h4>
                        <p style={{ fontFamily: "var(--font-vietnam)" }} className="text-[13px] text-[#322f22]/70 leading-relaxed mt-2">Never ask about what happened at the 2020 New Year's Eve party in Chicago. Let's just say blue synthetic hair is hard to get out of upholstery.</p>
                     </div>
                     <div className="bg-white rounded-[1.5rem] p-6 shadow-sm border-2 border-dashed border-gray-400 mt-2 hover:-translate-y-2 transition-transform cursor-pointer">
                        <div className="text-[#ff4081] text-xl mb-3">📻</div>
                        <h4 style={{ fontFamily: "var(--font-vietnam)" }} className="font-extrabold text-[#322f22] text-[15px] mb-2">Ghost in the Rental</h4>
                        <p style={{ fontFamily: "var(--font-vietnam)" }} className="text-[13px] text-[#322f22]/70 leading-relaxed mt-2">Sarah convinced the entire group that our rental car was haunted because the radio kept switching to country music. It was just her phone auto-connecting.</p>
                     </div>
                     <div className="bg-white rounded-[1.5rem] p-6 shadow-sm border-2 border-dashed border-gray-400 mt-4 md:mt-0 hover:-translate-y-2 transition-transform cursor-pointer">
                        <div className="text-[#ff4081] text-xl mb-3">🍴</div>
                        <h4 style={{ fontFamily: "var(--font-vietnam)" }} className="font-extrabold text-[#322f22] text-[15px] mb-2">The 48-Taco Challenge</h4>
                        <p style={{ fontFamily: "var(--font-vietnam)" }} className="text-[13px] text-[#322f22]/70 leading-relaxed mt-2">She didn't win. But she didn't lose. We all lost that day.</p>
                     </div>
                  </div>
                  {/* Large heart in corner */}
                  <div className="absolute bottom-2 right-2 opacity-50 rotate-12 drop-shadow-xl select-none pointer-events-none">
                     <svg
                        viewBox="0 0 24 24"
                        className="w-14 h-14 text-[#ff4081]"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" />
                     </svg>
                  </div>
               </div>
            </div>

            {/* Snapshots of Chaos */}
            <div className="w-full mt-16 mb-8 relative">
               <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                  <h3 className="text-2xl md:text-3xl font-black text-[#322f22] relative inline-block tracking-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
                     Snapshots of Chaos
                     <div className="absolute -bottom-[6px] left-0 w-full h-[4px] bg-[#ff4081] rounded-full" />
                     {/* <div className="absolute -bottom-[4px] right-0 w-[40%] h-[4px] bg-[#ff4081] rounded-t-full" /> */}
                  </h3>
                  <Link href="/gallery" style={{ fontFamily: "var(--font-vietnam)" }} className="text-xs md:text-sm font-bold text-[#fdf6e3] hover:text-[#ff4081] hover:underline uppercase tracking-wide">
                     View full gallery →
                  </Link>
               </div>

               <div className="relative w-full max-w-3xl mx-auto h-[500px] mb-24">
                  {/* Polaroid 1 - Top Left */}
                  <div className="absolute top-0 left-[5%] md:left-[15%] bg-white p-3 shadow-xl rotate-[3deg] w-[260px] md:w-[320px] hover:rotate-0 hover:z-40 hover:scale-105 transition-all z-10 cursor-pointer">
                     <img src={`/profile_snapshots/${member.id}/1.jpg`} alt="Candid 1" loading="lazy" decoding="async" className="w-full aspect-square object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all" />
                  </div>
                  {/* Polaroid 2 - Top Right */}
                  <div className="absolute top-[30px] md:top-[20px] right-[5%] md:right-[5%] bg-white p-3 shadow-xl -rotate-[-2deg] w-[260px] md:w-[320px] hover:rotate-0 hover:z-40 hover:scale-105 transition-all z-20 cursor-pointer">
                     <img src={`/profile_snapshots/${member.id}/2.jpg`} alt="Candid 2" loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover" />
                  </div>
                  {/* Polaroid 3 - Bottom Left */}
                  <div className="absolute bottom-[-10px] md:bottom-[-40px] left-[10%] md:left-[15%] bg-white p-3 shadow-2xl -rotate-[5deg] w-[260px] md:w-[320px] hover:rotate-0 hover:z-40 hover:scale-105 transition-all z-30 cursor-pointer border-2 border-pink-400">
                     <img src={`/profile_snapshots/${member.id}/3.jpg`} alt="Candid 3" loading="lazy" decoding="async" className="w-full aspect-square object-cover" />
                  </div>
                  {/* Polaroid 4 - Bottom Right */}
                  <div className="absolute bottom-[20px] md:bottom-[0px] right-[10%] md:right-[10%] bg-white p-3 shadow-xl rotate-[4deg] w-[260px] md:w-[320px] hover:rotate-0 hover:z-40 hover:scale-105 transition-all z-20 cursor-pointer">
                     <img src={`/profile_snapshots/${member.id}/4.jpg`} alt="Candid 4" loading="lazy" decoding="async" className="w-full aspect-square object-cover" />
                  </div>
               </div>
            </div>

         </div>
      </div>
   );
}