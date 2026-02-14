import { useThemeStore } from "../../../store/themeStore";
import { getFont } from "../../../lib/themeUtils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import HeroSection from "../layout/HeroSection";
import BentoGrid from "../layout/BentoGrid";
import TestimonialCard from "../data/TestimonialCard";
import PricingCard from "../data/PricingCard";
import Footer from "../layout/Footer";

export default function LandingPagePreview() {
  const fontStyle = useThemeStore((s) => s.fontStyle);
  const font = getFont(fontStyle);

  return (
    <div className={twMerge(clsx("w-full bg-[var(--color-background)]", font))}>
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 py-20 space-y-24">
        <section>
          <h2 className="text-3xl font-bold text-center mb-10 text-[var(--color-forge-text)]">
            Features
          </h2>
          <BentoGrid />
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-10 text-[var(--color-forge-text)]">
            Testimonials
          </h2>
          <TestimonialCard />
          {/* Note: TestimonialCard renders a grid of cards internally, so it fits well here */}
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-10 text-[var(--color-forge-text)]">
            Pricing
          </h2>
          <PricingCard />
        </section>
      </div>

      <Footer />
    </div>
  );
}
