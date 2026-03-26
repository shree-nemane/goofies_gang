import { prisma } from "@/lib/prisma";
import { queryWithRetry } from "@/lib/db";
import { QuoteGrid } from "@/components/QuoteGrid";
import { AddQuoteForm } from "@/components/AddQuoteForm";
import { getPaginationParams, getPaginationOffset, calculatePaginationMeta } from "@/lib/pagination";
import Link from "next/link";

export const revalidate = 60;

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function QuotesPage(props: PageProps) {
  const searchParams = await props.searchParams;
  const pageSize = 12;
  const { page } = getPaginationParams(searchParams, pageSize);
  const offset = getPaginationOffset(page, pageSize);

  const total = await queryWithRetry(() => prisma.quote.count());

  const quotesInfo = await queryWithRetry(() => prisma.quote.findMany({
    orderBy: { createdAt: "desc" },
    take: pageSize,
    skip: offset,
  }));
  
  const pagination = calculatePaginationMeta(page, pageSize, total);

  return (
    <div className="w-full min-h-screen py-24 px-4 bg-[#efe8d2] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-5 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        <div className="text-center mb-12 relative w-full">
          <div className="absolute -left-12 -top-12 text-[#ff728d] opacity-10 text-9xl">"</div>
          <div className="absolute right-0 bottom-0 text-[#b31446] opacity-10 text-9xl rotate-180">"</div>
          <h1 className="text-6xl md:text-8xl font-black text-[#322f22] tracking-tighter" style={{ fontFamily: "var(--font-jakarta)" }}>
            The Quotebook
          </h1>
          <p style={{ fontFamily: "var(--font-caveat)" }} className="mt-6 text-[#322f22]/70 text-3xl max-w-2xl mx-auto italic">
            Words we can never take back, no matter how hard we try.
          </p>
        </div>

        <div className="w-full mb-20 relative z-20">
           <AddQuoteForm />
        </div>

        <div className="w-full">
           <QuoteGrid quotes={quotesInfo} />
        </div>

        <div className="mt-12 flex justify-center items-center gap-4 flex-wrap">
          {pagination.hasPrevPage && (
            <Link href={`/quotes?page=${page - 1}`} className="px-4 py-2 bg-[#b31446] text-white rounded hover:bg-[#8c0f34] transition">
              ← Previous
            </Link>
          )}
          <span className="text-[#322f22] font-semibold">
            Page {pagination.page} of {pagination.totalPages} ({pagination.total} items)
          </span>
          {pagination.hasNextPage && (
            <Link href={`/quotes?page=${page + 1}`} className="px-4 py-2 bg-[#b31446] text-white rounded hover:bg-[#8c0f34] transition">
              Next →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
