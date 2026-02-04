"use client";

import StarField from "@/components/hero/StarField";
import ParallaxOrbs from "@/components/hero/ParallaxOrbs";
import HeroContent from "@/components/hero/HeroContent";

interface HeroSectionProps {
  onScrollToSection: (section: string) => void;
}

export default function HeroSection({ onScrollToSection }: HeroSectionProps) {
  return (
    <section className="relative w-full flex flex-col items-center justify-center h-[100vh] overflow-hidden bg-gradient-to-br from-[#0D0A1A] via-[#1A1230] to-[#2D1B4E]">
      {/* Animated Background Elements */}
      <StarField count={45} />
      <ParallaxOrbs />

      {/* Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[650px] md:h-[650px] rounded-full border border-white/5 pointer-events-none" />

      {/* Main Content */}
      <HeroContent onScrollToSection={onScrollToSection} />
    </section>
  );
}
