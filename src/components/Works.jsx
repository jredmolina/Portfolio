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
  };

  const open = (projectName) => {
    setModalOpen((prevState) => ({
      ...prevState,
      [projectName]: true,
    }));
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
      className=" flex flex-col items-center justify-between mb-[3000px] px-[50px] max-lg:h-[100%] lg:mb-[400px] lg:snap-start"
      ref={ref}
    >
      <div className="w-[90%] flex  flex-col items-center justify-start gap-2 max-lg:w-[100%] max-lg:gap-3 lg:snap-center">
        <h1 className="text-[40px] max-lg:text-[30px]">Works</h1>
        <img className="h-[5px]" src="./img/line.png"></img>
      </div>

      <div className="flex flex-wrap   justify-center items-center gap-[100px] py-[50px]">
        {/* Sync Schedule */}
        <div className="flex flex-col items-center gap-2 justify-center lg:snap-center lg:flex-row">
          <img
            className="w-[450px] h-[300px] max-sm:w-[370px] max-sm:h-[250px]"
            src={SyncSchedule}
            alt=""
          ></img>
          <div className=" w-[400px] h-[375px] px-[30px] py-[15px] bg-black/50 rounded-md max-sm:w-[350px]">
            <h1 className="text-[25px] font-bold">Sync Schedule</h1>
            <p className=" text-[17px] font-light">
              React | Node.js | Twilio | AWS
            </p>
            <p className="mt-[10px] text-[17px]">
              A calendar sharing social media site that allows users to maintain
              their own personal calendars, create groups with other users and
              create collective, shared calendars, and chat with other users.
            </p>
            <div className="flex gap-5 mt-[20px]">
              <button className="rounded-md">Live Site</button>
              <button className="rounded-md">GitHub</button>
            </div>
          </div>
        </div>

        {/* PolySec */}
        <div className="flex flex-col items-center gap-2 justify-center  lg:snap-center lg:flex-row">
          <img
            className="w-[450px] h-[300px] max-sm:w-[370px] max-sm:h-[250px]"
            src={PolySec}
            alt=""
          ></img>
          <div className=" w-[400px] h-[375px] px-[30px] py-[15px] bg-black/50 rounded-md max-sm:w-[350px] ">
            <h1 className="text-[25px] font-bold">PolySec</h1>
            <p className=" text-[17px] font-light">
              HTML | CSS | Figma | Canva
            </p>
            <p className="mt-[10px] text-[17px]">
              Worked as an intern for the Cal Poly Pomona PolySec Cybersecurity
              Research Lab which involved updating the research lab website and
              working with the graduates students to showcase their projects.
            </p>
            <div className="flex gap-5 mt-[20px]">
              <button className="rounded-md">Live Site</button>
            </div>
          </div>
        </div>

        {/* Split the Bill */}
        <div className="flex  flex-col items-center gap-2 justify-center lg:snap-center lg:flex-row">
          <img className="h-[500px] " src={SplitTheBill} alt=""></img>
          <div className="w-[400px] h-[375px] px-[30px] py-[15px] bg-black/50 rounded-md max-sm:w-[350px]">
            <h1 className="text-[25px] font-bold">Split The Bill</h1>
            <p className=" text-[17px] font-light">Kotlin</p>
            <p className="mt-[10px] text-[17px]">
              A mobile app that assists users in splitting restaurant bills that
              are not so easily divided.
            </p>
            <div className="flex gap-5 mt-[20px]">
              <button className="rounded-md">GitHub</button>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="flex flex-col gap-2 items-center justify-center lg:snap-center lg:flex-row">
          <img className="h-[500px]" src={PhotoGallery} alt=""></img>
          <div className=" w-[400px] h-[375px] px-[30px] py-[15px] bg-black/50 rounded-md max-sm:w-[350px]">
            <h1 className="text-[25px] font-bold">Photo Gallery</h1>
            <p className=" text-[17px] font-light">Kotlin | Flickr API</p>
            <p className="mt-[10px] text-[17px]">
              An image gallery mobile app that uses Flickr API to allow users
              view and search for images from Flickr.
            </p>
            <div className="flex gap-5 mt-[20px]">
              <button className="rounded-md">GitHub</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Works;
