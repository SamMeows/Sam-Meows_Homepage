import Image from "next/image";
import Head from "next/head";
import RittyMiniIcon from "@/public/ritty-mini-logo.svg";
import LinkedInIcon from "@/public/contact-icons/linkedin.svg";
import MailIcon from "@/public/contact-icons/mail.svg";
import { useState, useEffect } from "react";
import { NEWS_ITEMS } from "@/constants/news-items";

type Section = "" | "about" | "product" | "news" | "contact";

const LineBreakMobileOnly = () => <br className="block sm:hidden" />;

export default function Home() {
  const [selectedSection, setSelectedSection] = useState<Section>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (section: Section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>삼냥이즈 SamMeows - 가상 친구와 함께 만드는 세상</title>
        <meta name="description" content="삼냥이즈(SamMeows)는 가상 친구 리티(Ritty)를 만듭니다. 당신과 함께 대화하고, 성장하는 AI 가상 펫을 만나보세요. Digital beings cross the border into daily life." />
        <meta name="keywords" content="삼냥이즈, SamMeows, 리티, Ritty, 가상 펫, 가상 친구, AI 펫, AI 친구, 버추얼 펫, virtual pet, AI companion, digital friend, 챗봇, AI 캐릭터" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sam-meows.com" />
        <meta property="og:title" content="삼냥이즈 SamMeows - 가상 친구와 함께 만드는 세상" />
        <meta property="og:description" content="삼냥이즈(SamMeows)는 가상 친구 리티(Ritty)를 만듭니다. 당신과 함께 대화하고, 성장하는 AI 가상 펫을 만나보세요." />
        <meta property="og:image" content="https://sam-meows.com/og-image.png" />
        <meta property="og:site_name" content="삼냥이즈 SamMeows" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:locale:alternate" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://sam-meows.com" />
        <meta name="twitter:title" content="삼냥이즈 SamMeows - 가상 친구와 함께 만드는 세상" />
        <meta name="twitter:description" content="삼냥이즈(SamMeows)는 가상 친구 리티(Ritty)를 만듭니다. 당신과 함께 대화하고, 성장하는 AI 가상 펫을 만나보세요." />
        <meta name="twitter:image" content="https://sam-meows.com/og-image.png" />

        {/* Additional SEO */}
        <meta name="author" content="삼냥이즈 (SamMeows Inc.)" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Korean" />
        <link rel="canonical" href="https://sam-meows.com" />
      </Head>
      <main className="bg-white">
        {/* Top Navigation Bar */}
        <section className="fixed top-[30px] z-50 flex p-[8px] pl-[20px] font-semibold font-[#9AA2AE] text-[14px] bg-white rounded-full left-1/2 -translate-x-1/2 transition-colors duration-300 shadow-[0_0_20px_#ff616138]">
          <Image
            src={"/sammeows-logo-en.svg"}
            alt="sammeows logo"
            width={107}
            height={16}
            className="-mt-[3px] mr-[15px] hidden md:block"
          />
          <Image
            src={"/sammeows-logo-sm.svg"}
            alt="sammeows logo"
            width={15}
            height={8}
            className="-mt-[3px] mr-[15px] block md:hidden"
          />
          <div className="flex justify-center items-center w-[70px] h-[35px] cursor-pointer whitespace-nowrap">
            <button
              className={
                selectedSection === "about"
                  ? "h-[35px] text-[#FF6161] rounded-full bg-[#FFEFEF] py-[7px] px-[12px] max-sm:px-[8px]"
                  : "h-[35px] hover:text-[#FF6161] text-[#9AA2AE]"
              }
              onClick={() => handleScrollToSection("about")}
            >
              About
            </button>
          </div>
          <div className="flex justify-center items-center w-[82px] h-[35px] cursor-pointer">
            <button
              className={
                selectedSection === "product"
                  ? "h-[35px] text-[#FF6161] rounded-full bg-[#FFEFEF] py-[7px] px-[12px]"
                  : "h-[35px] hover:text-[#FF6161] text-[#9AA2AE]"
              }
              onClick={() => handleScrollToSection("product")}
            >
              Product
            </button>
          </div>
          <div className="flex justify-center items-center w-[70px] h-[35px] cursor-pointer">
            <button
              className={
                selectedSection === "news"
                  ? "h-[35px] text-[#FF6161] rounded-full bg-[#FFEFEF] py-[7px] px-[12px]"
                  : "h-[35px] hover:text-[#FF6161] text-[#9AA2AE]"
              }
              onClick={() => handleScrollToSection("news")}
            >
              News
            </button>
          </div>
          <div className="flex justify-center items-center w-[82px] h-[35px] cursor-pointer">
            <button
              className={
                selectedSection === "contact"
                  ? "h-[35px] text-[#FF6161] rounded-full bg-[#FFEFEF] py-[7px] px-[12px]"
                  : "h-[35px] hover:text-[#FF6161] text-[#9AA2AE]"
              }
              onClick={() => handleScrollToSection("contact")}
            >
              Contact
            </button>
          </div>
        </section>

        {/* Hero Section */}
        <section
          className="relative w-full flex flex-col lg:items-center md:items-start justify-center h-[100vh] bg-[url('/hero-bg.png')] bg-cover bg-no-repeat bg-[position:65%_-15px] md:bg-[position:65%_0] xl:bg-center"
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative flex flex-col z-10 max-w-[1120px] w-full h-full mx-auto justify-center pl-[20px] sm:pl-[40px] xl:pl-[0px] leading-[120%] max-sm:leading-[100%]">
            <div className="text-white sm:text-[62px] text-[44px] leading-[120%] font-semibold">
              Build Worlds
            </div>
            <div className="sm:text-[62px] text-[44px] font-semibold leading-[120%] text-transparent bg-clip-text bg-gradient-to-r from-[#FFBC70] via-[#FF7B7B] to-[#FF52F9]">
              With Virtual Friends
            </div>

            <div className="md:text-[18px] text-white text-[14px] font-normal leading-[160%] bg-[#ffffff40] backdrop-blur-md rounded-[10px] pr-[15px] pl-[12px] py-[12px] w-fit md:mb-[50px] mb-[25px] md:mt-[20px] mt-[14px] max-w-[500px]">
              일방적으로 소비하는 컨텐츠를 넘어,<LineBreakMobileOnly /> 양방향 소통이 가능한 가상의 존재(Being)를 만듭니다.<br />
              그리고 가상의 존재와 함께 즐겁게 뛰어놀 수 있는 놀이터(Place)를 만듭니다.
            </div>
            <button
              onClick={() => handleScrollToSection("about")}
              className="flex justify-center items-center gap-[10px] pt-[1px] mt-10 bg-[#FF6161] md:w-[168px] w-[130px] md:h-[48px] h-[38px] rounded-full text-white font-semibold md:text-[20px] text-[16px] border-[#FF9292] border-[2px] cursor-pointer hover:shadow-[0_0_20px_#FF616180] transition-all duration-300"
            >
              Learn More &gt;
            </button>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="relative w-full min-h-screen py-[100px] md:py-[120px] bg-white flex flex-col items-center justify-center px-[20px] md:px-0"
        >
          <div className="max-w-[900px] w-full flex flex-col items-center text-center">
            <span className="text-[#9AA2AE] font-medium text-[15px] md:text-[18px]">
              About SamMeows
            </span>
            <h2 className="font-semibold text-[28px] md:text-[36px] text-[#3F404D] leading-[140%] mt-[20px] mb-[40px]">
              AI와 컨텐츠의 결합으로<LineBreakMobileOnly /> <span className="text-[#FF6161]">&apos;컨텐츠&apos;</span>, 그 이상의 가치를 만듭니다.
            </h2>

            {/* Timeline Story */}
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[40px] mb-[50px]">
              <div className="flex flex-col items-center p-[24px] bg-[#F6F7F9] rounded-[16px] min-w-[200px]">
                <span className="text-[32px] mb-[8px]">🌐</span>
                <span className="text-[#3F404D] font-medium text-[16px]">인터넷의 등장</span>
                <span className="text-[#9AA2AE] text-[14px]">온라인 게임 시대</span>
              </div>
              <div className="flex flex-col items-center p-[24px] bg-[#F6F7F9] rounded-[16px] min-w-[200px]">
                <span className="text-[32px] mb-[8px]">📱</span>
                <span className="text-[#3F404D] font-medium text-[16px]">스마트폰의 등장</span>
                <span className="text-[#9AA2AE] text-[14px]">모바일 게임 시대</span>
              </div>
              <div className="flex flex-col items-center p-[24px] bg-gradient-to-r from-[#FFF6EC] via-[#FFF2F2] to-[#FFE6FE] rounded-[16px] min-w-[200px] border-2 border-[#FF6161]/20">
                <span className="text-[32px] mb-[8px]">🤖</span>
                <span className="text-[#3F404D] font-medium text-[16px]">AI의 등장</span>
                <span className="text-[#FF6161] text-[14px] font-medium">상호작용의 새 시대</span>
              </div>
            </div>

            <p className="text-[#3F404D] text-[16px] md:text-[18px] leading-[180%] mb-[30px] max-w-[700px]">
              각 시대의 시작점에는 한 세대를 풍미하는 새로운 IP들이 생겨났습니다.<br />
              AI의 등장으로 &apos;상호작용&apos;의 근간을 뒤집게 된 이 시대,<br />
              <span className="text-[#716BF8] font-medium">사람들의 기억 속 잊히지 않을 IP는 과연 무엇이 될까요?</span>
            </p>

            <p className="text-[#3F404D] text-[16px] md:text-[18px] leading-[180%] mb-[40px]">
              삼냥이즈는 전 세계적으로 사랑받는<br />
              <span className="font-semibold">Virtual Being IP</span>를 만들기 위해 도전하고 있습니다.
            </p>

            <div className="bg-gradient-to-r from-[#FF6161] to-[#FF52F9] text-white px-[30px] py-[16px] rounded-[12px] font-medium text-[16px] md:text-[18px]">
              사랑받는 IP를 만들고 싶다면, 삼냥이즈와 함께 해요!
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section
          id="product"
          className="relative w-full h-auto min-h-screen py-[80px] md:py-0 md:h-[100vh] bg-[#F6F7F9] flex flex-col items-center justify-center gap-[20px] md:gap-[30px] px-[20px] md:px-0"
        >
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
          <div className="flex md:gap-5 gap-2 flex-wrap justify-center">
            <button
              onClick={() => window.open("https://ritty.me", "_blank")}
              className="flex justify-center items-center gap-[10px] bg-[#FF6161] md:w-[200px] w-[150px] md:h-[58px] h-[46px] rounded-full text-white font-semibold border-[#FF9292] border-[2px] cursor-pointer hover:shadow-[0_0_20px_#FF616180] transition-all duration-300 text-[14px] md:text-[18px]"
            >
              ritty.me &gt;
            </button>
            <button
              onClick={() => window.open("https://play.google.com/store/apps/details?id=com.sammeows.ritty", "_blank")}
              className="flex justify-center items-center gap-[10px] bg-[#6B65FF] md:w-[200px] w-[150px] md:h-[58px] h-[46px] rounded-full text-white font-semibold border-[#ffffff9d] border-[2px] cursor-pointer hover:shadow-[0_0_20px_#6B65FF80] transition-all duration-300 text-[14px] md:text-[18px]"
            >
              <Image
                src={RittyMiniIcon}
                alt="ritty mini icon"
                width={16}
                height={14}
              />
              Android &gt;
            </button>
            <button
              onClick={() => window.open("https://apps.apple.com/us/app/id6743311040", "_blank")}
              className="flex justify-center items-center gap-[10px] bg-[#6B65FF] md:w-[200px] w-[150px] md:h-[58px] h-[46px] rounded-full text-white font-semibold border-[#ffffff9d] border-[2px] cursor-pointer hover:shadow-[0_0_20px_#6B65FF80] transition-all duration-300 text-[14px] md:text-[18px]"
            >
              <Image
                src={RittyMiniIcon}
                alt="ritty mini icon"
                width={16}
                height={14}
              />
              iOS &gt;
            </button>
          </div>
        </section>

        {/* News Section */}
        <section
          id="news"
          className="w-full min-h-screen py-[80px] md:py-[120px] flex flex-col items-center justify-center bg-white px-[20px] md:px-0"
        >
          <span className="text-[#9AA2AE] font-medium text-[15px] md:text-[18px]">
            News & Media
          </span>
          <h2 className="font-semibold text-[28px] md:text-[36px] text-[#3F404D] leading-[125%] mt-[15px] mb-[50px]">
            삼냥이즈 소식
          </h2>

          <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {NEWS_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => window.open(item.url, "_blank")}
                className="bg-[#F6F7F9] rounded-[16px] p-[24px] cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center gap-[8px] mb-[12px]">
                  <span className={`text-[12px] font-medium px-[8px] py-[2px] rounded-full ${
                    item.type === "video"
                      ? "bg-[#FF6161] text-white"
                      : "bg-[#716BF8] text-white"
                  }`}>
                    {item.type === "video" ? "VIDEO" : "ARTICLE"}
                  </span>
                  <span className="text-[#9AA2AE] text-[13px]">{item.source}</span>
                </div>
                <h3 className="text-[#3F404D] text-[16px] font-medium leading-[150%] line-clamp-2">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="relative w-full h-[100vh] max-sm:py-[145px] flex flex-col justify-center items-center gap-[40px] px-[20px] md:px-0 bg-gradient-to-r from-[#FFF6EC] via-[#FFF2F2] to-[#FFE6FE]"
        >
          <h1 className="text-[#FF6161] md:text-[45px] text-[30px] text-center font-semibold leading-[120%]">
            더 알고 싶으신가요?
          </h1>
          <div className="flex flex-col gap-[20px] items-center">
            <div className="flex gap-[12px]">
              <Image
                src={MailIcon}
                alt="mail icon"
                className="cursor-pointer hover:opacity-80 transition-all duration-300 w-18"
                onClick={() => window.open("mailto:contact@sam-meows.com", "_blank")}
              />
              <Image
                src={LinkedInIcon}
                alt="linkedin icon"
                className="cursor-pointer hover:opacity-80 transition-all duration-300 w-18"
                onClick={() => window.open("https://www.linkedin.com/company/104854511/", "_blank")}
              />
            </div>
            <span className="text-[#3F404D] text-[16px]">contact@sam-meows.com</span>
          </div>
        </section>

        <footer className="flex md:flex-row flex-col gap-[100px] md:justify-between items-end py-[150px] h-fit w-full max-w-[1120px] mx-auto px-[20px] xl:px-0">
          <div className="flex flex-col gap-[15px] text-[#9AA2AE] text-[14px] text-center md:text-left">
            <span
              onClick={() => window.open("mailto:contact@sam-meows.com")}
              className="cursor-pointer hover:underline"
            >
              contact@sam-meows.com
            </span>
            <span
              onClick={() => window.open("https://project-meow.notion.site/Terms-of-Service-24c423ba89b680949493ee55f2990bb0?pvs=73")}
              className="cursor-pointer hover:underline"
            >
              Terms of Service
            </span>
            <span
              onClick={() => window.open("https://project-meow.notion.site/Terms-of-Service-24c423ba89b680949493ee55f2990bb0?pvs=73")}
              className="cursor-pointer hover:underline"
            >
              Privacy Policy
            </span>
          </div>

          <div className="flex flex-col gap-[41px]">
            <div className="flex flex-col items-end gap-[5px] text-[#9AA2AE] text-[14px] font-medium leading-[136%]">
              <div className="font-light">
                2025 © Sam-Meows Inc. All Rights Reserved.
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
