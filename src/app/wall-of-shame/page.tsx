import { prisma } from "@/lib/prisma";
import { queryWithRetry } from "@/lib/db";
import { RoastFeed } from "@/components/RoastFeed";
import { RoastForm } from "@/components/RoastForm";
import { RoastLeaderboard } from "@/components/RoastLeaderboard";
import { getPaginationParams, getPaginationOffset, calculatePaginationMeta } from "@/lib/pagination";
import Link from "next/link";

export const revalidate = 60; // Revalidate every minute

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function RoastPage(props: PageProps) {
  const searchParams = await props.searchParams;
  const pageSize = 20;
  const { page } = getPaginationParams(searchParams, pageSize);
  const offset = getPaginationOffset(page, pageSize);

  // Get total count
  const total = await queryWithRetry(() => prisma.roast.count());

  // Get paginated roasts
  const roasts = await queryWithRetry(() => prisma.roast.findMany({
    orderBy: { createdAt: "asc" }, // Newest at the bottom like a chat feed
    take: pageSize,
    skip: offset,
    select: {
      id: true,
      target: true,
      author: true,
      message: true,
      burns: true,
      createdAt: true,
      imageUrl: true,
    },
  }));

  const pagination = calculatePaginationMeta(page, pageSize, total);

  const roastsWithHasImage = roasts.map(roast => ({
    ...roast,
    hasImage: roast.imageUrl !== null,
  }));

  return (
    <div className="w-full min-h-screen py-16 md:py-24 px-4 bg-[#fdf6e3]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px border-t border-dashed border-[#d8cdae] -z-10" />
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#322f22] bg-[#fdf6e3] inline-block px-4 md:px-8 tracking-tighter uppercase" style={{ fontFamily: "var(--font-jakarta)" }}>
            THE <span className="text-[#b31446]">BURN</span> UNIT
          </h1>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#b31446] hidden sm:block">
            🔥
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Main Feed Area */}
          <div className="flex-1 w-full flex flex-col gap-12">
            
            <RoastFeed roasts={roastsWithHasImage} />

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-4 flex-wrap mt-8">
              {pagination.hasPrevPage && (
                <Link
                  href={`/wall-of-shame?page=${page - 1}`}
                  className="px-4 py-2 bg-[#b31446] text-white rounded font-bold hover:bg-[#8c0f34] transition text-sm"
                >
                  ← Older
                </Link>
              )}
              
              <span className="text-[#322f22] font-semibold text-xs md:text-sm">
                Page {pagination.page} of {pagination.totalPages} ({pagination.total} roasts)
              </span>
              
              {pagination.hasNextPage && (
                <Link
                  href={`/wall-of-shame?page=${page + 1}`}
                  className="px-4 py-2 bg-[#b31446] text-white rounded font-bold hover:bg-[#8c0f34] transition text-sm"
                >
                  Newer →
                </Link>
              )}
            </div>

            {/* Form Area */}
            <div className="mt-8">
              <RoastForm />
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 flex-shrink-0 mt-12 lg:mt-0">
             <div className="bg-[#efe8d2] p-6 rounded-sm shadow-ambient mb-8 relative md:rotate-1">
               <div className="absolute top-2 right-4 text-4xl text-[#d8cdae] -rotate-12 opacity-50 z-0">
                 ↘
               </div>
               <h3 style={{ fontFamily: "var(--font-jakarta)" }} className="font-black text-xl mb-4 text-[#322f22] relative z-10 border-b border-[#ebdcb9] pb-2 uppercase">Roast Leaderboard</h3>
               
               <RoastLeaderboard roasts={roasts} />

               {/* Instruction */}
               <div style={{ fontFamily: "var(--font-vietnam)" }} className="w-full mt-2 text-center text-[10px] font-black uppercase text-[#322f22]/50 tracking-widest leading-relaxed">
                 +1 Burn for every Roast.<br/>+1 for every 🔥 Reaction.
               </div>
             </div>

             <div className="bg-[#ffe082] p-6 shadow-ambient md:-rotate-2">
               <div className="absolute -top-3 left-1/2 w-16 h-4 bg-white/40 transform -translate-x-1/2 rotate-1" />
               <h4 style={{ fontFamily: "var(--font-jakarta)" }} className="font-black text-xs uppercase tracking-widest text-[#322f22]/50 mb-4 border-b border-[#322f22]/10 pb-2">✎ Quick Tip</h4>
               <p style={{ fontFamily: "var(--font-caveat)" }} className="text-xl leading-snug text-[#322f22]">"Hit the little fire button on a roast to upvote it and push the target further up the leaderboard. Brutal."</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
