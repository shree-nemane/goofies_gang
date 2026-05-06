"use client";

type LeaderboardEntry = {
  target: string;
  totalBurns: number;
};

export function RoastLeaderboard({ leaderboardData }: { leaderboardData: Array<{ target: string; _sum: { burns: number | null }; _count: { _all: number } }> }) {
  // Transform the aggregated data into leaderboard entries
  const leaderboard: LeaderboardEntry[] = leaderboardData
    .map(entry => ({
      target: entry.target,
      totalBurns: (entry._sum.burns || 0) + entry._count._all // burns count + number of roasts
    }))
    .filter(entry => entry.totalBurns > 0) // Only show entries with burns
    .sort((a, b) => b.totalBurns - a.totalBurns);

  if (leaderboard.length === 0) return null;

  return (
    <ul style={{ fontFamily: "var(--font-vietnam)" }} className="space-y-4 font-bold text-sm relative z-10 w-full mb-8">
      {leaderboard.map((entry, index) => {
        const bgColors = ["bg-[#b31446]", "bg-[#322f22]", "bg-[#00694c]", "bg-gray-400", "bg-gray-300"];
        return (
          <li key={entry.target} className={`flex justify-between items-center bg-white p-3 shadow-sm ${index > 0 ? 'opacity-90' : ''}`}>
            <span className="flex items-center gap-3">
              <span className={`${index < 3 ? 'text-[#b31446]' : 'text-gray-500'} font-black text-lg`}>
                0{index + 1}
              </span> 
              {entry.target}
            </span>
            <span className={`${bgColors[index] || "bg-gray-300"} text-white text-[9px] px-2 py-1 rounded-full uppercase`}>
              {entry.totalBurns} Burns
            </span>
          </li>
        );
      })}
    </ul>
  );
}
