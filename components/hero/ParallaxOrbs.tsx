"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

interface Orb {
  id: number;
  x: string;
  y: string;
  size: string;
  sizeMd: string;
  gradient: string;
  opacity: number;
  layer: number;
  floatDuration: number;
  floatDelay: number;
}

const orbs: Orb[] = [
  {
    id: 1,
    x: "15%",
    y: "15%",
    size: "80px",
    sizeMd: "120px",
    gradient: "from-[#FF6161] to-[#FF52F9]",
    opacity: 0.25,
    layer: 1,
    floatDuration: 6,
    floatDelay: 0,
  },
  {
    id: 2,
    x: "10%",
    y: "70%",
    size: "60px",
    sizeMd: "100px",
    gradient: "from-[#716BF8] to-[#A78BFA]",
    opacity: 0.2,
    layer: 2,
    floatDuration: 7,
    floatDelay: 1,
  },
  {
    id: 3,
    x: "85%",
    y: "50%",
    size: "40px",
    sizeMd: "60px",
    gradient: "from-[#FFBC70] to-[#FF7B7B]",
    opacity: 0.25,
    layer: 3,
    floatDuration: 5,
    floatDelay: 2,
  },
  {
    id: 4,
    x: "75%",
    y: "20%",
    size: "30px",
    sizeMd: "50px",
    gradient: "from-[#A78BFA] to-[#FF52F9]",
    opacity: 0.15,
    layer: 2,
    floatDuration: 8,
    floatDelay: 0.5,
  },
  {
    id: 5,
    x: "25%",
    y: "85%",
    size: "35px",
    sizeMd: "55px",
    gradient: "from-[#FF7B7B] to-[#FFBC70]",
    opacity: 0.18,
    layer: 1,
    floatDuration: 6.5,
    floatDelay: 1.5,
  },
];

export default function ParallaxOrbs() {
  const mousePosition = useMousePosition();
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getParallaxOffset = (layer: number) => {
    const multipliers = [0.03, 0.05, 0.07];
    const multiplier = multipliers[layer - 1] || 0.03;
    const centerX = windowSize.width / 2;
    const centerY = windowSize.height / 2;

    return {
      x: (mousePosition.x - centerX) * multiplier,
      y: (mousePosition.y - centerY) * multiplier,
    };
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb) => {
        const offset = getParallaxOffset(orb.layer);

        return (
          <motion.div
            key={orb.id}
            className={`absolute rounded-full bg-gradient-to-br ${orb.gradient} blur-sm`}
            style={{
              left: orb.x,
              top: orb.y,
              opacity: orb.opacity,
            }}
            animate={{
              x: offset.x,
              y: [0, -20, 0],
            }}
            transition={{
              x: { type: "spring", stiffness: 30, damping: 20 },
              y: {
                duration: orb.floatDuration,
                repeat: Infinity,
                delay: orb.floatDelay,
                ease: "easeInOut",
              },
            }}
          >
            <div
              className={`w-[${orb.size}] h-[${orb.size}] md:w-[${orb.sizeMd}] md:h-[${orb.sizeMd}]`}
              style={{
                width: orb.size,
                height: orb.size,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
