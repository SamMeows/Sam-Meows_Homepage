"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import RittyModel from "./RittyModel";

interface RittyCanvasProps {
  side: "left" | "right";
}

export default function RittyCanvas({ side }: RittyCanvasProps) {
  const isLeft = side === "left";

  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 w-[300px] h-[400px]
                  ${isLeft ? "left-0" : "right-0"}
                  hidden lg:block pointer-events-none`}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Suspense fallback={null}>
          <RittyModel
            position={[isLeft ? -0.5 : 0.5, -1, 0]}
            rotation={[0, isLeft ? 0.3 : -0.3, 0]}
            scale={1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
