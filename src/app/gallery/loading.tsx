import React from "react";

export default function GalleryLoading() {
  return (
    <div className="w-full min-h-screen py-16 md:py-24 px-4 bg-[#fdf6e3] overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Skeleton */}
        <div className="text-center mb-12 md:mb-24 relative">
          <div className="inline-block bg-[#ffe082]/30 px-4 py-1 rotate-[-2deg] mb-4 text-[12px] font-black uppercase tracking-widest text-transparent animate-pulse">
            Visual Evidence Only
          </div>
          <div className="h-20 md:h-24 w-full max-w-2xl mx-auto bg-[#efe8d2] animate-pulse rounded-sm mb-6" />
          <div className="h-6 w-full max-w-md mx-auto bg-[#efe8d2] animate-pulse rounded-sm" />
        </div>

        {/* Add Evidence Form Placeholder */}
        <div className="max-w-xl mx-auto h-12 bg-[#efe8d2] animate-pulse rounded-sm" />

        {/* Polaroid Grid Skeleton */}
        <div className="mt-12 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 pb-24">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div 
              key={i} 
              className="bg-white p-4 shadow-ambient transform animate-pulse"
              style={{ 
                rotate: `${(i % 3 === 0 ? -2 : i % 3 === 1 ? 2 : -1)}deg`,
                marginTop: `${(i % 2 === 0 ? 0 : 20)}px`
              }}
            >
              <div className="aspect-square bg-[#efe8d2] rounded-sm mb-4" />
              <div className="h-4 w-3/4 bg-[#efe8d2] rounded mb-2" />
              <div className="h-3 w-1/2 bg-[#efe8d2] rounded opacity-50" />
              
              <div className="absolute top-2 right-2 w-4 h-4 bg-[#efe8d2]/50 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
