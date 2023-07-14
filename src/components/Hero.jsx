import React from "react";
import NavBar from "./NavBar";
import { motion, useScroll } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { HomeCircle } from "./HomeCircle";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Front-End Developer", "Software Engineer", "Web Developer"],
    loop: {},
  });

  return (
    <section
      id="Hero"
      className="h-[100vh]  snap-start flex flex-col items-center justify-between gap-6 mb-[500px]
    max-sm:w-[100%] max-sm:mb-[200px]"
    >
      <NavBar></NavBar>
      <div className="w-[100vw] h-[100%] flex flex-col gap-[300px]  justify-center items-center max-sm:w-[100%] max-sm:flex-col max-sm:items-center max-sm:px-0 max-sm:pt-[0px]">
        {/* Text and buttons */}
        <div className="sticky z-20 flex flex-col gap-[20px] w-[1300px] mb-[-400px]  justify-center items-center max-sm:items-center max-sm:m-[0px] ">
          <motion.h1
            whileInView={{ scale: 1 }}
            initial={{ scale: 0 }}
            className="text-[100px] max-sm:text-[40px] leading-none"
          >
            Hi, I'm <strong>Jared</strong>
          </motion.h1>
          <div className="flex items-center gap-[10px]">
            <img className="h-[5px]" src="./img/line.png"></img>
          </div>
          <div>
            <p className="text-[30px] font-lighter max-sm:text-[20px]">
              <span className="drop-shadow-[0_10px_8px_rgba(0,0,0,0.2)]">
                I am a
              </span>
              <span> {text}</span>
              <span>
                <Cursor />
              </span>
            </p>
          </div>
        </div>

        {/* Three JS */}
        <div className=" w-[100%] justify-center items-center mt-[-200px] h-[100vh] max-sm:w-[100%]  max-sm:h-[100vh]">
          <Canvas>
            <OrbitControls enableZoom={false} enableRotate={false} />
            <ambientLight intensity={3} />
            <directionalLight position={[5, 2, 1]} />
            <HomeCircle></HomeCircle>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;
