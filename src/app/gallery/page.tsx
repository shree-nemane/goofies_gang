import { prisma } from "@/lib/prisma";
import { queryWithRetry } from "@/lib/db";
import { EvidenceGallery } from "@/components/EvidenceGallery";
import { AddEvidenceForm } from "@/components/AddEvidenceForm";
import { getPaginationParams, getPaginationOffset, calculatePaginationMeta } from "@/lib/pagination";
import Link from "next/link";

export const revalidate = 60; // Revalidate every minute

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function GalleryPage(props: PageProps) {
  const searchParams = await props.searchParams;
  const pageSize = 12;
  const { page } = getPaginationParams(searchParams, pageSize);
  const offset = getPaginationOffset(page, pageSize);

  // Get total count
  const total = await queryWithRetry(() => prisma.evidence.count());

  // Get paginated items
  const itemsInfo = await queryWithRetry(() => prisma.evidence.findMany({
    orderBy: { createdAt: "desc" },
    take: pageSize,
    skip: offset,
    select: {
      id: true,
      caption: true,
      height: true,
      rotation: true,
      createdAt: true,
    },
  }));

  const pagination = calculatePaginationMeta(page, pageSize, total);

  return (
    <div className="w-full min-h-screen py-16 md:py-24 px-4 bg-[#fdf6e3] overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12 md:mb-24 relative">
          <div style={{ fontFamily: "var(--font-jakarta)" }} className="inline-block bg-[#ffe082] px-4 py-1 rotate-[-2deg] mb-4 text-[10px] md:text-[12px] font-black uppercase tracking-widest text-[#322f22]">
            Visual Evidence Only
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-[#322f22] tracking-tighter uppercase leading-none px-4" style={{ fontFamily: "var(--font-jakarta)" }}>
            The <span className="text-[#b31446] underline decoration-wavy decoration-[#ff728d]">Evidence</span> Locker
          </h1>
          <p style={{ fontFamily: "var(--font-caveat)" }} className="mt-6 text-[#322f22]/70 text-xl md:text-2xl max-w-xl mx-auto px-6">
            Capture the moments we'll probably regret in 10 years. From the blurry nights to the questionable haircuts.
          </p>
          <div className="absolute top-0 left-0 md:-left-12 text-[#ff728d] opacity-10 md:opacity-20 text-7xl md:text-9xl -rotate-12 pointer-events-none -z-10">
            ✺
          </div>
        </div>

        <AddEvidenceForm />

        <div className="mt-12 md:mt-24">
          <EvidenceGallery items={itemsInfo} />
        </div>

        {/* Pagination Controls */}
        <div className="mt-16 flex justify-center items-center gap-4 flex-wrap pb-12">
          {pagination.hasPrevPage && (
            <Link
              href={`/gallery?page=${page - 1}`}
              className="px-4 py-2 bg-[#b31446] text-white rounded font-bold hover:bg-[#8c0f34] transition text-sm"
            >
              ← Previous
            </Link>
          )}
          
          <span className="text-[#322f22] font-semibold text-xs md:text-sm">
            Page {pagination.page} of {pagination.totalPages} ({pagination.total} items)
          </span>
          
          {pagination.hasNextPage && (
            <Link
              href={`/gallery?page=${page + 1}`}
              className="px-4 py-2 bg-[#b31446] text-white rounded font-bold hover:bg-[#8c0f34] transition text-sm"
            >
              Next →
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}
