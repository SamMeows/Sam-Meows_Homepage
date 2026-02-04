"use client";

// import dynamic from "next/dynamic";
import FadeInView from "@/components/ui/FadeInView";

// TODO: 3D 리티 모델 추가 예정 - public/models/ritty.glb 파일 필요
// const RittyCanvas = dynamic(() => import("@/components/about/RittyCanvas"), {
//   ssr: false,
// });

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-[100px] md:py-[120px] bg-white flex flex-col items-center justify-center px-[20px] md:px-0 overflow-hidden"
    >
      {/* TODO: 3D 리티 모델 추가 예정
      <RittyCanvas side="left" />
      <RittyCanvas side="right" />
      */}

      <div className="relative z-10 max-w-[900px] w-full flex flex-col items-center text-center">
        <FadeInView>
          <span className="text-[#9AA2AE] font-medium text-[15px] md:text-[18px]">
            About SamMeows
          </span>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h2 className="font-semibold text-[28px] md:text-[36px] text-[#3F404D] leading-[140%] mt-[20px] mb-[40px]">
            AI와 콘텐츠의 결합으로
            <br />
            <span className="text-[#FF6161]">&apos;콘텐츠&apos;</span>, 그 이상의
            가치를 만듭니다.
          </h2>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="text-[#3F404D] text-[16px] md:text-[18px] leading-[180%] mb-[30px] max-w-[700px]">
            각 시대의 시작점에는 한 세대를 풍미하는 새로운 IP들이 탄생했습니다.
            <br />
            AI가 &apos;상호작용&apos;의 패러다임을 바꾸고 있는 지금,
            <br />
            <span className="text-[#716BF8] font-medium">
              사람들의 기억에 영원히 남을 IP는 무엇이 될까요?
            </span>
          </p>
        </FadeInView>

        <FadeInView delay={0.3}>
          <p className="text-[#3F404D] text-[16px] md:text-[18px] leading-[180%]">
            삼냥이즈는 전 세계적으로 사랑받는
            <br />
            <span className="font-semibold">Virtual Being IP</span>를 만들기 위해
            도전하고 있습니다.
          </p>
        </FadeInView>
      </div>
    </section>
  );
}
