"use client";

import type { ReactNode } from "react";
import { UserRound } from "lucide-react";
import { QxAuthTabs } from "./QxUI";

/* ────────── Auth card: raised avatar, tabs and form ────────── */
export default function QxAuthCard({ tab, onTabChange, children }: {
  tab: "signin" | "create";
  onTabChange: (tab: "signin" | "create") => void;
  children: ReactNode;
}) {
  return (
    <section className="qx-auth-section">
      <div className="qx-auth-card">
        {/* ────────── Raised profile icon ────────── */}
        <div className="qx-auth-avatar" aria-hidden="true"><UserRound strokeWidth={1.5} /></div>
        {/* ────────── Heading and existing auth tabs ────────── */}
        <div className="qx-auth-heading">
          <p className="qx-auth-eyebrow">QX BROKER</p>
          <h1>{tab === "signin" ? "Sign In To Your Account" : "Sign Up"}</h1>
          <QxAuthTabs value={tab} onChange={onTabChange} />
        </div>
        {/* ────────── Existing form and validation ────────── */}
        <div className="qx-auth-form">{children}</div>
      </div>
    </section>
  );
}
