import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <div className="relative mt-[20px] mb-[50px] top-[0]  w-[100%] z-[10000] flex justify-center  max-sm:w-[100%] max-sm:mb-[10px] max-sm:items-center max-sm:justify-around">
      <div className="w-[1350px] px-[0px] text-white">
        <div className="flex items-center justify-between  max-sm:justify-center ">
          <motion.img
            animate={{ x: 0 }}
            initial={{ x: -300 }}
            className="h-[160px] max-sm:h-[110px]"
            src="./img/Signature.png"
          />
          <motion.ul
            animate={{ x: 0 }}
            initial={{ x: 300 }}
            className="flex gap-[20px] text-[20px] justify-around  items-center max-sm:gap-[5px] "
          >
            <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <a href="https://github.com/jredmolina" target="_blank">
                <img
                  className="h-[50px] cursor-pointer  max-sm:h-[40px]"
                  src="./img/githublogo.png"
                ></img>
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <a
                href="https://www.linkedin.com/in/jaredmolina/"
                target="_blank"
              >
                <img
                  className="h-[50px] max-sm:h-[40px]"
                  src="./img/linkedin.png"
                ></img>
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <button className="w-[110px] rounded-xl bg-[#82b4aa]  h-[45px] font-[500] shadow-none text-[20px] max-sm:text-[15px] max-sm:w-[80px]  max-sm:h-[40px]">
                Resume
              </button>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
