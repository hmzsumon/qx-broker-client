"use client";

/* ────────── QX BROKER — Auth page (Login / Registration) ──────────
   One route, two tabs. The tab is mirrored to the URL (?tab=signin |
   ?tab=create) so the navbar "Log in" / "Sign up" links land on the
   right form.
   ──────────────────────────────────────────────────────────────── */

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import QxRegisterForm from "@/components/register-login/QxRegisterForm";
import QxSignInForm from "@/components/register-login/QxSignInForm";
import QxAuthCard from "@/components/register-login/QxAuthCard";

type Tab = "signin" | "create";

export default function AuthPage(): JSX.Element {
  /* ────────── URL <-> tab state ────────── */
  const router = useRouter();
  const searchParams = useSearchParams();

  const tabFromUrl = useMemo<Tab>(
    () => (searchParams.get("tab") === "create" ? "create" : "signin"),
    [searchParams],
  );

  const [tab, setTab] = useState<Tab>(tabFromUrl);
  useEffect(() => setTab(tabFromUrl), [tabFromUrl]);

  const setTabAndUrl = (next: Tab) => {
    const sp = new URLSearchParams(Array.from(searchParams.entries()));
    sp.set("tab", next);
    router.replace(`?${sp.toString()}`, { scroll: false });
    setTab(next);
  };

  /* ────────── Render ────────── */
  return (
    <QxAuthCard tab={tab} onTabChange={setTabAndUrl}>
      {tab === "signin" ? (
        <QxSignInForm />
      ) : (
        <QxRegisterForm onSuccess={() => setTabAndUrl("signin")} />
      )}
    </QxAuthCard>
  );
}
