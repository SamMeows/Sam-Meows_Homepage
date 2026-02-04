"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import NewsCard from "@/components/cards/NewsCard";
import FadeInView from "@/components/ui/FadeInView";
import { NEWS_ITEMS } from "@/constants/news-items";

const sortedNewsItems = [...NEWS_ITEMS].sort((a, b) => {
  const dateA = a.date.replace(/\./g, "");
  const dateB = b.date.replace(/\./g, "");
  return dateB.localeCompare(dateA);
});

export default function NewsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="news"
      className="w-full min-h-screen py-[80px] md:py-[120px] flex flex-col items-center justify-center bg-white"
    >
      <div className="px-[20px] md:px-0">
        <FadeInView>
          <span className="text-[#9AA2AE] font-medium text-[15px] md:text-[18px]">
            News & Media
          </span>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h2 className="font-semibold text-[28px] md:text-[36px] text-[#3F404D] leading-[125%] mt-[15px] mb-[40px] md:mb-[50px]">
            삼냥이즈 소식
          </h2>
        </FadeInView>
      </div>

      {/* Scroll Container */}
      <div className="relative w-full max-w-[1200px] mx-auto">
        {/* Left Arrow */}
        <motion.button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-[-24px] lg:left-[-30px] top-1/2 -translate-y-1/2 z-10 w-[48px] h-[48px] rounded-full bg-white shadow-lg items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3F404D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </motion.button>

        {/* Right Arrow */}
        <motion.button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-[-24px] lg:right-[-30px] top-1/2 -translate-y-1/2 z-10 w-[48px] h-[48px] rounded-full bg-white shadow-lg items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3F404D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </motion.button>

        {/* Scrollable Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-[16px] md:gap-[20px] overflow-x-auto px-[20px] md:px-[10px] pb-[20px] scrollbar-hide"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {sortedNewsItems.map((item, index) => (
            <div key={item.id} style={{ scrollSnapAlign: "start" }}>
              <NewsCard
                title={item.title}
                source={item.source}
                type={item.type}
                url={item.url}
                thumbnail={item.thumbnail}
                date={item.date}
                delay={index * 0.1}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator (Mobile) */}
      <FadeInView delay={0.3}>
        <div className="flex md:hidden items-center gap-[8px] mt-[10px]">
          <span className="text-[#9AA2AE] text-[13px]">좌우로 스크롤하세요</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9AA2AE"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </FadeInView>
    </section>
  );
}
