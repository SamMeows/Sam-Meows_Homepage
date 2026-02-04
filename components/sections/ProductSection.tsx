"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, MouseEvent } from "react";
import FadeInView from "@/components/ui/FadeInView";
import RittyMiniIcon from "@/public/ritty-mini-logo.svg";

const LineBreakMobileOnly = () => <br className="block sm:hidden" />;

interface ProductButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant: "primary" | "secondary";
  icon?: React.ReactNode;
}

function ProductButton({ children, onClick, variant, icon }: ProductButtonProps) {
  return (
    <motion.button
      onClick={onClick}
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
    </motion.button>
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
      className="relative w-full h-auto min-h-screen py-[80px] md:py-0 md:h-[100vh] bg-[#F6F7F9] flex flex-col items-center justify-center gap-[20px] md:gap-[30px] px-[20px] md:px-0"
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
            onClick={() => window.open("https://ritty.me", "_blank")}
          >
            ritty.me &gt;
          </ProductButton>
          <ProductButton
            variant="secondary"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.sammeows.ritty",
                "_blank"
              )
            }
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
            onClick={() =>
              window.open("https://apps.apple.com/us/app/id6743311040", "_blank")
            }
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
    </section>
  );
}
