"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

type Section = "" | "about" | "product" | "news" | "contact";

interface NavigationProps {
  selectedSection: Section;
  onScrollToSection: (section: Section) => void;
}

const navItems: { id: Section; label: string; width: string }[] = [
  { id: "about", label: "About", width: "70px" },
  { id: "product", label: "Product", width: "82px" },
  { id: "news", label: "News", width: "70px" },
  { id: "contact", label: "Contact", width: "82px" },
];

export default function Navigation({
  selectedSection,
  onScrollToSection,
}: NavigationProps) {
  const { scrollYProgress } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);

  const shadowOpacity = useTransform(scrollYProgress, [0, 0.1], [0.3, 0.6]);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF6161] to-[#FF52F9] z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation Bar */}
      <motion.nav
        className="fixed top-[30px] z-50 flex p-[8px] pl-[20px] font-semibold text-[14px] bg-white rounded-full left-1/2 -translate-x-1/2 transition-colors duration-300"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
        style={{
          boxShadow: hasScrolled
            ? "0 4px 30px rgba(255, 97, 97, 0.25)"
            : "0 0 20px rgba(255, 97, 97, 0.22)",
        }}
      >
        {/* Logo - Desktop */}
        <Image
          src={"/sammeows-logo-en.svg"}
          alt="sammeows logo"
          width={107}
          height={16}
          className="-mt-[3px] mr-[15px] hidden md:block cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
        {/* Logo - Mobile */}
        <Image
          src={"/sammeows-logo-sm.svg"}
          alt="sammeows logo"
          width={15}
          height={8}
          className="-mt-[3px] mr-[15px] block md:hidden cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />

        {/* Nav Items */}
        <div className="flex items-center relative">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-center items-center h-[35px] cursor-pointer whitespace-nowrap"
              style={{ width: item.width }}
            >
              <motion.button
                className={`relative h-[35px] px-[12px] max-sm:px-[8px] rounded-full ${
                  selectedSection === item.id
                    ? "text-[#FF6161]"
                    : "text-[#9AA2AE] hover:text-[#FF6161]"
                }`}
                onClick={() => onScrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {selectedSection === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-[#FFEFEF] rounded-full"
                    layoutId="navIndicator"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </motion.button>
            </div>
          ))}
        </div>
      </motion.nav>
    </>
  );
}
