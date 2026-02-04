"use client";

import { motion, Variants } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

interface HeroContentProps {
  onScrollToSection: (section: string) => void;
}

export default function HeroContent({ onScrollToSection }: HeroContentProps) {
  const titleVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const renderAnimatedText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span key={index} variants={letterVariants} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <div className="relative z-10 flex flex-col items-center text-center px-[20px] max-w-[900px]">
      {/* Title */}
      <motion.h1
        className="text-white text-[40px] sm:text-[56px] md:text-[72px] font-bold leading-[110%] mb-[10px]"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {renderAnimatedText("Build Worlds")}
      </motion.h1>
      <motion.h1
        className="text-[40px] sm:text-[56px] md:text-[72px] font-bold leading-[110%] text-transparent bg-clip-text bg-gradient-to-r from-[#FFBC70] via-[#FF7B7B] to-[#FF52F9] animate-gradient mb-[30px] md:mb-[40px]"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {renderAnimatedText("With Virtual Friends")}
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-white/80 text-[14px] md:text-[18px] leading-[170%] max-w-[600px] mb-[40px] md:mb-[50px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        단순히 소비하는 콘텐츠를 넘어,
        <br className="hidden md:block" />
        나와 소통하며 교감하는{" "}
        <span className="text-[#FF7B7B] font-medium">가상의 존재(Being)</span>를
        만듭니다.
        <br />
        그리고 함께 뛰어놀 수 있는{" "}
        <span className="text-[#A78BFA] font-medium">세계(World)</span>를 만듭니다.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <MagneticButton
          onClick={() => onScrollToSection("about")}
          className="group flex items-center gap-[12px] bg-gradient-to-r from-[#FF6161] to-[#FF52F9] px-[32px] md:px-[40px] py-[14px] md:py-[18px] rounded-full text-white font-semibold text-[16px] md:text-[18px] hover:shadow-[0_0_30px_rgba(255,97,97,0.5)] transition-all duration-300"
        >
          <span>시작하기</span>
          <svg
            className="w-[20px] h-[20px] group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </MagneticButton>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-[40px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[8px] text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.span
          className="text-[12px] tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          SCROLL
        </motion.span>
        <motion.div
          className="w-[1px] h-[30px] bg-gradient-to-b from-white/50 to-transparent"
          animate={{ scaleY: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}
