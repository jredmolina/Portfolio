import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { Cube } from "./Cube";

const Who = () => {
  return (
    <div
      id="Who"
      className="h-[100vh] snap-center flex flex-col items-center justify-between max-sm:h-[100%] mb-[500px] max-sm:mb-[100px]"
    >
      <div className="h-[100vh] snap-center w-[90%] flex gap-[75px] max-sm:flex-col max-sm:w-[100%] ">
        {/* Left Side */}
        <motion.div
          whileInView={{ x: 0 }}
          initial={{ x: -300 }}
          className="w-[50%] flex flex-col gap-[10px] justify-center max-sm:hidden "
        >
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </motion.div>

        {/* Right Side */}
        <motion.div
          whileInView={{ x: 0 }}
          initial={{ x: 300 }}
          className="w-[70%] flex flex-col gap-[10px] justify-center max-sm:w-[100%] max-sm:h-[100%] max-sm:items-center max-sm:p-10"
        >
          <h1 className="text-[40px] max-sm:text-[40px]">Who Am I</h1>
          <div className="flex items-center gap-[30px]">
            <img className="h-[5px]" src="./img/line.png"></img>
          </div>
          <p className="text-[15px] max-sm:text-center max-sm:text-[13px]">
            Hello, my name is Jared Molina.
          </p>
          <p className="text-[15px] max-sm:text-center max-sm:text-[13px]">
            I am a front-end developer based in the Southern California, Los
            Angeles area. I recently graduated summa cum laude in May 2023 from
            the California Polytechnic University, Pomona with my Bachelor’s
            Degree in Science, majoring in Computer Science.
          </p>
          <p className="text-[15px] max-sm:text-center max-sm:text-[13px]">
            I am pursuing my passion in front-end development and software
            engineering and I am currently working as a website development
            intern for the Cal Poly Pomona PolySec Cyber Lab, a highly regarded
            CyberSecurity Lab on the Cal Poly Pomona campus that works on
            projects that deal with a wide-variety of computer science and
            cybersecurity related focuses such as self-driving cars and drone
            defense.
          </p>
          <p className="text-[15px] max-sm:text-center max-sm:text-[13px]">
            When I am not at my computer, I have a number of hobbies including
            watching and analyzing films, tufting rugs, and collecting sneakers.
          </p>
          <p className="text-[15px] max-sm:text-center max-sm:text-[13px]">
            {" "}
            Please don't hesitate to reach out to me!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Who;
