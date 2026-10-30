"use client";

import Avatar from "@/components/ui/avatar";
import KycStatusChip from "@/components/kyc/KycStatusChip";

/* ────────── Dashboard Greeting: existing dashboard section ────────── */
export default function DashboardGreeting({ user }: { user: { name?: string; avatar?: string } | null }) {
  return (
    <div className="flex items-center gap-3">
          <Avatar src={user?.avatar} name={user?.name} size={44} />
          <div className="min-w-0">
            <p className="text-xs text-white/50">Welcome back</p>
            <p className="truncate text-sm font-semibold">
              {user?.name || "Trader"}
            </p>
            <div className="mt-1">
              <KycStatusChip />
            </div>
          </div>
        </div>
  );
}
