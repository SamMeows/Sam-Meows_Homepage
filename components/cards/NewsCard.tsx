"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface NewsCardProps {
  title: string;
  source: string;
  type: "article" | "video";
  url: string;
  thumbnail?: string;
  date?: string;
  delay?: number;
}

export default function NewsCard({
  title,
  source,
  type,
  url,
  thumbnail,
  date,
  delay = 0,
}: NewsCardProps) {
  return (
    <motion.div
      onClick={() => window.open(url, "_blank")}
      className="relative bg-[#F6F7F9] rounded-[16px] cursor-pointer overflow-hidden flex-shrink-0 w-[280px] md:w-[320px]"
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
      {/* Thumbnail */}
      <div className="relative w-full h-[160px] md:h-[180px] bg-[#E8E9ED] overflow-hidden">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[#9AA2AE] text-[14px]">No Image</span>
          </div>
        )}
        {type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="w-[50px] h-[50px] rounded-full bg-white/90 flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#FF6161"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-[20px]">
        <div className="flex items-center gap-[8px] mb-[10px]">
          <span
            className={`text-[11px] font-medium px-[8px] py-[2px] rounded-full ${
              type === "video"
                ? "bg-[#FF6161] text-white"
                : "bg-[#716BF8] text-white"
            }`}
          >
            {type === "video" ? "VIDEO" : "ARTICLE"}
          </span>
          <span className="text-[#9AA2AE] text-[12px]">{source}</span>
          {date && (
            <>
              <span className="text-[#D1D5DB] text-[12px]">·</span>
              <span className="text-[#9AA2AE] text-[12px]">{date}</span>
            </>
          )}
        </div>
        <h3 className="text-[#3F404D] text-[14px] md:text-[15px] font-medium leading-[150%] line-clamp-2">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}
