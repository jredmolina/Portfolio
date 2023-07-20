import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

function DropdownMenu() {
  return <div></div>;
}
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed mt-[10px] mb-[10px] top-[0] px-8 w-[100%] z-[10000] flex justify-center  max-lg:w-[100%] max-lg:mb-[10px] max-lg:items-center max-lg:justify-around">
      <div className="w-[90%] px-[0px] text-white">
        <div className="flex items-center justify-between  max-lg:justify-between ">
          <motion.img
            animate={{ x: 0 }}
            initial={{ x: -300 }}
            className="h-[160px] max-lg:h-[110px]"
            src="./img/Signature.png"
          />
          <motion.ul
            animate={{ x: 0 }}
            initial={{ x: 300 }}
            className="flex gap-[20px] text-[20px] justify-around  items-center max-lg:hidden "
          >
            <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <a href="https://github.com/jredmolina" target="_blank">
                <img
                  className="h-[50px] cursor-pointer  max-lg:h-[40px]"
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
                  className="h-[50px] max-lg:h-[40px]"
                  src="./img/linkedin.png"
                ></img>
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <button className="w-[110px] rounded-xl bg-[#82b4aa]  h-[45px] font-[500] shadow-none text-[20px] max-lg:text-[15px] max-lg:w-[80px]  max-lg:h-[40px]">
                Resume
              </button>
            </motion.li>
          </motion.ul>
          {/* <div className="lg:hidden w-[50px]">
            <img src="./img/threebars.png" onClick={() => setOpen(!open)} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
