import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { LanguageSwitch } from "@/components/layout/language-switch";

export function SiteHeader({ language = "en" }: { language?: "en" | "ar" }) {
  const isArabic = language === "ar";
  const route = (path: string) => isArabic ? `/ar${path}` : path;
  return <header className="site-header"><Link className="brand" href={route("/")} aria-label={isArabic ? "الصفحة الرئيسية لسايكسث لينس" : "Sixth Lens home"}><Image className="brand-logo" src="/images/sixth-lens-logo.svg" alt="Sixth Lens" width={178} height={40} priority /></Link><nav aria-label={isArabic ? "التنقل الرئيسي" : "Primary navigation"}><Link href={route("/services/")}>{isArabic ? "الخدمات" : "Services"}</Link><Link href={route("/portfolio/")}>{isArabic ? "أعمالنا" : "Work"}</Link><Link href={route("/industries/")}>{isArabic ? "القطاعات" : "Industries"}</Link><Link href={route("/startups/")}>{isArabic ? "للشركات الناشئة" : "Startups"}</Link><Link href={route("/about/")}>{isArabic ? "من نحن" : "About"}</Link><Link href={route("/process/")}>{isArabic ? "منهجيتنا" : "Process"}</Link><Link href={route("/consulting/")}>{isArabic ? "الاستشارات" : "Consulting"}</Link><Link href={route("/security-compliance/")}>{isArabic ? "الأمن والامتثال" : "Security"}</Link></nav><div className="header-actions"><LanguageSwitch language={language}/><a className="button button-small" href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">{isArabic ? "احجز اجتماعاً ↗" : "Book a meeting ↗"}</a></div></header>;
}
