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
} from "@react-three/drei";
import { TextureLoader } from "three";

export const Cube = () => {
  const cubeTexture = useLoader(TextureLoader, "./img/CubePhoto.png");
  return (
    <mesh>
      <boxGeometry args={[2.25, 2.25, 2.25]} />
      <meshStandardMaterial map={cubeTexture}></meshStandardMaterial>
    </mesh>
  );
};
