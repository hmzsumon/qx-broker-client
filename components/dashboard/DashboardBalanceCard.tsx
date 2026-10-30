"use client";

import Link from "next/link";
import { Check, Copy, Eye, EyeOff } from "lucide-react";
import { formatBalance } from "@/lib/functions";

/* ────────── Dashboard BalanceCard: existing dashboard section ────────── */
export default function DashboardBalanceCard({ balance, customerId, hidden, copied, onToggleHidden, onCopyId }: { balance: number; customerId: string; hidden: boolean; copied: boolean; onToggleHidden: () => void; onCopyId: () => void }) {
  return (
    <section className="qx-balance-card rounded-2xl border border-white/10 bg-gradient-to-br from-[#12203a] to-[#0e1626] p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-white/60">Main balance</p>
            <button
              onClick={onToggleHidden}
              className="rounded-lg p-1.5 text-white/60 hover:bg-white/10 hover:text-white"
              aria-label={hidden ? "Show balance" : "Hide balance"}
            >
              {hidden ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          <div className="mt-1 text-3xl font-bold tracking-tight">
            {hidden ? "••••••" : formatBalance(balance)}
            <span className="ml-1.5 text-sm font-medium text-white/50">
              USDT
            </span>
          </div>

          {customerId ? (
            <button
              onClick={onCopyId}
              className="mt-3 inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-xs text-white/70 hover:bg-white/10"
            >
              ID: <span className="font-semibold text-white">{customerId}</span>
              {copied ? (
                <Check size={13} className="text-[#12b76a]" />
              ) : (
                <Copy size={13} />
              )}
            </button>
          ) : null}

          <div className="mt-4 flex gap-2">
            <Link
              href="/deposit"
              className="flex-1 rounded-lg bg-[#2E7DF6] py-2.5 text-center text-sm font-semibold text-white hover:bg-[#1E6FE0]"
            >
              Deposit
            </Link>
            <Link
              href="/withdraw"
              className="flex-1 rounded-lg border border-white/15 py-2.5 text-center text-sm font-semibold text-white hover:bg-white/5"
            >
              Withdraw
            </Link>
          </div>
        </section>
  );
}
