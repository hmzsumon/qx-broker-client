"use client";

import Link from "next/link";
import { ArrowDownToLine, ArrowUpFromLine, TrendingUp, Trophy } from "lucide-react";

const QUICK_ACTIONS = [
  { label: "Deposit", href: "/deposit", icon: ArrowDownToLine },
  { label: "Withdraw", href: "/withdraw", icon: ArrowUpFromLine },
  { label: "QX Investment", href: "/trade-investment", icon: TrendingUp },
  { label: "Top Investment", href: "/profit-ranking", icon: Trophy },
];

/* ────────── Dashboard QuickActions: existing dashboard section ────────── */
export default function DashboardQuickActions() {
  return (
    <section className="qx-quick-actions grid grid-cols-4 gap-2">
          {QUICK_ACTIONS.map((a) => (
            <Link
              key={a.label}
              href={a.href}
              className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-2 py-3 text-center hover:bg-white/[0.07]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2E7DF6]/15 text-[#5AA2FF]">
                <a.icon size={18} />
              </span>
              <span className="text-[11px] font-medium text-white/80">
                {a.label}
              </span>
            </Link>
          ))}
        </section>
  );
}
