import React from "react";

export default function QuotesLoading() {
  return (
    <div className="w-full min-h-screen py-16 md:py-24 px-4 bg-[#efe8d2] relative overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-5 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* Header Skeleton */}
        <div className="text-center mb-12 relative w-full px-4">
          <div className="h-20 md:h-28 w-full max-w-3xl mx-auto bg-[#322f22]/10 animate-pulse rounded-sm mb-6" />
          <div className="h-8 w-full max-w-lg mx-auto bg-[#322f22]/10 animate-pulse rounded-sm" />
        </div>

        {/* Form Placeholder */}
        <div className="w-full max-w-2xl h-16 bg-[#322f22]/5 animate-pulse rounded-sm mb-12 md:mb-20" />

        {/* Quotes Grid Skeleton */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pb-24">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div 
              key={i} 
              className="bg-white p-6 shadow-ambient border-t-4 border-[#ff728d]/20 animate-pulse flex flex-col justify-between h-64"
            >
              <div>
                <div className="h-4 w-full bg-[#322f22]/10 rounded mb-2" />
                <div className="h-4 w-5/6 bg-[#322f22]/10 rounded mb-2" />
                <div className="h-4 w-4/5 bg-[#322f22]/10 rounded" />
              </div>
              
              <div className="mt-8 flex justify-between items-end border-t border-[#322f22]/5 pt-4">
                <div className="h-3 w-24 bg-[#322f22]/10 rounded" />
                <div className="w-10 h-10 rounded-full bg-[#322f22]/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
