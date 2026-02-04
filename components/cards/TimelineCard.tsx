"use client";

import { motion } from "framer-motion";

interface TimelineCardProps {
  icon: string;
  title: string;
  subtitle: string;
  isHighlighted?: boolean;
  delay?: number;
}

export default function TimelineCard({
  icon,
  title,
  subtitle,
  isHighlighted = false,
  delay = 0,
}: TimelineCardProps) {
  return (
    <motion.div
      className={`flex flex-col items-center p-[24px] rounded-[16px] min-w-[200px] ${
        isHighlighted
          ? "bg-gradient-to-r from-[#FFF6EC] via-[#FFF2F2] to-[#FFE6FE] border-2 border-[#FF6161]/20"
          : "bg-[#F6F7F9]"
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: isHighlighted
          ? "0 20px 40px rgba(255, 97, 97, 0.2)"
          : "0 20px 40px rgba(0, 0, 0, 0.1)",
      }}
    >
      <motion.span
        className="text-[32px] mb-[8px]"
        whileHover={{
          rotate: [0, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
      >
        {icon}
      </motion.span>
      <span className="text-[#3F404D] font-medium text-[16px]">{title}</span>
      <span
        className={`text-[14px] ${
          isHighlighted ? "text-[#FF6161] font-medium" : "text-[#9AA2AE]"
        }`}
      >
        {subtitle}
      </span>
      {isHighlighted && (
        <motion.div
          className="absolute inset-0 rounded-[16px] pointer-events-none"
          animate={{
            boxShadow: [
              "0 0 20px rgba(255, 97, 97, 0.1)",
              "0 0 30px rgba(255, 97, 97, 0.2)",
              "0 0 20px rgba(255, 97, 97, 0.1)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  );
}
