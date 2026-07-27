import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type GradientButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function GradientButton({ href, children, className = "" }: GradientButtonProps) {
  return (
    <Link className={`gradient-button ${className}`} href={href}>
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={15} strokeWidth={2.2} />
    </Link>
  );
}
