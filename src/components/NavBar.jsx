import React from "react";
import resume from "../assets/Resume2024.pdf";
import close from "../assets/closeWhite.png";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const NavBar = ({ heroRef, whoRef, worksRef, contactRef }) => {
  const scrollToComponent = ({ ref }) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const [menu, setMenu] = useState(false);

  const closeMenu = () => {
    setMenu(false);
  };

  const openMenu = () => {
    setMenu(true);
    console.log(menu);
  };

  const slideIn = {
    hidden: {
      x: 200,
    },
    visible: {
      x: 0,
      transition: { ease: "anticipate", duration: 0.5 },
    },
    exit: {
      x: 200,
      transition: { ease: "anticipate", duration: 0.5 },
    },
  };
  return (
    <div>
      <div className="fixed mt-[10px] top-[0]  w-[100%] z-[10000] px-2 flex justify-between items-center">
        {/* Logo  */}
        <motion.img
          animate={{ x: 0 }}
          initial={{ x: -300 }}
          className="h-[160px] max-lg:h-[110px]"
          src="./img/Signature.png"
        />

        {/* Nav Bar Links */}
        <motion.ul className="flex gap-10 text-[25px] max-md:hidden">
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-[#98d2c6] cursor-pointer"
            onClick={() => scrollToComponent({ ref: heroRef })}
          >
            Home
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-[#98d2c6] cursor-pointer"
            onClick={() => scrollToComponent({ ref: whoRef })}
          >
            About
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-[#98d2c6] cursor-pointer"
            onClick={() => scrollToComponent({ ref: worksRef })}
          >
            Works
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-[#98d2c6] cursor-pointer"
            onClick={() => scrollToComponent({ ref: contactRef })}
          >
            Contact
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-[#98d2c6] cursor-pointer"
          >
            <a href={resume} download="Resume" target="_blank">
              Resume
            </a>
          </motion.li>
        </motion.ul>
        {/* External Links */}
        <motion.ul
          animate={{ x: 0 }}
          initial={{ x: 300 }}
          className="flex gap-[20px] text-[20px] justify-around  items-center max-lg:hidden "
        >
          {/* Github */}
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <a href="https://github.com/jredmolina" target="_blank">
              <img
                className="h-[50px] cursor-pointer  max-lg:h-[40px]"
                src="./img/githublogo.png"
              ></img>
            </a>
          </motion.li>
          {/* LinkedIn */}
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <a href="https://www.linkedin.com/in/jaredmolina/" target="_blank">
              <img
                className="h-[50px] max-lg:h-[40px]"
                src="./img/linkedin.png"
              ></img>
            </a>
          </motion.li>
        </motion.ul>
        <div className="lg:hidden w-[40px]">
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            src="./img/threebars.png"
            className="cursor-pointer"
            onClick={openMenu}
          />
        </div>
      </div>
      <AnimatePresence>
        {menu ? (
          <motion.div
            className="absolute z-[10000] right-0 w-[200px] bg-[#629a8e] h-[100vh] p-5 flex flex-col items-end justify-start"
            variants={slideIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <img
              className="w-[50px] mt-[15px] "
              src={close}
              onClick={closeMenu}
            ></img>
            <ul className="text-[25px] mt-10 text-right">
              <li
                className="cursor-pointer mb-2"
                onClick={() => {
                  scrollToComponent({ ref: heroRef });
                  closeMenu();
                }}
              >
                Home
              </li>
              <li
                className="cursor-pointer mb-2"
                onClick={() => {
                  scrollToComponent({ ref: whoRef });
                  closeMenu();
                }}
              >
                About
              </li>
              <li
                className="cursor-pointer mb-2"
                onClick={() => {
                  scrollToComponent({ ref: worksRef });
                  closeMenu();
                }}
              >
                Works
              </li>
              <li
                className="cursor-pointer mb-2"
                onClick={() => {
                  scrollToComponent({ ref: contactRef });
                  closeMenu();
                }}
              >
                Contact
              </li>
              <li
                className="cursor-pointer mb-2"
                onClick={() => {
                  closeMenu();
                }}
              >
                <a href={resume} download="Resume" target="_blank">
                  Resume
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-3 items-end justify-start">
              <a
                href="https://github.com/jredmolina"
                target="_blank"
                onClick={() => {
                  closeMenu();
                }}
              >
                <img
                  className="h-[50px] cursor-pointer  "
                  src="./img/githublogo.png"
                ></img>
              </a>
              <a
                href="https://www.linkedin.com/in/jaredmolina/"
                target="_blank"
                onClick={() => {
                  closeMenu();
                }}
              >
                <img
                  className="h-[50px] cursor-pointer"
                  src="./img/linkedin.png"
                ></img>
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
