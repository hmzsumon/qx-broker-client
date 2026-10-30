"use client";

const usd = (v: number) => `$${Number(v || 0).toLocaleString(undefined, { maximumFractionDigits: 2 })}`;

/* ────────── Dashboard Stats: existing dashboard section ────────── */
export default function DashboardStats({ myInvestment, myInvestmentRank, teamVolume, currentRank }: { myInvestment: number; myInvestmentRank: number | string | null; teamVolume: number; currentRank: string }) {
  return (
    <section className="qx-dashboard-stats grid grid-cols-3 gap-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[11px] text-white/50">My QX Investment</p>
            <p className="mt-1 text-sm font-bold text-[#12b76a]">
              {usd(myInvestment)}
            </p>
            {myInvestmentRank && (
              <p className="text-[10px] text-white/40">
                Rank #{myInvestmentRank}
              </p>
            )}
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[11px] text-white/50">Team volume</p>
            <p className="mt-1 text-sm font-bold text-white">
              {usd(teamVolume)}
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[11px] text-white/50">Current rank</p>
            <p className="mt-1 text-sm font-bold text-white">{currentRank}</p>
          </div>
        </section>
  );
}
