import React from "react";

export default function WallOfShameLoading() {
  return (
    <div className="w-full min-h-screen py-16 md:py-24 px-4 bg-[#fdf6e3]">
      <div className="max-w-6xl mx-auto">
        {/* Header Skeleton */}
        <div className="text-center mb-12 md:mb-16 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px border-t border-dashed border-[#d8cdae] -z-10" />
          <div className="h-16 md:h-24 w-2/3 max-w-xl mx-auto bg-[#efe8d2] animate-pulse rounded-sm inline-block" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Main Feed Area Skeleton */}
          <div className="flex-1 w-full flex flex-col gap-12">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className={`flex gap-3 md:gap-4 w-full max-w-xl ${i % 2 === 0 ? 'self-end flex-row-reverse' : 'self-start'}`}
              >
                {/* Avatar Skeleton */}
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#efe8d2] animate-pulse flex-shrink-0" />
                
                {/* Bubble Skeleton */}
                <div className={`flex-1 p-6 bg-[#efe8d2] animate-pulse rounded-2xl shadow-sm h-32 relative ${i % 2 === 0 ? 'rounded-tr-none' : 'rounded-tl-none'}`}>
                   <div className="h-4 w-3/4 bg-[#322f22]/10 rounded mb-4" />
                   <div className="h-4 w-1/2 bg-[#322f22]/10 rounded" />
                   
                   <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center opacity-30">
                     <div className="h-2 w-20 bg-[#322f22]/20 rounded" />
                     <div className="h-4 w-8 bg-[#322f22]/20 rounded-full" />
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Skeleton */}
          <div className="w-full lg:w-80 flex-shrink-0 mt-12 lg:mt-0">
             <div className="bg-[#efe8d2] p-6 rounded-sm shadow-ambient mb-8 border-2 border-[#d8cdae]/30 pointer-events-none">
               <div className="h-6 w-1/2 bg-[#322f22]/10 rounded mb-6" />
               
               {[1, 2, 3, 4, 5].map((i) => (
                 <div key={i} className="flex items-center gap-3 mb-4">
                   <div className="w-8 h-8 bg-white/50 rounded-full" />
                   <div className="flex-1 h-3 bg-[#322f22]/10 rounded" />
                   <div className="w-8 h-3 bg-[#322f22]/10 rounded" />
                 </div>
               ))}
             </div>

             <div className="bg-[#ffe082]/60 p-6 shadow-ambient md:-rotate-2 animate-pulse rounded-sm">
               <div className="h-2 w-16 bg-[#322f22]/10 rounded mb-4" />
               <div className="h-4 w-full bg-[#322f22]/10 rounded mb-2" />
               <div className="h-4 w-4/5 bg-[#322f22]/10 rounded" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
