import React, { forwardRef } from "react";
import NavBar from "./NavBar";
import { motion, useScroll } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { HomeCircle } from "./HomeCircle";

const Hero = forwardRef((props, ref) => {
  const [text] = useTypewriter({
    words: ["Front-End Developer", "Software Engineer", "Web Developer"],
    loop: {},
  });

  return (
    <div
      id="Hero"
      className="h-[100vh] pt-[200px] snap-end flex flex-col items-center justify-between gap-6 mb-[500px]
    max-lg:w-[100%] max-lg:mb-[400px]"
      ref={ref}
    >
      <NavBar></NavBar>
      <div className="w-[100vw] h-[100%] flex flex-col gap-[300px]  justify-center items-center max-lg:w-[100%] max-lg:flex-col max-lg:items-center max-lg:px-0 max-lg:pt-[0px]">
        {/* Text and buttons */}
        <div className="sticky z-20 flex flex-col gap-[20px] w-[1300px] mb-[-400px]  justify-center items-center max-lg:items-center max-lg:m-[0px] ">
          <div className="flex items-center gap-[10px]">
            <img className="h-[5px]" src="./img/line.png"></img>
          </div>
          <div></div>
        </div>

        {/* Three JS */}
        <div className=" w-[100%] justify-center items-center mt-[-200px] h-[100vh] max-lg:w-[100%]  max-lg:h-[100vh] max-lg:mt-[-400px]">
          <Canvas>
            <OrbitControls enableZoom={false} enableRotate={false} />
            <ambientLight intensity={3} />
            <directionalLight position={[5, 2, 1]} />
            <HomeCircle></HomeCircle>
          </Canvas>
        </div>
      </div>
    </div>
  );
});

export default Hero;
