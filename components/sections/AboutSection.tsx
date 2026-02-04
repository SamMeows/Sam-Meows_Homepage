"use client";

import { motion } from "framer-motion";
import TimelineCard from "@/components/cards/TimelineCard";
import FadeInView from "@/components/ui/FadeInView";

const LineBreakMobileOnly = () => <br className="block sm:hidden" />;

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-[100px] md:py-[120px] bg-white flex flex-col items-center justify-center px-[20px] md:px-0"
    >
      <div className="max-w-[900px] w-full flex flex-col items-center text-center">
        <FadeInView>
          <span className="text-[#9AA2AE] font-medium text-[15px] md:text-[18px]">
            About SamMeows
          </span>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h2 className="font-semibold text-[28px] md:text-[36px] text-[#3F404D] leading-[140%] mt-[20px] mb-[40px]">
            AI와 컨텐츠의 결합으로
            <LineBreakMobileOnly />{" "}
            <span className="text-[#FF6161]">&apos;컨텐츠&apos;</span>, 그 이상의
            가치를 만듭니다.
          </h2>
        </FadeInView>

        {/* Timeline Story */}
        <motion.div
          className="flex flex-col md:flex-row gap-[20px] md:gap-[40px] mb-[50px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <TimelineCard
            icon="🌐"
            title="인터넷의 등장"
            subtitle="온라인 게임 시대"
            delay={0}
          />
          <TimelineCard
            icon="📱"
            title="스마트폰의 등장"
            subtitle="모바일 게임 시대"
            delay={0.15}
          />
          <TimelineCard
            icon="🤖"
            title="AI의 등장"
            subtitle="상호작용의 새 시대"
            isHighlighted
            delay={0.3}
          />
        </motion.div>

        <FadeInView delay={0.3}>
          <p className="text-[#3F404D] text-[16px] md:text-[18px] leading-[180%] mb-[30px] max-w-[700px]">
            각 시대의 시작점에는 한 세대를 풍미하는 새로운 IP들이 생겨났습니다.
            <br />
            AI의 등장으로 &apos;상호작용&apos;의 근간을 뒤집게 된 이 시대,
            <br />
            <span className="text-[#716BF8] font-medium">
              사람들의 기억 속 잊히지 않을 IP는 과연 무엇이 될까요?
            </span>
          </p>
        </FadeInView>

        <FadeInView delay={0.4}>
          <p className="text-[#3F404D] text-[16px] md:text-[18px] leading-[180%] mb-[40px]">
            삼냥이즈는 전 세계적으로 사랑받는
            <br />
            <span className="font-semibold">Virtual Being IP</span>를 만들기 위해
            도전하고 있습니다.
          </p>
        </FadeInView>

        <FadeInView delay={0.5}>
          <motion.div
            className="bg-gradient-to-r from-[#FF6161] to-[#FF52F9] text-white px-[30px] py-[16px] rounded-[12px] font-medium text-[16px] md:text-[18px]"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(255, 97, 97, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            사랑받는 IP를 만들고 싶다면, 삼냥이즈와 함께 해요!
          </motion.div>
        </FadeInView>
      </div>
    </section>
  );
}
