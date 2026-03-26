import { prisma } from "@/lib/prisma";
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
  const { page, pageSize: paramPageSize } = getPaginationParams(searchParams, pageSize);
  const offset = getPaginationOffset(page, pageSize);

  // Get total count
  const total = await prisma.evidence.count();

  // Get paginated items
  const itemsInfo = await prisma.evidence.findMany({
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
  });

  const pagination = calculatePaginationMeta(page, pageSize, total);

  return (
    <div className="w-full min-h-screen py-24 px-4 bg-[#fdf6e3]">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-24 relative">
          <div style={{ fontFamily: "var(--font-jakarta)" }} className="inline-block bg-[#ffe082] px-4 py-1 rotate-[-2deg] mb-4 text-[12px] font-black uppercase tracking-widest text-[#322f22]">
            Visual Evidence Only
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-[#322f22] tracking-tighter" style={{ fontFamily: "var(--font-jakarta)" }}>
            The <span className="text-[#b31446] underline decoration-wavy decoration-[#ff728d]">Evidence</span> Locker
          </h1>
          <p style={{ fontFamily: "var(--font-caveat)" }} className="mt-6 text-[#322f22]/70 text-2xl max-w-xl mx-auto">
            Capture the moments we'll probably regret in 10 years. From the blurry nights to the questionable haircuts.
          </p>
          <div className="absolute top-0 -left-12 text-[#ff728d] opacity-20 text-9xl -rotate-12 pointer-events-none">
            ✺
          </div>
        </div>

        <AddEvidenceForm />

        <EvidenceGallery items={itemsInfo} />

        {/* Pagination Controls */}
        <div className="mt-12 flex justify-center items-center gap-4 flex-wrap">
          {pagination.hasPrevPage && (
            <Link
              href={`/gallery?page=${page - 1}`}
              className="px-4 py-2 bg-[#b31446] text-white rounded hover:bg-[#8c0f34] transition"
            >
              ← Previous
            </Link>
          )}
          
          <span className="text-[#322f22] font-semibold">
            Page {pagination.page} of {pagination.totalPages} ({pagination.total} items)
          </span>
          
          {pagination.hasNextPage && (
            <Link
              href={`/gallery?page=${page + 1}`}
              className="px-4 py-2 bg-[#b31446] text-white rounded hover:bg-[#8c0f34] transition"
            >
              Next →
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}
