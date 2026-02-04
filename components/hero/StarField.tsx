"use client";

import { motion, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  layer: 1 | 2 | 3;
  animationDelay: number;
}

interface StarFieldProps {
  count?: number;
}

export default function StarField({ count = 40 }: StarFieldProps) {
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

  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      layer: (Math.floor(Math.random() * 3) + 1) as 1 | 2 | 3,
      animationDelay: Math.random() * 2,
    }));
  }, [count]);

  const getParallaxOffset = (layer: 1 | 2 | 3) => {
    const multipliers = { 1: 0.02, 2: 0.04, 3: 0.06 };
    const multiplier = multipliers[layer];
    const centerX = windowSize.width / 2;
    const centerY = windowSize.height / 2;

    return {
      x: (mousePosition.x - centerX) * multiplier,
      y: (mousePosition.y - centerY) * multiplier,
    };
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => {
        const offset = getParallaxOffset(star.layer);

        return (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
            animate={{
              x: offset.x,
              y: offset.y,
              opacity: [star.opacity, star.opacity * 2, star.opacity],
              scale: [1, 1.2, 1],
            }}
            transition={{
              x: { type: "spring", stiffness: 50, damping: 30 },
              y: { type: "spring", stiffness: 50, damping: 30 },
              opacity: {
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: star.animationDelay,
                ease: "easeInOut",
              },
              scale: {
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: star.animationDelay,
                ease: "easeInOut",
              },
            }}
          />
        );
      })}
    </div>
  );
}
