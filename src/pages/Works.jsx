import React from "react";
import SyncSchedule from "../assets/SyncSchedule.png";
import SplitTheBill from "../assets/SplitTheBill.png";
import PhotoGallery from "../assets/PhotoGallery.png";
import PolySec from "../assets/PolySec.png";
import HypeFactor from "../assets/HypeFactor.png";
import Store from "../assets/Store.png";
import "../App.css";
import { AnimatePresence, motion } from "framer-motion";
import("tailwindcss").Config;

const projects = {
  store: {
    name: "E-Commerce Store",
    image: Store,
    desc: "A full stack E-Commerce Store Application that allows users to browse through different categories of items, filter and sort items by different criteria, view individual items, and add items to their cart.",
    github: "https://github.com/jredmolina/JM-Ecommerce-Store",
  },
  hypeFactor: {
    name: "HypeFactorAI",
    image: HypeFactor,
    desc: "Lead front-end developer and project manager for HypeFactorAI, a marketing platform that helps businesses and individuals create and manage their marketing brand identity, generating assets through the use of AI",
    github: "https://github.com/CS4800-Code-G/Calendar",
    live: "http://hypefactor.ai",
  },
  syncSchedule: {
    name: "Sync Schedule",
    image: SyncSchedule,
    desc: "A calendar sharing social media site that allows users to maintain their own personal calendars, create groups with other users and create collective, shared calendars, and chat with other users.",
    github: "https://github.com/CS4800-Code-G/Calendar",
    live: "http://syncschedule.com",
  },
  sneakersWebsite: {
    name: "Sneakers Website",
    desc: "A landing page for an online sneakers store website showcasing animated images and responsive design.  ",
    github: "https://github.com/jredmolina/Sneakers-Website",
    live: "https://dazzling-hotteok-85b510.netlify.app/",
  },
  splitTheBill: {
    name: "Split the Bill",
    desc: "A mobile app that assists users in splitting restaurant bills that are not so easily divided.",
    github: "https://github.com/jredmolina/SplitTheBillApp",
  },
  pokeDex: {
    name: "Poke-Dex",
    desc: "Web application built using React that uses the PokeAPI to be able to search for Pokemon by name and display their type, height, and weight and allowing filters based on type and weight class",
    github: "https://github.com/jredmolina/PokeDex",
  },
  USCyberBridge: {
    name: "US Cyber Bridge",
    desc: "A multi-page website for the US Cyber Bridge, a national education organization sponsored by the National Science foundation that works to educate students in cybersecurity.",
    live: "https://www.uscyberbridge.com/index.html",
  },
  CACyberBridge: {
    name: "California Cyber Bridge",
    desc: "A multi-page website for the US Cyber Bridge, a education organization sponsored by the National Science foundation that works to educate students in cybersecurity, focused on students based in California.",
    live: "https://cacyberbridge.com/",
  },
  NetflixClone: {
    name: "JaredFlix",
    desc: "A comprehensive web application that replicates the core features of the popular streaming platform, Netflix, designed to provide a seamless user experience with full responsiveness, integrated API and database, secure login authentication, and media playback capabilities.",
    github: "https://github.com/jredmolina/jred-flix",
  },
  NexGenWireless: {
    name: "NexGenWireless",
    desc: "A multi-page website for Cal Poly Pomona's NexGenWireless, a education organization sponsored by the Air Force Research Lab and US Air Force that works towards developing Computer Science and Cybersecurity initiatives and project for students.",
    github: "https://github.com/jredmolina/jred-flix",
    live: "https://www.cppnexgenwireless.org/index.html",
  },
};
const Works = () => {
  return (
    <div className="mb-12 flex flex-col justify-center items-center">
      <motion.div
        whileInView={{ x: 0 }}
        initial={{ x: -300 }}
        className="flex flex-col gap-[15px] w-full px-5 mb-12"
      >
        <div className="flex  flex-col items-center justify-center  gap-2  ">
          <h1 className=" text-3xl md:text-4xl ">Featured Projects</h1>
          <img className="h-[5px]" src="./img/line.png"></img>
        </div>

        {/* Sync Schedule */}
        <div className="flex flex-col items-center justify-center gap-5 my-8 lg:flex-row lg:min-w-[1050px] lg:mb-0">
          <img
            className="w-[750px] h-auto rounded-lg max-md:hidden  "
            alt=""
            src={HypeFactor}
          />
          {/* Project Content */}
          <div className=" flex flex-col justify-center items-center w-[100%] mx-5 rounded-m lg:w-[400px] lg:py-[15px] lg:ml-[-70px] lg:text-right max-md:justify-start lg:items-end   ">
            <h1 className="text-2xl md:text-3xl font-bold">
              {projects.hypeFactor.name}
            </h1>
            <p className="text-lg md:text-xl font-light">
              React | PHP | MySQL | AWS
            </p>
            <div className="bg-black/70 rounded-md p-5 max-w-[750px]">
              <p className="text-md">{projects.hypeFactor.desc}</p>
            </div>
            {/* Icons */}
            <div className="flex items-center justify-start gap-2 mt-3 lg:justify-end">
              <a href={projects.hypeFactor.live} target="_blank">
                <button className="rounded-md w-[125px] h-[40px] ">
                  Live Site
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* E-Commerce Store */}
        <div className="flex flex-col-reverse items-center  gap-5 justify-center  lg:flex-row lg:min-w-[1050px]">
          {/* Project Content */}
          <div className="flex flex-col justify-center items-center rounded-m lg:w-[400px] z-[5] lg:h-[575px] lg:py-[15px] lg:mr-[-50px] lg:text-left lg:items-start max-md:justify-start ">
            <h1 className="text-2xl md:text-3xl font-bold">
              {projects.store.name}
            </h1>
            <p className="text-lg md:text-xl font-light">
              React | Redux | Strapi | Sass
            </p>
            <div className="bg-black/70 rounded-md p-[20px] max-w-[750px]">
              <p className="text-md ">{[projects.store.desc]}</p>
            </div>
            {/* Icons */}
            <div className="flex gap-2 mt-3 justify-start">
              <a href={projects.store.github} target="_blank">
                <button className="rounded-md w-[125px] h-[40px]">
                  GitHub
                </button>
              </a>
            </div>
          </div>
          <img
            className="w-[750px] h-auto rounded-lg max-md:hidden"
            src={projects.store.image}
            alt=""
          />
        </div>
      </motion.div>

      {/* PROFESSIONAL WORKS */}
      <motion.div
        whileInView={{ x: 0 }}
        initial={{ x: 300 }}
        className="flex flex-wrap flex-col gap-5 mb-12  px-5  max-w-[1200px]  "
      >
        <div className="flex  flex-col items-center justify-center gap-1 max-lg:w-[100%] max-lg:gap-3 ">
          <h1 className="text-3xl md:text-4xl ">Professional Works</h1>
          <img className="h-[5px]" src="./img/line.png"></img>
        </div>

        <div className="grid grid-cols-1 gap-[10px]  md:grid-cols-2">
          <div className="flex flex-col justify-between items-left bg-black/70 rounded-md p-[20px]">
            <div className="flex flex-col mb-2">
              <h1 className=" font-bold text-[20px]">
                {projects.NexGenWireless.name}
              </h1>
              <p className=" text-[17px] font-light pb-[5px]">
                HTML | CSS | JavaScript
              </p>{" "}
              <p className="text-[17px] ">{projects.NexGenWireless.desc}</p>
            </div>

            <a href={projects.NexGenWireless.live} target="_blank">
              <button className="rounded-md w-[125px] h-[40px]">
                Live Site
              </button>
            </a>
          </div>
          {/* US Cyber Bridge */}
          <div className="flex flex-col justify-between items-left bg-black/70 rounded-md p-[20px]">
            <div className="flex flex-col mb-2">
              <h1 className=" font-bold text-[20px]">
                {projects.USCyberBridge.name}
              </h1>
              <p className=" text-[17px] font-light pb-[5px]">
                HTML | CSS | JavaScript
              </p>{" "}
              <p className="text-[17px] ">{projects.USCyberBridge.desc}</p>
            </div>

            <a href={projects.USCyberBridge.live} target="_blank">
              <button className="rounded-md w-[125px] h-[40px]">
                Live Site
              </button>
            </a>
          </div>
          {/* CA Cyber Bridge */}
          <div className="flex flex-col justify-between items-left bg-black/70 rounded-md p-[20px]">
            <div className="flex flex-col mb-2 ">
              <h1 className=" font-bold text-[20px]">
                {projects.CACyberBridge.name}
              </h1>
              <p className=" text-[17px] font-light pb-[5px]">
                HTML | CSS | JavaScript
              </p>
              <p className="text-[17px] ">{projects.CACyberBridge.desc}</p>
            </div>

            <a href={projects.CACyberBridge.live} target="_blank">
              <button className="rounded-md w-[125px] h-[40px] ">
                Live Site
              </button>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Personal Projects */}
      <motion.div
        whileInView={{ x: 0 }}
        initial={{ x: 300 }}
        className="flex flex-wrap flex-col gap-5 px-5 max-w-[1200px] "
      >
        <div className="flex  flex-col items-center justify-center gap-1 max-lg:w-[100%] max-lg:gap-3 ">
          <h1 className="text-3xl md:text-4xl ">Personal Projects</h1>
          <img className="h-[5px]" src="./img/line.png"></img>
        </div>

        <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2">
          <div className="flex flex-col justify-between items-left bg-black/70 rounded-md p-[20px]">
            <div className="flex flex-col mb-2 ">
              <h1 className=" font-bold text-[20px]">
                {projects.syncSchedule.name}
              </h1>
              <p className=" text-[17px] font-light pb-[5px]">
                React | Node.js | Twilio | AWS
              </p>
              <p className="text-[17px] ">{projects.syncSchedule.desc}</p>
            </div>

            <a href={projects.syncSchedule.github} target="_blank">
              <button className="rounded-md w-[125px] h-[40px]">GitHub</button>
            </a>
          </div>

          {/* Netflix App */}
          <div className="flex flex-col justify-between items-left bg-black/70 rounded-md p-[20px]">
            <div className="flex flex-col mb-2 ">
              <h1 className=" font-bold text-[20px]">
                {projects.NetflixClone.name}
              </h1>
              <p className=" text-[17px] font-light pb-[5px]">
                Nextjs | Tailwind | Prisma | MongoDB
              </p>
              <p className="text-[17px] ">{projects.NetflixClone.desc}</p>
            </div>

            <a href={projects.NetflixClone.github} target="_blank">
              <button className="rounded-md w-[125px] h-[40px]">GitHub</button>
            </a>
          </div>

          {/* Sneakers Website */}
          <div className="flex flex-col justify-between items-left bg-black/70 rounded-md p-[20px]">
            <div className="flex flex-col mb-2 ">
              <h1 className=" font-bold text-[20px]">
                {projects.sneakersWebsite.name}
              </h1>
              <p className=" text-[17px] font-light pb-[5px]">
                HTML | CSS | Javascript
              </p>
              <p className="text-[17px] ">{projects.sneakersWebsite.desc}</p>
            </div>

            <div className="flex items-center justify-start gap-2 mt-3 ">
              <a href={projects.sneakersWebsite.live} target="_blank">
                <button className="rounded-md w-[125px] h-[40px]">
                  Live Site
                </button>
              </a>
              <a href={projects.sneakersWebsite.github} target="_blank">
                <button className="rounded-md w-[125px] h-[40px]">
                  GitHub
                </button>
              </a>
            </div>
          </div>

          {/* Split The Bill App */}
          <div className="flex flex-col justify-between items-left bg-black/70 rounded-md p-[20px]">
            <div className="flex flex-col mb-2 ">
              <h1 className=" font-bold text-[20px]">
                {projects.splitTheBill.name}
              </h1>
              <p className=" text-[17px] font-light pb-[5px]">Kotlin</p>
              <p className="text-[17px] ">{projects.splitTheBill.desc}</p>
            </div>

            <a href={projects.splitTheBill.github} target="_blank">
              <button className="rounded-md w-[125px] h-[40px]">GitHub</button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Works;
