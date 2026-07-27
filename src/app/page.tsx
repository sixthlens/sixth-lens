import { CapabilitiesSection } from "@/components/home/capabilities-section";
import { FutureSection } from "@/components/home/future-section";
import { HeroSection } from "@/components/home/hero-section";
import { JourneySection } from "@/components/home/journey-section";
import { SolutionsSection } from "@/components/home/solutions-section";
import { StoriesSection } from "@/components/home/stories-section";
import { TrustedBy } from "@/components/home/trusted-by";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <TrustedBy />
      <SolutionsSection />
      <CapabilitiesSection />
      <StoriesSection />
      <JourneySection />
      <FutureSection />
      <SiteFooter />
    </main>
  );
}
