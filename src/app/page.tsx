import { HeroSection } from "../components/HeroSection";
import { IntroSection } from "../components/IntroSection";
import { GroupDynamics } from "../components/GroupDynamics";
import { MemberCard } from "../components/MemberCard";
import { members } from "../data/members";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden">
      <HeroSection />
      
      {/* Emotional Intro Paragraph */}
      <div className="w-full max-w-4xl mx-auto px-6 py-20 md:py-32 text-center relative">
        {/* Background dashed string - Hidden on mobile if it gets too messy */}
        <div className="hidden sm:block absolute top-1/2 left-4 right-4 h-0 border-t-2 border-dashed border-[#d8cdae] -z-10 bg-transparent" />
        
        {/* The memory card */}
        <div className="bg-[#efe8d2] inline-block px-6 py-8 md:px-10 md:py-10 shadow-ambient md:-rotate-2 relative max-w-3xl border border-[#ebdcb9] rounded-sm transform hover:rotate-0 transition-transform duration-500">
          {/* Top Tape */}
          <div className="absolute -top-4 left-1/2 w-24 md:w-32 h-6 md:h-8 bg-white/50 transform -translate-x-1/2 rotate-3 backdrop-blur-md rounded-sm shadow-sm" />
          
          <p style={{ fontFamily: "var(--font-caveat)" }} className="text-3xl md:text-5xl text-[#322f22] leading-[1.4] relative z-10">
            <span className="text-[#ff728d] absolute -top-4 -left-4 md:-left-8 text-6xl md:text-8xl opacity-40 font-serif pointer-events-none">“</span>
            We didn’t know we were making memories. We just knew we were having fun <br className="hidden sm:block"/>
            <span className="relative inline-block mt-2">
              <span className="relative z-10">(and occasionally destroying property).</span>
              {/* Marker Underline/Highlight */}
              <span className="absolute bottom-1 left-[-2%] w-[104%] h-3 md:h-5 bg-[#ffe082] -z-10 -rotate-1 opacity-90" />
            </span>
            <span className="text-[#b31446] absolute -bottom-8 -right-4 text-6xl md:text-8xl opacity-40 font-serif pointer-events-none">”</span>
          </p>
          
          {/* Small doodle stars */}
          <div className="absolute -bottom-6 -right-6 text-3xl md:text-4xl text-[#00694c] opacity-60 rotate-12 select-none">★</div>
          <div className="absolute -top-6 -left-8 text-2xl md:text-3xl text-[#b31446] opacity-40 -rotate-12 select-none">✧</div>
        </div>
      </div>

      <div className="w-full relative py-12 md:py-20 bg-gradient-to-b from-transparent to-[#f8f0dc]/50 backdrop-blur-3xl">
        <IntroSection />
      </div>

      <div className="w-full pt-12 pb-20 md:pb-32">
        <GroupDynamics />
      </div>

      {/* Member Preview Section */}
      <section className="w-full max-w-7xl mx-auto px-4 pb-20 md:pb-32 pt-12">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-6xl font-black text-[#322f22] mb-4" style={{ fontFamily: "var(--font-jakarta)" }}>
            The Crew
          </h2>
          <p style={{ fontFamily: "var(--font-caveat)" }} className="text-xl md:text-2xl text-[#00694c] italic max-w-2xl mx-auto px-4">
            A digital archive of the people who make common sense look like a superpower. Click to peek behind the photo.
          </p>
          <div 
            style={{ fontFamily: "var(--font-jakarta)" }} 
            className="inline-block bg-[#ffe082] px-4 py-1 rotate-2 shadow-sm font-bold text-xs md:text-sm uppercase md:ml-64 md:-mt-12 mt-4"
          >
            Certified Goofs
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mt-12">
          {members.slice(0, 3).map((member, index) => (
            <div 
              key={member.id} 
              className={`transform md:${index === 0 ? '-translate-y-4' : index === 1 ? 'translate-y-8' : 'translate-y-0'}`}
            >
              <MemberCard 
                member={member} 
                rotation={index === 0 ? -2 : index === 1 ? 1 : -1} 
              />
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}
