import Image from "next/image";
import RittyMiniIcon from "@/public/ritty-mini-logo.svg";
import InstagramIcon from "@/public/contact-icons/instagram.svg";
import LinkedInIcon from "@/public/contact-icons/linkedin.svg";
import MailIcon from "@/public/contact-icons/mail.svg";
import MailMiniIcon from "@/public/link-icons/mail-icon.svg";
import LinkedInMiniIcon from "@/public/link-icons/linkedin-icon.svg";
import DisquietMiniIcon from "@/public/link-icons/disquiet-icon.svg";
import { useState, useEffect } from "react";
import { Link, PERSONAL_INFO_LINKS } from "@/constants/personal-info";
// import { NotionAPI } from "notion-client";

// sm: 핸드폰, md: 태블릿, xl: 데스크탑

// const ROOT_NOTION_ID = process.env.NEXT_PUBLIC_NOTION_PAGE_ID || "";

type Section = "" | "about us" | "service" | "team" | "contact";

const LineBreakMobileOnly = () => <br className="block sm:hidden" />;

const LinkContainer = ({ linkInfo }: { linkInfo: Link }) => {
  return (
    <button
      className="flex items-center gap-[4px] bg-[#3F404D] rounded-[6px] lg:text-[12px] text-[10px] max-md:text-[12px] text-white py-[3px] px-[5px] w-fit h-fit font-normal hover:bg-[#3F404D]/80 transition-all duration-300"
      onClick={() => window.open(linkInfo.url, "_blank")}
    >
      <Image
        src={
          linkInfo.type === "Mail"
            ? MailMiniIcon
            : linkInfo.type === "LinkedIn"
            ? LinkedInMiniIcon
            : DisquietMiniIcon
        }
        alt={linkInfo.label}
        width={12}
        height={12}
      />
      <span>{linkInfo.label}</span>
    </button>
  );
};

// export const getStaticProps = async () => {
//   const notion = new NotionAPI();
//
//   const recordMap = await notion.getPage(ROOT_NOTION_ID);
//
//   return {
//     props: {},
//     revalidate: 10,
//   };
// };

