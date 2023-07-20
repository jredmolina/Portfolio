import React, { forwardRef } from "react";
import { useState } from "react";
import SyncSchedule from "../assets/SyncSchedule.png";
import SplitTheBill from "../assets/SplitTheBill.png";
import PhotoGallery from "../assets/PhotoGallery.png";
import PolySec from "../assets/PolySec.png";
import "../App.css";
import { AnimatePresence, motion } from "framer-motion";
import { Modal } from "./Modal";
import("tailwindcss").Config;

const projects = {
  polySec: {
    name: "PolySec Lab",
    subtitle: "Experience",
    image: PolySec,
    desc: "Worked as an intern for the Cal Poly Pomona PolySec Cybersecurity Research Lab which involved updating the research lab website and working with the graduates students to showcase their projects. ",
    tools: ["HTML", "CSS", "Figma", "Canva"],
    github: null,
    live: "https://www.cpp.edu/~polysec/index.html",
    mobile: false,
  },

  syncSchedule: {
    name: "Sync Schedule",
    subtitle: "Project",
    image: SyncSchedule,
    desc: "A calendar sharing social media site that allows users to maintain their own personal calendars, create groups with other users and create collective, shared calendars, and chat with other users.",
    tools: ["React", "Node.js", "Twilio", "AWS"],
    github: "https://github.com/CS4800-Code-G/Calendar",
    live: "http://syncschedule.com",
    mobile: false,
  },
  photoGallery: {
    name: "Photo Gallery",
    image: PhotoGallery,
    subtitle: "Project",
    desc: "An image gallery mobile app that uses Flickr API to allow users view and search for images from Flickr. ",
    tools: ["Kotlin", "Flickr API"],
    github: "https://github.com/jredmolina/PhotoGallery",
    live: null,
    mobile: true,
  },
  splitTheBill: {
    name: "Split the Bill",
    image: SplitTheBill,
    subtitle: "Project",
    desc: "A mobile app that assists users in splitting restaurant bills that are not so easily divided.",
    tools: ["Kotlin"],
    github: "https://github.com/jredmolina/SplitTheBillApp",
    live: null,
    mobile: true,
  },
};
const Works = forwardRef((props, ref) => {
  const toolsTile = (projectIndex) => {
    const toolsArray = projects[projectIndex].tools;
    const tools = toolsArray.map((tool, index) => (
      <div
        key={index}
        style={{ backgroundColor: "rgba(98, 154, 142, 0.5)" }}
        className="px-[7px] py-[5px] rounded-lg"
      >
        {tool}
      </div>
    ));
    return tools;
  };

  const linksTile = (projectIndex) => {
    const github = projects[projectIndex].github;
    const live = projects[projectIndex].live;
    const buttons = [];

    if (github) {
      const githubButton = (
        <a href={github} target="_blank">
          <button className="rounded-lg w-[150px]">GitHub</button>
        </a>
      );
      buttons.push(githubButton);
    }

    if (live) {
      const liveButton = (
        <a href={live} target="_blank">
          <button className="rounded-lg w-[150px]">View Live</button>
        </a>
      );
      buttons.push(liveButton);
    }

    if (!github && !live) {
      const none = <div>Not authorized to show :)</div>;
      buttons.push(none);
    }
    return buttons;
  };

  const [modalOpen, setModalOpen] = useState({
    splitTheBill: false,
    syncSchedule: false,
    photoGallery: false,
    polySec: false,
  });

  const close = (projectName) => {
    setModalOpen((prevState) => ({
      ...prevState,
      [projectName]: false,
    }));
    console.log("hello");
  };

  const open = (projectName) => {
    setModalOpen((prevState) => ({
      ...prevState,
      [projectName]: true,
    }));
    console.log("hello1");
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      },
    },
  };

  return (
    <div
      id="Works"
      className="h-[100vh] snap-start flex flex-col items-center justify-between max-lg:h-[100%] mb-[500px] max-lg:mb-[400px]"
      ref={ref}
    >
      <div className="h-[100vh] snap-start w-[90%] flex  flex-col items-center justify-center gap-6 max-lg:w-[100%] max-lg:gap-3">
        <h1 className="text-[60px] max-lg:text-[30px]">Projects</h1>
        <img className="h-[5px]" src="./img/line.png"></img>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="photo-grid"
        >
          {/* Split the Bill Tall Card */}
          <motion.div
            variants={item}
            className="grid-div flex flex-col row-span-2 text-black items-center justify-center object-cover w-[100%] h-[auto] rounded-[10px] bg-white"
            onClick={() =>
              modalOpen.splitTheBill
                ? close("splitTheBill")
                : open("splitTheBill")
            }
          >
            <h1 className=" text-[30px] m-2 font-semibold max-lg:text-[20px]">
              Split the Bill
            </h1>
            <img className="h-[87%]" src={SplitTheBill}></img>
          </motion.div>

          {/* SyncSchedule */}
          <motion.div
            variants={item}
            className="grid-div flex flex-col text-black items-center  object-cover justify-center w-[100%] h-[100%] rounded-[10px] bg-white"
            onClick={() =>
              modalOpen.syncSchedule
                ? close("syncSchedule")
                : open("syncSchedule")
            }
          >
            <h1 className="h-[10%] text-[30px] m-2 font-semibold max-lg:text-[20px]">
              SyncSchedule
            </h1>
            <img className="h-[90%] object-contain" src={SyncSchedule}></img>
          </motion.div>

          {/* PhotoGallery Tall Card */}
          <motion.div
            variants={item}
            className="grid-div flex flex-col row-span-2 items-center text-black justify-center object-fill w-[100%] h-[100%] rounded-[10px] bg-white"
            onClick={() =>
              modalOpen.photoGallery
                ? close("photoGallery")
                : open("photoGallery")
            }
          >
            <h1 className=" text-[30px] m-2 font-semibold max-lg:text-[20px]">
              Photo Gallery
            </h1>
            <img className="h-[87%]" src={PhotoGallery}></img>
          </motion.div>

          {/* PolySec */}
          <motion.div
            variants={item}
            className="grid-div flex flex-col items-center object-cover text-black justify-center w-[100%] h-[100%] rounded-[10px] bg-white"
            onClick={() =>
              modalOpen.polySec ? close("polySec") : open("polySec")
            }
          >
            <h1 className=" h-[10%] text-[30px] m-2 font-semibold max-lg:text-[20px]">
              PolySec
            </h1>
            <img className="h-[90%] object-contain" src={PolySec}></img>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence initial={false} wait={true} onExitComplete={() => null}>
        {/* Render each modal */}
        {Object.keys(modalOpen).map((key) => {
          if (modalOpen[key]) {
            // Render the corresponding component based on the key
            switch (key) {
              case "splitTheBill":
                return (
                  <Modal
                    modalOpen={modalOpen.splitTheBill}
                    handleClose={() => close("splitTheBill")}
                    projectData={projects.splitTheBill}
                  />
                );
              case "syncSchedule":
                return (
                  <Modal
                    modalOpen={modalOpen.syncSchedule}
                    handleClose={() => close("syncSchedule")}
                    projectData={projects.syncSchedule}
                  />
                );
              case "photoGallery":
                return (
                  <Modal
                    modalOpen={modalOpen.photoGallery}
                    handleClose={() => close("photoGallery")}
                    projectData={projects.photoGallery}
                  />
                );
              case "polySec":
                return (
                  <Modal
                    modalOpen={modalOpen.polySec}
                    handleClose={() => close("polySec")}
                    projectData={projects.polySec}
                  />
                );
              default:
                return null;
            }
          }
          return null;
        })}
      </AnimatePresence>
    </div>
  );
});

export default Works;
