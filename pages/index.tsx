import Head from "next/head";
import { useState, useEffect } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductSection from "@/components/sections/ProductSection";
import NewsSection from "@/components/sections/NewsSection";
import ContactSection from "@/components/sections/ContactSection";

type Section = "" | "about" | "product" | "news" | "contact";

export default function Home() {
  const [selectedSection, setSelectedSection] = useState<Section>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Check if we're in the Hero section (before the first named section)
      const firstSection = sections[0] as HTMLElement | undefined;
      if (firstSection && scrollPosition < firstSection.offsetTop) {
        setSelectedSection("");
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setSelectedSection(section.id as Section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (section: Section | string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>삼냥이즈 SamMeows - Build Worlds With Virtual Friends</title>
        <meta name="description" content="삼냥이즈(SamMeows)는 단순히 소비하는 콘텐츠를 넘어, 나와 소통하며 교감하는 가상의 존재(Being)를 만듭니다. 그리고 함께 뛰어놀 수 있는 세계(World)를 만듭니다." />
        <meta name="keywords" content="삼냥이즈, SamMeows, 리티, Ritty, 가상 친구, 가상 존재, Virtual Being, Virtual World, AI 친구, 버추얼 펫, virtual pet, AI companion, digital friend, 가상 세계" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sam-meows.com" />
        <meta property="og:title" content="삼냥이즈 SamMeows - Build Worlds With Virtual Friends" />
        <meta property="og:description" content="삼냥이즈(SamMeows)는 단순히 소비하는 콘텐츠를 넘어, 나와 소통하며 교감하는 가상의 존재(Being)를 만듭니다. 그리고 함께 뛰어놀 수 있는 세계(World)를 만듭니다." />
        <meta property="og:image" content="https://sam-meows.com/og-image.png" />
        <meta property="og:site_name" content="삼냥이즈 SamMeows" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:locale:alternate" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://sam-meows.com" />
        <meta name="twitter:title" content="삼냥이즈 SamMeows - Build Worlds With Virtual Friends" />
        <meta name="twitter:description" content="삼냥이즈(SamMeows)는 단순히 소비하는 콘텐츠를 넘어, 나와 소통하며 교감하는 가상의 존재(Being)를 만듭니다. 그리고 함께 뛰어놀 수 있는 세계(World)를 만듭니다." />
        <meta name="twitter:image" content="https://sam-meows.com/og-image.png" />

        {/* Additional SEO */}
        <meta name="author" content="삼냥이즈 (SamMeows Inc.)" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Korean" />
        <link rel="canonical" href="https://sam-meows.com" />
      </Head>

      <main className="bg-white">
        <Navigation
          selectedSection={selectedSection}
          onScrollToSection={handleScrollToSection}
        />
        <HeroSection onScrollToSection={handleScrollToSection} />
        <AboutSection />
        <ProductSection />
        <NewsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
