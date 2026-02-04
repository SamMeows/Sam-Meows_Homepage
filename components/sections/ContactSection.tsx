"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeInView from "@/components/ui/FadeInView";
import LinkedInIcon from "@/public/contact-icons/linkedin.svg";
import MailIcon from "@/public/contact-icons/mail.svg";
import InstagramIcon from "@/public/contact-icons/instagram.svg";
import DiscordIcon from "@/public/contact-icons/discord.svg";
import KakaoTalkIcon from "@/public/contact-icons/kakaotalk.svg";

interface SocialIconProps {
  icon: string;
  alt: string;
  onClick: () => void;
  delay?: number;
}

function SocialIcon({ icon, alt, onClick, delay = 0 }: SocialIconProps) {
  return (
    <motion.div
      className="cursor-pointer"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay,
      }}
      whileHover={{
        scale: 1.2,
        y: -5,
      }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      <Image
        src={icon}
        alt={alt}
        className="w-18 hover:opacity-80 transition-all duration-300"
      />
    </motion.div>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full h-[100vh] max-sm:py-[145px] flex flex-col justify-center items-center gap-[40px] px-[20px] md:px-0 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#FFF6EC] via-[#FFF2F2] to-[#FFE6FE]"
        animate={{
          background: [
            "linear-gradient(90deg, #FFF6EC 0%, #FFF2F2 50%, #FFE6FE 100%)",
            "linear-gradient(90deg, #FFE6FE 0%, #FFF6EC 50%, #FFF2F2 100%)",
            "linear-gradient(90deg, #FFF2F2 0%, #FFE6FE 50%, #FFF6EC 100%)",
            "linear-gradient(90deg, #FFF6EC 0%, #FFF2F2 50%, #FFE6FE 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-[30px] md:gap-[40px]">
        {/* Label */}
        <FadeInView>
          <span className="text-[#9AA2AE] font-medium text-[15px] md:text-[18px]">
            Get In Touch
          </span>
        </FadeInView>

        {/* Title */}
        <FadeInView delay={0.1}>
          <motion.h1
            className="text-[#FF6161] md:text-[45px] text-[30px] text-center font-semibold leading-[120%]"
            animate={{
              textShadow: [
                "0 0 0px rgba(255, 97, 97, 0)",
                "0 0 20px rgba(255, 97, 97, 0.3)",
                "0 0 0px rgba(255, 97, 97, 0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            더 알고 싶으신가요?
          </motion.h1>
        </FadeInView>

        {/* Description */}
        <FadeInView delay={0.2}>
          <p className="text-[#3F404D] text-[15px] md:text-[18px] text-center max-w-[400px] leading-[160%] whitespace-nowrap">
            협업, 제안, 또는 궁금한 점이 있으시면 언제든 연락주세요.
          </p>
        </FadeInView>

        {/* Social Icons */}
        <div className="flex gap-[12px] md:gap-[16px]">
          <SocialIcon
            icon={MailIcon}
            alt="mail icon"
            onClick={() => window.open("mailto:contact@sam-meows.com", "_blank")}
            delay={0.3}
          />
          <SocialIcon
            icon={LinkedInIcon}
            alt="linkedin icon"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/104854511/",
                "_blank"
              )
            }
            delay={0.35}
          />
          <SocialIcon
            icon={InstagramIcon}
            alt="instagram icon"
            onClick={() =>
              window.open("https://www.instagram.com/ritty_makers/", "_blank")
            }
            delay={0.4}
          />
          <SocialIcon
            icon={DiscordIcon}
            alt="discord icon"
            onClick={() =>
              window.open("https://discord.com/invite/wghaFYCkCV", "_blank")
            }
            delay={0.45}
          />

        </div>

        {/* CTA Button */}
        <FadeInView delay={0.55}>
          <motion.button
            onClick={() => window.open("mailto:contact@sam-meows.com", "_blank")}
            className="flex justify-center items-center md:w-[200px] w-[160px] md:h-[58px] h-[48px] rounded-full font-semibold text-white cursor-pointer text-[14px] md:text-[18px]"
            style={{
              background: "linear-gradient(90deg, #FF6161 0%, #FF52F9 100%)",
            }}
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: "0 0 25px rgba(255, 97, 97, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            문의하기
          </motion.button>
        </FadeInView>

      </div>
    </section>
  );
}
