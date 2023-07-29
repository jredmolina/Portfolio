import React, { forwardRef } from "react";
import NavBar from "./NavBar";
import { motion, useScroll } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { HomeCircle } from "./HomeCircle";

const Hero = forwardRef(({ nextRef }, ref) => {
  const [text] = useTypewriter({
    words: ["Front-End Developer", "Software Engineer", "Web Developer"],
    loop: {},
  });

  const scrollToNextComponent = (nextRef2) => {
    nextRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="Hero"
      className="h-[100vh] pt-[120px] mb-[500px] flex flex-col items-center justify-center gap-2 snap-center max-sm:py-[50px]"
      ref={ref}
    >
      {/* Three JS */}
      <div className="w-[500px] h-[500px] ">
        <Canvas>
          <OrbitControls enableZoom={false} enableRotate={false} />
          <ambientLight intensity={3} />
          <directionalLight position={[5, 2, 1]} />
          <HomeCircle></HomeCircle>
        </Canvas>
      </div>

      {/* Hero Page Text */}
      <div className="flex flex-col items-center gap-4">
        {/* Large Name Text */}
        <motion.h1
          whileInView={{ scale: 1 }}
          initial={{ scale: 0 }}
          className="text-[60px] max-lg:text-[40px] leading-none list-none"
        >
          Hi, I'm <strong>Jared</strong>
        </motion.h1>
        <div className="flex items-center gap-[10px]">
          <img className="h-[5px]" src="./img/line.png"></img>
        </div>

        {/* Typing Subtitle Text */}
        <div>
          <p className="text-[30px] font-lighter max-lg:text-[20px]">
            <span className="drop-shadow-[0_10px_8px_rgba(0,0,0,0.2)]">
              I am a
            </span>
            <span> {text}</span>
            <span>
              <Cursor />
            </span>
          </p>
        </div>

        <button
          className=" rounded-lg"
          onClick={() => scrollToNextComponent({ nextRef2: nextRef })}
        >
          Learn More
        </button>
      </div>
    </div>
  );
});

export default Hero;
