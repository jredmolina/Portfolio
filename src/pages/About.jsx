import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { Cube } from "../components/Cube";

const Who = () => {
  return (
    <div
      id="Who"
      className="flex flex-col  flex-grow h-full  items-center justify-center max-lg:mt-[20px]  "
    >
      <div className=" w-[90%] flex gap-[75px] px-[150px] max-lg:flex-col max-sm:px-[5px] ">
        {/* Left Side */}
        <motion.div
          whileInView={{ x: 0 }}
          initial={{ x: -300 }}
          className="w-[50%] flex flex-col gap-[10px] justify-center max-lg:hidden "
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
          className=" w-[50%] flex flex-col gap-[10px] justify-center max-lg:w-[100%] max-lg:h-[100%] max-lg:items-center "
        >
          <h1 className="text-[40px] max-lg:text-[40px]">Who Am I</h1>
          <div className="flex items-center gap-[30px]">
            <img className="h-[5px]" src="./img/line.png"></img>
          </div>
          <p className="text-[18px] max-lg:text-center max-lg:text-[13px]">
            Hello, my name is Jared Molina.
          </p>
          <p className="text-[18px] max-lg:text-center max-lg:text-[13px]">
            I am a front-end developer based in the Southern California, Los
            Angeles area. I recently graduated summa cum laude in May 2023 from
            the California Polytechnic University, Pomona with my Bachelor’s
            Degree in Science, majoring in Computer Science.
          </p>
          <p className="text-[18px] max-lg:text-center max-lg:text-[13px]">
            I am pursuing my passion in front-end development and software
            engineering and I am currently working as a website development
            intern for the Cal Poly Pomona PolySec Cyber Lab, a highly regarded
            CyberSecurity Lab on the Cal Poly Pomona campus that works on
            projects that deal with a wide-variety of computer science and
            cybersecurity related focuses such as self-driving cars and drone
            defense.
          </p>
          <p className="text-[18px] max-lg:text-center max-lg:text-[13px]">
            When I am not at my computer, I have a number of hobbies including
            watching and analyzing films, tufting rugs, and collecting sneakers.
          </p>
          <p className="text-[18px] max-lg:text-center max-lg:text-[13px]">
            {" "}
            Please don't hesitate to reach out to me!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Who;
