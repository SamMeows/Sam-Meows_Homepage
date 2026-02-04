"use client";

import { motion } from "framer-motion";
import NewsCard from "@/components/cards/NewsCard";
import FadeInView from "@/components/ui/FadeInView";
import { NEWS_ITEMS } from "@/constants/news-items";

export default function NewsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="news"
      className="w-full min-h-screen py-[80px] md:py-[120px] flex flex-col items-center justify-center bg-white px-[20px] md:px-0"
    >
      <FadeInView>
        <span className="text-[#9AA2AE] font-medium text-[15px] md:text-[18px]">
          News & Media
        </span>
      </FadeInView>

      <FadeInView delay={0.1}>
        <h2 className="font-semibold text-[28px] md:text-[36px] text-[#3F404D] leading-[125%] mt-[15px] mb-[50px]">
          삼냥이즈 소식
        </h2>
      </FadeInView>

      <motion.div
        className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {NEWS_ITEMS.map((item, index) => (
          <NewsCard
            key={item.id}
            title={item.title}
            source={item.source}
            type={item.type}
            url={item.url}
            delay={index * 0.1}
          />
        ))}
      </motion.div>
    </section>
  );
}
