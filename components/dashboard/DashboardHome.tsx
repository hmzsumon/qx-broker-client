/* ────────── Smart dashboard home ──────────
   Balance + copyable ID, quick actions, live stats, then the live
   market chart below.
   ───────────────────────────────────────── */

"use client";

import AnnouncementBanner from "@/components/announcements/AnnouncementBanner";
import dynamic from "next/dynamic";
import DailyVideoSection from "@/components/dashboard/DailyVideoSection";
import { useGetProfitLeaderboardQuery } from "@/redux/features/leaderboard/leaderboardApi";
import { useGetMyRankSummaryQuery } from "@/redux/features/rank/rankApi";
import DashboardGreeting from "./DashboardGreeting";
import DashboardBalanceCard from "./DashboardBalanceCard";
import DashboardQuickActions from "./DashboardQuickActions";
import DashboardStats from "./DashboardStats";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const LiveCandlestickChart = dynamic(
  () => import("@/components/dashboard/LiveCandlestickChart"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[420px] animate-pulse rounded-2xl bg-white/5" />
    ),
  },
);

export default function DashboardHome() {
  const { user } = useSelector((s: any) => s.auth);
  const [hidden, setHidden] = useState(false);
  const [copied, setCopied] = useState(false);

  const { data: rank } = useGetMyRankSummaryQuery();
  const { data: board } = useGetProfitLeaderboardQuery();

  const balance = Number(user?.m_balance ?? 0);
  const customerId = user?.customerId ?? "";
  const teamVolume = rank?.overall?.teamVolume ?? 0;
  const currentRank =
    [...(rank?.ranks ?? [])].reverse().find((r) => r.qualified)?.name ?? "—";
  const myInvestment = board?.me?.investment ?? 0;
  const myInvestmentRank = board?.me ? (board.me.rank ?? "20+") : null;

  const copyId = async () => {
    if (!customerId) return;
    try {
      await navigator.clipboard.writeText(customerId);
      setCopied(true);
      toast.success("ID copied");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy");
    }
  };

  return (
    <main className="qx-dashboard-home min-h-screen w-full bg-[#0b0e11] pb-24 pt-5 text-white">
      <div className="mx-auto w-full max-w-3xl space-y-5 px-1 sm:px-3">
        {/* ────────── Greeting ────────── */}
        <DashboardGreeting user={user} />

        <AnnouncementBanner />

        {/* ────────── Main balance ────────── */}
        <DashboardBalanceCard balance={balance} customerId={customerId} hidden={hidden} copied={copied} onToggleHidden={() => setHidden((v) => !v)} onCopyId={copyId} />

        {/* ────────── Quick actions ────────── */}
        <DashboardQuickActions />

        {/* ────────── Investment and team stats ────────── */}
        <DashboardStats myInvestment={myInvestment} myInvestmentRank={myInvestmentRank} teamVolume={teamVolume} currentRank={currentRank} />

        <DailyVideoSection />
        {/* <LiveCandlestickChart /> */}
      </div>
    </main>
  );
}
