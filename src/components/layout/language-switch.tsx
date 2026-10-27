"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function LanguageSwitch({ language = "en" }: { language?: "en" | "ar" }) {
  const pathname = usePathname() || "/";
  const englishPath = pathname.startsWith("/ar/") ? pathname.slice(3) || "/" : pathname === "/ar" ? "/" : pathname;
  const target = language === "ar" ? englishPath : `/ar${pathname === "/" ? "/" : pathname}`;
  return <Link className="language-switch" href={target} lang={language === "ar" ? "en" : "ar"} aria-label={language === "ar" ? "Switch to English" : "التبديل إلى العربية"}>{language === "ar" ? "EN" : "عربي"}</Link>;
}
