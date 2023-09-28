import React from "react";
import { Canvas, useThree, useLoader } from "@react-three/fiber";
import {
  Circle,
  MeshDistortMaterial,
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Sphere,
  Text,
  Text3D,
} from "@react-three/drei";
import { TextureLoader } from "three";

export const HomeCircle = () => {
  const { gl } = useThree();
  gl.useLegacyLights = true;
  const circleTexture = useLoader(TextureLoader, "./img/HomeTransparent.png");
  return (
    <group position={[0, 0, -12]}>
      <Circle args={[1, 64]} scale={[10, 10, 2]}>
        <MeshDistortMaterial
          distort={0.4}
          speed={2}
          map={circleTexture}
          transparent
          displacementScale={0}
          displacementBias={0}
          opacity={2}
          renderOrder={2}
        />
      </Circle>
      <Sphere args={[1, 64, 64]} scale={[10, 10, 5]}>
        <MeshDistortMaterial
          distort={0.4}
          speed={2}
          color="#629a8e"
          transparent
          displacementScale={0.5}
          displacementBias={-0.1}
          opacity={0.5}
          renderOrder={1}
        />
      </Sphere>
    </group>
  );
};
