import { members } from "../../data/members";
import { MemberCard } from "../../components/MemberCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Crew",
  description: "Meet the GOOFIES: a digital archive of the people who make common sense look like a superpower. Profiles of the squad.",
};

export default function MembersPage() {
  return (
    <div className="w-full min-h-screen py-16 md:py-24 px-4 bg-[#fdf6e3] overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20 relative px-4">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-[#322f22] tracking-tighter uppercase leading-none" style={{ fontFamily: "var(--font-jakarta)" }}>
            The Crew
          </h1>
          <div className="w-full max-w-lg mx-auto h-2 bg-[#ff728d] mt-2 mb-6 transform -rotate-1 opacity-60 hidden sm:block" />
          <p style={{ fontFamily: "var(--font-caveat)" }} className="text-2xl md:text-3xl text-[#b31446] italic mt-4 md:mt-0 leading-tight">
            The people who make common sense look like a superpower.
          </p>
          <div className="absolute -top-4 right-0 sm:right-10 md:right-1/4 bg-[#ffe082] px-3 md:px-4 py-1 md:py-2 rotate-6 shadow-ambient z-10 scale-90 md:scale-100">
            <span style={{ fontFamily: "var(--font-jakarta)" }} className="font-bold text-xs md:text-sm uppercase tracking-wider text-[#322f22]">Certified Goofs</span>
            <div className="absolute top-0 left-1/2 w-6 md:w-8 h-3 md:h-4 bg-white/40 transform -translate-x-1/2 -mt-1.5 md:-mt-2 -rotate-2 rounded-sm" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 lg:gap-12 pb-24 md:pb-32 px-2 md:px-0">
          {members.map((member, index) => {
            // Predictable rotation sequence for organic feel
            const rotation = index % 3 === 0 ? -2 : index % 3 === 1 ? 1.5 : -1;
            const yOffset = index % 3 === 1 ? 'lg:translate-y-12' : '';
            
            return (
              <div key={member.id} className={`transform ${yOffset}`}>
                <MemberCard member={member} rotation={rotation} />
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto bg-[#efe8d2] p-8 md:p-12 shadow-[4px_4px_0px_#a8e6cf] md:shadow-[8px_8px_0px_#a8e6cf] border-2 md:border-4 border-[#322f22] rounded-sm text-center relative md:rotate-1 mb-16">
          <div className="absolute -top-3 md:-top-4 -left-3 md:-left-4 w-10 md:w-12 h-10 md:h-12 bg-[#ff728d] rounded-full flex items-center justify-center shadow-sm border-2 border-[#322f22]">
            <span className="text-lg md:text-xl">
              <svg
                     viewBox="0 0 24 24"
                     className="w-6 md:w-8 h-6 md:h-8 text-[#e5f48f]"
                     fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M5.82704,13.0035 C5.89365,12.8536 6.10635,12.8536 6.17296,13.0035 L6.34297,13.375 C7.07036,14.8798 8.21624,16.143 9.6428,17.0131 L9.90768,17.1683 C10.0308,17.2376 10.0308,17.4148 9.90768,17.484 L9.6428,17.484 C10.0308,17.2376 10.0308,17.4148 9.90768,17.484 L9.6428,17.6393 C8.21624,18.5094 7.07036,19.7725 6.34297,21.2773 L6.17296,21.6489 C6.10635,21.7987 5.89365,21.7987 5.82704,21.6489 L5.65703,21.2773 C4.92964,19.7725 3.78376,18.5094 2.3572,17.6393 L2.09232,17.484 C1.96923,17.4148 1.96923,17.2376 2.09232,17.1683 L2.3572,17.0131 C3.78376,16.143 4.92964,14.8798 5.65703,13.375 C5.71623,13.2526 5.7717,13.128 5.82704,13.0035 Z" />
                     <path d="M14.4727,2.72991 C14.5893,2.46764 14.9615,2.46764 15.0781,2.72991 L15.3756,3.38009 C16.9063,6.1068 18.2301,7.6138 19.8041,8.82305 L20.2313,9.13951 C20.5295,9.35247 20.836,9.55505 21.1503,9.74673 C21.8292,10.1395 21.8292,10.4497 21.1503,10.8425 C20.7347,11.1028 20.1718,11.4924 20.1718,11.4924 C18.4357,12.7448 16.983,14.35 15.9094,16.2028 C15.5025,16.9466 15.0781,17.8593 15.0781,17.8593 C14.9615,18.1215 14.5893,18.1215 14.4727,17.8593 C14.0483,16.8185 13.6414,16.2028 13.6414,16.2028 C12.6445,14.4823 11.3206,12.9753 9.7466,11.7661 C8.71476,11.0341 7.93694,10.5708 7.93694,10.5708 C7.72154,10.4497 7.72154,10.1395 7.93694,10.0184 C8.71476,9.55505 9.31946,9.13951 9.31946,9.13951 C11.115,7.84441 12.5678,6.23914 13.6414,4.38643 C14.0483,3.64262 14.4727,2.72991 14.4727,2.72991 Z" />
                  </svg>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 md:mb-6 text-[#322f22] uppercase tracking-tighter leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>What exactly is a Goofie?</h2>
          <p style={{ fontFamily: "var(--font-caveat)" }} className="text-[#322f22]/90 mb-8 text-2xl md:text-3xl leading-snug px-2">
            A Goofie is someone who embraces the absolute chaos of existing. We trip over flat surfaces, laugh at jokes no one else heard, and turn accidental disasters into core memories.
          </p>
          <div style={{ fontFamily: "var(--font-vietnam)" }} className="flex flex-wrap justify-center gap-3 md:gap-4 px-2">
            <span className="bg-[#ffe082] text-[#322f22] px-3 md:px-4 py-1.5 md:py-2 font-black text-xs md:text-sm uppercase tracking-widest border-2 border-[#322f22] md:rotate-2 shadow-[2px_2px_0px_#322f22]">Loud Laughers</span>
            <span className="bg-white text-[#322f22] px-3 md:px-4 py-1.5 md:py-2 font-black text-xs md:text-sm uppercase tracking-widest border-2 border-[#322f22] md:-rotate-1 shadow-[2px_2px_0px_#322f22]">Bad Idea Enthusiasts</span>
            <span className="bg-[#ff728d] text-white px-3 md:px-4 py-1.5 md:py-2 font-black text-xs md:text-sm uppercase tracking-widest border-2 border-[#322f22] md:rotate-3 shadow-[2px_2px_0px_#322f22]">Unfiltered</span>
          </div>
        </div>
      </div>
    </div>
  );
}
