import { motion } from "framer-motion";
import { Backdrop } from "./Backdrop";

import React from "react";

export const Modal = ({ handleClose, projectData }) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        dampening: 20,
        stiffness: 200,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal m-auto py-4 px-8 rounded-[12px] flex flex-col items-end bg-white text-black "
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="w-full  h-[90%] flex justify-center ">
          <div className="w-[50%] h-[100%] flex items-center justify-center max-sm:hidden">
            <img
              className={` ${
                projectData.mobile ? "h-full w-auto" : "w-auto h-auto"
              }`}
              src={projectData.image}
            />
          </div>
          <div className="w-[50%] max-sm:w-full">
            <h1 className="font-bold text-[30px] mb-[0px] ">
              {projectData.name}
            </h1>
            <h1 className="font-normal mt-[5px] text-[20px] text-gray-800 ">
              {projectData.subtitle}
            </h1>
            <hr className="mb-[20px]"></hr>
            <p className="text-[20px] ">{projectData.desc}</p>
            <div className="mt-[20px] flex gap-5 w-full">
              {projectData.github && (
                <a href={projectData.github} target="_blank">
                  <button className="rounded-lg w-[150px]  max-sm:w-[120px]">
                    GitHub
                  </button>
                </a>
              )}
              {projectData.live && (
                <a href={projectData.live} target="_blank">
                  <button className="rounded-lg w-[150px] max-sm:w-[120px]">
                    Live Site
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
        <button className="rounded-lg w-[150px]" onClick={handleClose}>
          Close
        </button>
      </motion.div>
    </Backdrop>
  );
};
