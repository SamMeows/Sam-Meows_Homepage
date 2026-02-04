"use client";

import { motion } from "framer-motion";
import FadeInView from "@/components/ui/FadeInView";

interface FooterLinkProps {
  children: React.ReactNode;
  onClick: () => void;
  delay?: number;
}

function FooterLink({ children, onClick, delay = 0 }: FooterLinkProps) {
  return (
    <motion.span
      className="cursor-pointer hover:underline"
      onClick={onClick}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ x: 5 }}
    >
      {children}
    </motion.span>
  );
}

export default function Footer() {
  return (
    <footer className="flex md:flex-row flex-col gap-[100px] md:justify-between items-end py-[150px] h-fit w-full max-w-[1120px] mx-auto px-[20px] xl:px-0">
      <div className="flex flex-col gap-[15px] text-[#9AA2AE] text-[14px] text-center md:text-left">
        <FooterLink
          onClick={() => window.open("mailto:contact@sam-meows.com")}
          delay={0}
        >
          contact@sam-meows.com
        </FooterLink>
        <FooterLink
          onClick={() =>
            window.open(
              "https://project-meow.notion.site/Terms-of-Service-24c423ba89b680949493ee55f2990bb0?pvs=73"
            )
          }
          delay={0.1}
        >
          Terms of Service
        </FooterLink>
        <FooterLink
          onClick={() =>
            window.open(
              "https://project-meow.notion.site/Terms-of-Service-24c423ba89b680949493ee55f2990bb0?pvs=73"
            )
          }
          delay={0.2}
        >
          Privacy Policy
        </FooterLink>
      </div>

      <FadeInView delay={0.3} direction="left">
        <div className="flex flex-col gap-[41px]">
          <div className="flex flex-col items-end gap-[5px] text-[#9AA2AE] text-[14px] font-medium leading-[136%]">
            <motion.div
              className="font-light"
              whileHover={{ scale: 1.02 }}
            >
              2025 © Sam-Meows Inc. All Rights Reserved.
            </motion.div>
          </div>
        </div>
      </FadeInView>
    </footer>
  );
}