export default function Home() {
  const [selectedSection, setSelectedSection] = useState<Section>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + window.innerHeight / 2; // 화면 중앙 기준

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

    // 초기 실행
    handleScroll();

    // 스크롤 이벤트 리스너 등록
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
    // setSelectedSection(section);
  };

  return (
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
        <div className="flex justify-center items-center w-[90px] h-[35px] cursor-pointer whitespace-nowrap">
          <button
            className={
              selectedSection === "about us"
                ? "h-[35px] text-[#FF6161] rounded-full bg-[#FFEFEF] py-[7px] px-[12px] max-sm:px-[8px]"
                : "h-[35px] hover:text-[#FF6161] text-[#9AA2AE]"
            }
            onClick={() => handleScrollToSection("about us")}
          >
            About Us
          </button>
        </div>
        <div className="flex justify-center items-center w-[82px] h-[35px] cursor-pointer">
          <button
            className={
              selectedSection === "service"
                ? "h-[35px] text-[#FF6161] rounded-full bg-[#FFEFEF] py-[7px] px-[12px]"
                : "h-[35px] hover:text-[#FF6161] text-[#9AA2AE]"
            }
            onClick={() => handleScrollToSection("service")}
          >
            Service
          </button>
        </div>
        <div className="flex justify-center items-center w-[82px] h-[35px] cursor-pointer">
          <button
            className={
              selectedSection === "team"
                ? "h-[35px] text-[#FF6161] rounded-full bg-[#FFEFEF] py-[7px] px-[12px]"
                : "h-[35px] hover:text-[#FF6161] text-[#9AA2AE]"
            }
            onClick={() => handleScrollToSection("team")}
          >
            Team
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

      {/* About Us Hero Section */}
      <section
        id="about us"
        className="relative w-full flex flex-col lg:items-center md:items-start justify-center h-[100vh] bg-[url('/hero-bg.png')] bg-cover bg-no-repeat bg-[position:65%_-15px] md:bg-[position:65%_0] xl:bg-center"
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* <Image src={HeroImg} alt="heroImg" /> */}
        <div className="relative flex flex-col z-10 max-w-[1120px] w-full h-full mx-auto justify-center pl-[20px] sm:pl-[40px] xl:pl-[0px] leading-[120%] max-sm:leading-[100%]">
          <div className="text-white sm:text-[62px] text-[44px] leading-[120%] font-semibold">
            We Build Worlds
          </div>
          <div className="sm:text-[62px] text-[44px] font-semibold leading-[120%] text-transparent bg-clip-text bg-gradient-to-r from-[#FFBC70] via-[#FF7B7B] to-[#FF52F9]">
         With Virtual Friends
          </div>

          <div className="md:text-[25px] text-white text-[16px] font-normal leading-[132%] bg-[#ffffff40] backdrop-blur-md rounded-[10px] pr-[15px] pl-[12px] md:py-[4px] py-[5px] w-fit md:mb-[50px] mb-[25px] md:mt-[20px] mt-[14px]">
            Digital beings cross the border
            <LineBreakMobileOnly /> into daily life.
          </div>
          <button
            onClick={() => handleScrollToSection("service")}
            className="flex justify-center items-center gap-[10px] pt-[1px] mt-10 bg-[#FF6161] md:w-[168px] w-[130px] md:h-[48px] h-[38px] rounded-full text-white font-semibold md:text-[20px] text-[16px] border-[#FF9292] border-[2px] cursor-pointer hover:shadow-[0_0_20px_#FF616180] transition-all duration-300"
          >
            Learn More &gt;
          </button>
        </div>
      </section>
      {/*<section className="flex md:flex-row flex-col md:py-[150px] py-[100px] bg-white items-center justify-center">*/}
      {/*  <div className="relative">*/}
      {/*    <Image*/}
      {/*      src={"/mission-box.png"}*/}
      {/*      alt="missionBoxImg"*/}
      {/*      width={465}*/}
      {/*      height={278}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className="relative">*/}
      {/*    <Image*/}
      {/*      src={"/vision-box.png"}*/}
      {/*      alt="visionBoxImg"*/}
      {/*      width={465}*/}
      {/*      height={278}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</section>*/}
      {/* Service Section */}
      <section
        id="service"
        className="relative w-full h-auto min-h-screen py-[80px] md:py-0 md:h-[100vh] bg-[#F6F7F9] flex flex-col items-center justify-center gap-[20px] md:gap-[30px] px-[20px] md:px-0"
      >
        <div className="flex flex-col text-center">
          <span className="text-[#9AA2AE] font-medium text-[15px] md:text-[18px]">
            Our Service
          </span>
          <h2 className="font-semibold text-[32px] md:text-[36px] text-[#3F404D] leading-[125%] mt-[10px] md:mt-[15px] mb-[15px] md:mb-[12px]">
            Your own virtual pet,
            <LineBreakMobileOnly />
            <span className="text-[#716BF8]"> Ritty</span>
          </h2>
          <span className="text-[#3F404D] text-[15px] md:text-[18px]">
            Built to chat, care, and grow
            <LineBreakMobileOnly /> with you every day.
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
        <div className="flex md:gap-5 gap-2">
          <button
            onClick={() => window.open("https://play.google.com/store/apps/details?id=com.sammeows.ritty", "_blank")}
            className="flex justify-center items-center gap-[10px] bg-[#6B65FF] md:w-[270px] w-[196px] md:h-[58px] h-[46px] rounded-full text-white font-semibold border-[#ffffff9d] border-[2px] cursor-pointer hover:shadow-[0_0_20px_#6B65FF80] transition-all duration-300 text-[14px] md:text-[20px]"
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
              className="flex justify-center items-center gap-[10px] bg-[#6B65FF] md:w-[270px] w-[196px] md:h-[58px] h-[46px] rounded-full text-white font-semibold border-[#ffffff9d] border-[2px] cursor-pointer hover:shadow-[0_0_20px_#6B65FF80] transition-all duration-300 text-[14px] md:text-[20px]"
          >
            <Image
                src={RittyMiniIcon}
                alt="ritty mini icon"
                width={16}
                height={14}
            />
            IOS &gt;
          </button>
        </div>

      </section>

      {/*<section className="max-w-[1120px] w-full h-full mx-auto text-white sm:text-[62px] text-[44px] font-semibold mt-[120px] pl-[20px] sm:pl-[40px] xl:pl-[0px] leading-[120%] max-sm:leading-[100%]">*/}
      {/*  <h2 className="font-semibold text-[32px] md:text-[36px] text-[#3F404D] leading-[125%] mb-[30px] md:mb-[30px]">*/}
      {/*    SamMeows <LineBreakMobileOnly />*/}
      {/*    Notice Board*/}
      {/*  </h2>*/}
      {/*  <NotionPage recordMap={recordMap} rootPageId={ROOT_NOTION_ID} />*/}
      {/*</section>*/}

      {/* Team Section */}
      <section
        id="team"
        className="w-full h-auto min-h-screen py-[80px] md:py-0 md:h-[100vh] flex flex-col items-center justify-center bg-white text-[#9AA2AE] text-[18px]"
      >
        <span className="text-[#9AA2AE] font-medium text-[15px] md:text-[18px]">
            Our Team
          </span>
        <div className="w-fit h-fit grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 mt-[42px]">
          <div className="w-fit h-full relative">
            <div className="absolute flex flex-col gap-[4px] w-full bottom-[30px] lg:px-[28px] px-[22px] max-md:px-[28px]">
              <span className="text-[#3F404D] lg:text-[20px] text-[18px] max-md:text-[20px] font-medium ">
                Sojeong Choi
              </span>
              <span className="text-[#FF6161] lg:text-[14px] text-[13px] max-md:text-[14px] font-medium -mt-1">
                Co-Founder & CEO
              </span>
              <div className="h-[42px] lg:h-[52px] max-md:h-[52px] flex flex-wrap items-start gap-[4px] w-full lg:mt-[15px] mt-[12px] max-md:mt-[15px]">
                {PERSONAL_INFO_LINKS.Sojeong.links.map((link) => (
                  <LinkContainer key={link.type} linkInfo={link} />
                ))}
              </div>
            </div>
            <Image
              src={"/info-cards/sojeong.png"}
              alt="sojeong's personal info"
              width={337}
              height={404}
            />
          </div>

          <div className="w-fit h-full relative">
            <div className="absolute flex flex-col gap-[4px] w-full bottom-[30px] lg:px-[28px] px-[22px] max-md:px-[28px]">
              <span className="text-[#3F404D] lg:text-[20px] text-[18px] max-md:text-[20px] font-medium ">
                Changjun Mun
              </span>
              <span className="text-[#FF6161] lg:text-[14px] text-[13px] max-md:text-[14px] font-medium -mt-1">
                Co-Founder & CTO
              </span>
              <div className="h-[42px] lg:h-[52px] max-md:h-[52px] flex flex-wrap items-start gap-[4px] w-full lg:mt-[15px] mt-[12px] max-md:mt-[15px]">
                {PERSONAL_INFO_LINKS.Changjoon.links.map((link) => (
                  <LinkContainer key={link.type} linkInfo={link} />
                ))}
              </div>
            </div>
            <Image
              src={"/info-cards/changjun.png"}
              alt="changjoon's personal info"
              width={337}
              height={404}
            />
          </div>

          <div className="w-fit h-full relative">
            <div className="absolute flex flex-col gap-[4px] w-full bottom-[30px] lg:px-[28px] px-[22px] max-md:px-[28px]">
              <span className="text-[#3F404D] lg:text-[20px] text-[18px] max-md:text-[20px] font-medium">
                Jaehoon Kim
              </span>
              <span className="text-[#FF6161] lg:text-[14px] text-[13px] max-md:text-[14px] font-medium -mt-1">
                BE Engineer
              </span>
              <div className="h-[42px] lg:h-[52px] max-md:h-[52px] flex flex-wrap items-start gap-[4px] w-full lg:mt-[15px] mt-[12px] max-md:mt-[15px]">
                {PERSONAL_INFO_LINKS.Jaehoon.links.map((link) => (
                  <LinkContainer key={link.type} linkInfo={link} />
                ))}
              </div>
            </div>
            <Image
              src={"/info-cards/jaehoon.png"}
              alt="jaehoon's personal info"
              width={337}
              height={404}
            />
          </div>
          <div className="w-fit h-full relative">
            <div className="absolute flex flex-col gap-[4px] w-full bottom-[30px] lg:px-[28px] px-[22px] max-md:px-[28px]">
              <span className="text-[#3F404D] lg:text-[20px] text-[18px] max-md:text-[20px] font-medium">
                Hyorin Lim
              </span>
              <span className="text-[#FF6161] lg:text-[14px] text-[13px] max-md:text-[14px] font-medium -mt-1">
                3D Contents Designer
              </span>
              <div className="h-[42px] lg:h-[52px] max-md:h-[52px] flex flex-wrap items-start gap-[4px] w-full lg:mt-[15px] mt-[12px] max-md:mt-[15px]">
                {PERSONAL_INFO_LINKS.Hyorin.links.map((link) => (
                  <LinkContainer key={link.type} linkInfo={link} />
                ))}
              </div>
            </div>
            <Image
              src={"/info-cards/hyorin.png"}
              alt="hyorin's personal info"
              width={337}
              height={404}
            />
          </div>
          <div className="w-fit h-full relative">
            <div className="absolute flex flex-col gap-[4px] w-full bottom-[30px] lg:px-[28px] px-[22px] max-md:px-[28px]">
              <span className="text-[#3F404D] lg:text-[20px] text-[18px] max-md:text-[20px] font-medium">
                Jina Song
              </span>
              <span className="text-[#FF6161] lg:text-[14px] text-[13px] max-md:text-[14px] font-medium -mt-1">
                UX/UI Designer
              </span>
              <div className="h-[42px] lg:h-[52px] max-md:h-[52px] flex flex-wrap items-start gap-[4px] w-full lg:mt-[15px] mt-[12px] max-md:mt-[15px]">
                {PERSONAL_INFO_LINKS.Jina.links.map((link) => (
                  <LinkContainer key={link.type} linkInfo={link} />
                ))}
              </div>
            </div>
            <Image
              src={"/info-cards/jina.png"}
              alt="jina's personal info"
              width={337}
              height={404}
            />
          </div>
          <div className="w-fit h-full relative block md:hidden">
            <div className="absolute flex flex-col gap-[4px] w-full bottom-[30px] lg:px-[28px] px-[22px] max-md:px-[28px]">
              <span className="text-[#3F404D] lg:text-[20px] text-[18px] max-md:text-[20px] font-semibold">
                삼냥이즈
              </span>
              <span className="text-[#FF6161] lg:text-[14px] text-[13px] max-md:text-[14px] font-medium -mt-1">
                sam-meows
              </span>
              <div className="h-[42px] lg:h-[52px] max-md:h-[52px] flex flex-wrap items-start gap-[4px] w-full lg:mt-[15px] mt-[12px] max-md:mt-[15px]">
                {PERSONAL_INFO_LINKS.Sammeows.links.map((link) => (
                  <LinkContainer key={link.type} linkInfo={link} />
                ))}
              </div>
            </div>
            <Image
              src={"/info-cards/sammeows.png"}
              alt="sammeows's personal info"
              width={337}
              height={404}
            />
          </div>
        </div>
      </section>
        <section
          id="contact"
          className="relative w-full h-[100vh] max-sm:py-[145px] flex flex-col justify-center items-center gap-[60px] md:gap-[40px] px-[20px] md:px-0 bg-gradient-to-r from-[#FFF6EC] via-[#FFF2F2] to-[#FFE6FE]"
        >
            <h1 className="text-[#FF6161] md:text-[45px] text-[30px] text-center font-semibold pb-[22px] leading-[120%]">
              Want to know<LineBreakMobileOnly /> more about us?
            </h1>
          <div className="flex flex-col gap-[15px] md:items-start items-center">
            <div className="flex gap-[8px]">
                <Image
                    src={MailIcon}
                    alt="mail icon"
                    className="cursor-pointer hover:opacity-80 transition-all duration-300 w-18"
                    onClick={() =>
                    window.open("mailto:contact@sam-meows.com", "_blank")
                } />
              <Image
                  src={InstagramIcon}
                  alt="instagram icon"
                  className="cursor-pointer hover:opacity-80 transition-all duration-300 w-18"
                  onClick={() =>
                      window.open("https://www.instagram.com/ritty_makers/")
                  }
              />
              <Image
                  src={LinkedInIcon}
                  alt="linkedin icon"
                  className="cursor-pointer hover:opacity-80 transition-all duration-300 w-18"
                  onClick={() =>
                      window.open("https://www.linkedin.com/company/sam-meows/")
                  }
              />
              {/*<Image*/}
              {/*    src={KakaoTalkIcon}*/}
              {/*    alt="kakao talk icon"*/}
              {/*    className="cursor-pointer hover:opacity-80 transition-all duration-300 w-10"*/}
              {/*/>*/}
            </div>
          </div>
          {/* /!*오른쪽 폼*!/*/}
          {/*<div className="md:w-[500px] w-full mx-[20px] md:mx-0 flex flex-col gap-[28px] text-[#2E3238] text-[16px] font-medium bg-white rounded-[28px] py-[32px] px-[24px] shadow-[0px_0px_10px_0px_rgba(116,92,101,0.2)]">*/}
          {/*  <div className="flex flex-col gap-[8px]">*/}
          {/*    <label>Name</label>*/}
          {/*    <input*/}
          {/*      type="text"*/}
          {/*      placeholder="Please enter your name"*/}
          {/*      className="bg-[#F6F7F9] rounded-[12px] py-[13px] px-[18px] placeholder:text-[#9AA2AE] placeholder:text-[16px] font-normal"*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <div className="flex flex-col gap-[8px]">*/}
          {/*    <label>Email</label>*/}
          {/*    <input*/}
          {/*      type="email"*/}
          {/*      placeholder="Please enter your email"*/}
          {/*      className="bg-[#F6F7F9] rounded-[12px] py-[13px] px-[18px] placeholder:text-[#9AA2AE] placeholder:text-[16px] font-normal"*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <div className="flex flex-col gap-[8px]">*/}
          {/*    <label>Is there anything you want to say?</label>*/}
          {/*    <textarea*/}
          {/*      placeholder="Please enter your message"*/}
          {/*      className="bg-[#F6F7F9] rounded-[12px] py-[13px] px-[18px] placeholder:text-[#9AA2AE] placeholder:text-[16px] font-normal resize-none h-[190px]"*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <button className="h-[52px] w-full bg-gradient-to-r from-[#FFA374]  to-[#FF7491] text-white rounded-[12px] py-[18px] font-semibold text-[16px] flex justify-center items-center">*/}
          {/*    Submit*/}
          {/*  </button>*/}
          {/*</div>*/}
        </section>
      <footer className="flex md:flex-row flex-col gap-[100px] md:justify-between items-end py-[150px] h-fit w-full max-w-[1120px] mx-auto">
        {/* 왼쪽 텍스트 */}
        <div className="flex flex-col gap-[15px] text-[#9AA2AE] text-[14px] text-center md:text-left">
            <span
                onClick={() =>
                    window.open(
                        "mailto:contact@sam-meows.com"
                    )
                }
                className="cursor-pointer hover:underlin"
            >
              contact@sam-meows.com
            </span>
           <span
               onClick={() =>
                   window.open(
                       "https://project-meow.notion.site/Terms-of-Service-24c423ba89b680949493ee55f2990bb0?pvs=73"
                   )
               }
               className="cursor-pointer hover:underline"
           >
              Terms of Service
            </span>
          <span
              onClick={() =>
                  window.open(
                      "https://project-meow.notion.site/Terms-of-Service-24c423ba89b680949493ee55f2990bb0?pvs=73"
                  )
              }
              className="cursor-pointer hover:underlin"
          >
              Privacy Policy
            </span>

          </div>

        {/* 오른쪽 텍스트 */}
        <div className="flex flex-col gap-[41px]">
          <div className="flex flex-col items-end gap-[5px] text-[#9AA2AE] text-[14px] font-medium leading-[136%]">
            <div className="font-light">
              2025 © Sam-Meows Inc. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
