"use client";

import { motion } from "framer-motion";

interface NewsCardProps {
  title: string;
  source: string;
  type: "article" | "video";
  url: string;
  delay?: number;
}

export default function NewsCard({
  title,
  source,
  type,
  url,
  delay = 0,
}: NewsCardProps) {
  return (
    <motion.div
      onClick={() => window.open(url, "_blank")}
      className="relative bg-[#F6F7F9] rounded-[16px] p-[24px] cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="flex items-center gap-[8px] mb-[12px]">
        <span
          className={`text-[12px] font-medium px-[8px] py-[2px] rounded-full ${
            type === "video"
              ? "bg-[#FF6161] text-white"
              : "bg-[#716BF8] text-white"
          }`}
        >
          {type === "video" ? "VIDEO" : "ARTICLE"}
        </span>
        <span className="text-[#9AA2AE] text-[13px]">{source}</span>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-[#3F404D] text-[16px] font-medium leading-[150%] line-clamp-2 flex-1">
          {title}
        </h3>
        <motion.div
          className="ml-[12px] text-[#9AA2AE]"
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
