import React from "react";
import { motion, useScroll } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { HomeCircle } from "../components/HomeCircle";
import { Link } from "react-router-dom";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Front-End Developer", "Software Engineer", "Web Developer"],
    loop: {},
  });

  return (
    <div
      id="Hero"
      className=" flex flex-col items-center justify-center gap-2   "
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
          whileInView={{ scale: 1.5 }}
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

        <motion.button
          className=" rounded-lg"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/About">Learn More</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
