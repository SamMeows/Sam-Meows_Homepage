"use client";

import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Group } from "three";

interface RittyModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}

export default function RittyModel({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
}: RittyModelProps) {
  const groupRef = useRef<Group>(null);
  const { scene, animations } = useGLTF("/models/ritty.glb");
  const { actions } = useAnimations(animations, groupRef);

  useEffect(() => {
    const firstAnimation = Object.keys(actions)[0];
    if (firstAnimation && actions[firstAnimation]) {
      actions[firstAnimation].play();
    }
  }, [actions]);

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      <primitive object={scene.clone()} scale={scale} />
    </group>
  );
}
