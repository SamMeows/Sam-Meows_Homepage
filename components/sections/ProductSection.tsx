"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, MouseEvent } from "react";
import FadeInView from "@/components/ui/FadeInView";
import RittyMiniIcon from "@/public/ritty-mini-logo.svg";
import {
  PRODUCT_VIDEOS,
  RITTY_YOUTUBE_CHANNEL_URL,
} from "@/constants/product-videos";

const LineBreakMobileOnly = () => <br className="block sm:hidden" />;

interface ProductButtonProps {
  children: React.ReactNode;
  href: string;
  label?: string;
  variant: "primary" | "secondary";
  icon?: React.ReactNode;
}

function ShortsEmbed({
  videoId,
  title,
  delay = 0,
}: {
  videoId: string;
  title: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="relative rounded-[16px] overflow-hidden bg-black flex-shrink-0 w-[220px] md:w-[250px] aspect-[9/16]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      }}
    >
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </motion.div>
  );
}

function ProductButton({ children, href, label, variant, icon }: ProductButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`flex justify-center items-center gap-[10px] md:w-[200px] w-[150px] md:h-[58px] h-[46px] rounded-full font-semibold border-[2px] cursor-pointer transition-all duration-300 text-[14px] md:text-[18px] ${
        variant === "primary"
          ? "bg-[#FF6161] text-white border-[#FF9292] hover:shadow-[0_0_20px_#FF616180]"
          : "bg-[#6B65FF] text-white border-[#ffffff9d] hover:shadow-[0_0_20px_#6B65FF80]"
      }`}
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      {children}
    </motion.a>
  );
}

export default function ProductSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 100,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 100,
    damping: 20,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="product"
      className="relative w-full h-auto min-h-screen py-[80px] md:py-[120px] bg-[#F6F7F9] flex flex-col items-center justify-center gap-[20px] md:gap-[30px] px-[20px] md:px-0"
    >
      <FadeInView>
        <div className="flex flex-col text-center">
          <span className="text-[#9AA2AE] font-medium text-[15px] md:text-[18px]">
            Our Product
          </span>
          <h2 className="font-semibold text-[32px] md:text-[36px] text-[#3F404D] leading-[125%] mt-[10px] md:mt-[15px] mb-[15px] md:mb-[12px]">
            나만의 우주고양이,
            <LineBreakMobileOnly />
            <span className="text-[#716BF8]"> 리티</span>
          </h2>
          <span className="text-[#3F404D] text-[15px] md:text-[18px]">
            대화하고, 돌보고, 함께 성장하는
            <LineBreakMobileOnly /> 당신만의 가상 친구
          </span>
        </div>
      </FadeInView>

      <FadeInView delay={0.2}>
        <motion.div
          ref={containerRef}
          className="relative"
          style={{
            perspective: 1000,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src={"/service-banner.png"}
              alt="service banner"
              width={388}
              height={450}
              className="block md:hidden"
            />
            <Image
              src={"/service-banner_PC.png"}
              alt="service banner"
              width={800}
              height={500}
              className="hidden md:block"
            />
          </motion.div>
        </motion.div>
      </FadeInView>

      <FadeInView delay={0.3}>
        <motion.div
          className="flex md:gap-5 gap-2 flex-wrap justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <ProductButton
            variant="primary"
            href="https://ritty.sam-meows.com/"
            label="리티 (Ritty) 공식 홈페이지"
          >
            공식 홈페이지 &gt;
          </ProductButton>
          <ProductButton
            variant="secondary"
            href="https://play.google.com/store/apps/details?id=com.sammeows.ritty"
            icon={
              <Image
                src={RittyMiniIcon}
                alt="ritty mini icon"
                width={16}
                height={14}
              />
            }
          >
            Android &gt;
          </ProductButton>
          <ProductButton
            variant="secondary"
            href="https://apps.apple.com/us/app/id6743311040"
            icon={
              <Image
                src={RittyMiniIcon}
                alt="ritty mini icon"
                width={16}
                height={14}
              />
            }
          >
            iOS &gt;
          </ProductButton>
        </motion.div>
      </FadeInView>

      {/* Live Product Preview (YouTube Shorts) */}
      <FadeInView delay={0.2}>
        <div className="flex flex-col items-center text-center mt-[40px] md:mt-[60px]">
          <h3 className="font-semibold text-[22px] md:text-[28px] text-[#3F404D] leading-[125%]">
            영상으로 만나는 <span className="text-[#716BF8]">리티</span>
          </h3>
          <span className="text-[#9AA2AE] text-[14px] md:text-[16px] mt-[10px]">
            실제 앱에서 리티와 함께하는 순간들
          </span>
        </div>
      </FadeInView>

      <div className="flex md:gap-[20px] gap-[14px] flex-wrap justify-center">
        {PRODUCT_VIDEOS.map((video, index) => (
          <ShortsEmbed
            key={video.id}
            videoId={video.id}
            title={video.title}
            delay={index * 0.1}
          />
        ))}
      </div>

      <FadeInView delay={0.2}>
        <button
          onClick={() => window.open(RITTY_YOUTUBE_CHANNEL_URL, "_blank")}
          className="text-[#9AA2AE] text-[14px] md:text-[16px] font-medium cursor-pointer hover:text-[#FF6161] transition-colors duration-300"
        >
          YouTube에서 더 보기 &gt;
        </button>
      </FadeInView>
    </section>
  );
}
