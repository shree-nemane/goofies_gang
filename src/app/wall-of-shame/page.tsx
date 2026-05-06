import { prisma } from "@/lib/prisma";
import { queryWithRetry } from "@/lib/db";
import { RoastFeed } from "@/components/RoastFeed";
import { RoastForm } from "@/components/RoastForm";
import { RoastLeaderboard } from "@/components/RoastLeaderboard";
import { getPaginationParams, getPaginationOffset, calculatePaginationMeta } from "@/lib/pagination";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Burn Unit",
  description: "A chronological feed of roasts and burning insults between friends. Vote for your favorite burns and see who tops the leaderboard.",
};

export const revalidate = 60; // Revalidate every minute

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function RoastPage(props: PageProps) {
  const searchParams = await props.searchParams;
  const pageSize = 20;
  const { page } = getPaginationParams(searchParams, pageSize);
  const offset = getPaginationOffset(page, pageSize);

  // Get total count and roasts in parallel
  const [total, roasts, leaderboardData] = await Promise.all([
    queryWithRetry(() => prisma.roast.count()),
    queryWithRetry(() => prisma.roast.findMany({
      orderBy: { createdAt: "desc" },
      take: pageSize,
      skip: offset,
      select: {
        id: true,
        target: true,
        author: true,
        message: true,
        burns: true,
        createdAt: true,
      },
    })),
    // Get leaderboard data - aggregate burns by target across all roasts
    queryWithRetry(() => prisma.roast.groupBy({
      by: ['target'],
      _sum: {
        burns: true,
      },
      _count: {
        _all: true,
      },
    }))
  ]);

  // Get image existence in a separate query (still needs the IDs from the previous step)
  const roastsWithImages = await queryWithRetry(() => prisma.roast.findMany({
    where: {
      id: { in: roasts.map(r => r.id) },
      imageData: { not: null },
    },
    select: { id: true },
  }));

  const rankedLeaderboardData = leaderboardData
    .map(entry => ({
      ...entry,
      totalBurns: (entry._sum.burns || 0) + entry._count._all,
    }))
    .sort((a, b) => b.totalBurns - a.totalBurns)
    .slice(0, 5)
    .map(({ totalBurns, ...entry }) => entry);

  const imageIds = new Set(roastsWithImages.map(r => r.id));

  const pagination = calculatePaginationMeta(page, pageSize, total);

  const roastsWithHasImage = roasts.map(roast => ({
    ...roast,
    hasImage: imageIds.has(roast.id),
  }));

  return (
    <div className="w-full min-h-screen py-16 md:py-24 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px border-t border-dashed border-[#d8cdae] -z-10" />
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-on-surface bg-surface inline-block px-4 md:px-8 tracking-tighter uppercase" style={{ fontFamily: "var(--font-jakarta)" }}>
            THE <span className="text-primary">BURN</span> UNIT
          </h1>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-primary hidden sm:block">
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
                  className="px-4 py-2 bg-primary text-white rounded font-bold hover:bg-[#8c0f34] transition text-sm"
                >
                  ← Older
                </Link>
              )}
              
              <span className="text-on-surface font-semibold text-xs md:text-sm">
                Page {pagination.page} of {pagination.totalPages} ({pagination.total} roasts)
              </span>
              
              {pagination.hasNextPage && (
                <Link
                  href={`/wall-of-shame?page=${page + 1}`}
                  className="px-4 py-2 bg-primary text-white rounded font-bold hover:bg-[#8c0f34] transition text-sm"
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
          <div className="w-full lg:w-80 shrink-0 mt-12 lg:mt-0">
             <div className="bg-surface-container p-6 rounded-sm shadow-ambient mb-8 relative md:rotate-1">
               <div className="absolute top-2 right-4 text-4xl text-[#d8cdae] -rotate-12 opacity-50 z-0">
                 ↘
               </div>
               <h3 style={{ fontFamily: "var(--font-jakarta)" }} className="font-black text-xl mb-4 text-on-surface relative z-10 border-b border-surface-dim pb-2 uppercase">Roast Leaderboard</h3>
               
               <RoastLeaderboard leaderboardData={rankedLeaderboardData} />

               {/* Instruction */}
               <div style={{ fontFamily: "var(--font-vietnam)" }} className="w-full mt-2 text-center text-[10px] font-black uppercase text-on-surface/50 tracking-widest leading-relaxed">
                 +1 Burn for every Roast.<br/>+1 for every 🔥 Reaction.
               </div>
             </div>

             <div className="bg-secondary-container p-6 shadow-ambient md:-rotate-2">
               <div className="absolute -top-3 left-1/2 w-16 h-4 bg-white/40 transform -translate-x-1/2 rotate-1" />
               <h4 style={{ fontFamily: "var(--font-jakarta)" }} className="font-black text-xs uppercase tracking-widest text-on-surface/50 mb-4 border-b border-on-surface/10 pb-2">✎ Quick Tip</h4>
               <p style={{ fontFamily: "var(--font-caveat)" }} className="text-xl leading-snug text-on-surface">"Hit the little fire button on a roast to upvote it and push the target further up the leaderboard. Brutal."</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
