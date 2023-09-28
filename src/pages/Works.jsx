import React from "react";
import SyncSchedule from "../assets/SyncSchedule.png";
import SplitTheBill from "../assets/SplitTheBill.png";
import PhotoGallery from "../assets/PhotoGallery.png";
import PolySec from "../assets/PolySec.png";
import Store from "../assets/Store.png";
import "../App.css";
import { AnimatePresence, motion } from "framer-motion";
import("tailwindcss").Config;

const projects = {
  store: {
    name: "E-Commerce Store",
    image: Store,
    desc: "A full stack E-Commerce Store Application that allows users to browse through different categories of items, filter and sort items by different criteria, view individal items, and add items to their cart.",
    github: "https://github.com/jredmolina/JM-Ecommerce-Store",
  },
  syncSchedule: {
    name: "Sync Schedule",
    image: SyncSchedule,
    desc: "A calendar sharing social media site that allows users to maintain their own personal calendars, create groups with other users and create collective, shared calendars, and chat with other users.",
    github: "https://github.com/CS4800-Code-G/Calendar",
    live: "http://syncschedule.com",
  },
  photoGallery: {
    name: "Photo Gallery",
    desc: "An image gallery mobile app that uses Flickr API to allow users view and search for images from Flickr. ",
    github: "https://github.com/jredmolina/PhotoGallery",
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
};
const Works = () => {
  return (
    <div className="flex flex-col lg:px-36 sm:px-12 gap-20 max-md:px-5 my-8  mb-32">
      <motion.div
        whileInView={{ x: 0 }}
        initial={{ x: -300 }}
        className="flex  flex-2 flex-col gap-[15px]"
      >
        <div className="flex  flex-col items-center justify-center gap-1 max-lg:w-[100%] max-lg:gap-3  ">
          <h1 className=" text-3xl md:text-4xl ">Featured Projects</h1>
          <img className="h-[5px]" src="./img/line.png"></img>
        </div>

        {/* Sync Schedule */}
        <div className="flex flex-col items-center justify-center  lg:flex-row">
          <img
            className="w-[750px] h-auto rounded-lg max-md:hidden  "
            src={SyncSchedule}
            alt=""
          />
          {/* Project Content */}
          <div className=" flex flex-col justify-center rounded-m lg:w-[400px] lg:h-[575px] lg:py-[15px] lg:ml-[-70px] lg:text-right max-md:justify-start   ">
            <h1 className="text-2xl md:text-3xl font-bold">
              {projects.syncSchedule.name}
            </h1>
            <p className="text-lg md:text-xl font-light">
              React | Node.js | Twilio | AWS
            </p>
            <div className="bg-black/70 rounded-md p-5">
              <p className="text-md">{projects.syncSchedule.desc}</p>
            </div>
            {/* Icons */}
            <div className="flex items-center justify-center gap-2 mt-3 lg:justify-end">
              <a href={projects.syncSchedule.live} target="_blank">
                <button className="rounded-md w-[125px] h-[40px] ">
                  Live Site
                </button>
              </a>
              <a href={projects.syncSchedule.github} target="_blank">
                <button className="rounded-md w-[125px] h-[40px]">
                  GitHub
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* E-Commerce Store */}
        <div className="flex flex-col items-center justify-center  lg:flex-row ">
          {/* Project Content */}
          <div className="flex flex-col justify-center rounded-m lg:w-[400px] z-[5] lg:h-[575px] lg:py-[15px] lg:mr-[-50px] lg:text-left max-md:justify-start ">
            <h1 className="text-2xl md:text-3xl font-bold">
              {projects.store.name}
            </h1>
            <p className="text-lg md:text-xl font-light">
              React | Redux | Strapi | Sass
            </p>
            <div className="bg-black/70 rounded-md p-[20px]">
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

      {/* LIVE WORKS */}
      <motion.div
        whileInView={{ x: 0 }}
        initial={{ x: 300 }}
        className="flex flex-1  flex-wrap flex-col gap-[20px] lg:px-36 sm:px-12  "
      >
        <div className="flex  flex-col items-center justify-center gap-1 max-lg:w-[100%] max-lg:gap-3 ">
          <h1 className="text-3xl md:text-4xl ">Live Works</h1>
          <img className="h-[5px]" src="./img/line.png"></img>
        </div>

        {/* US Cyber Bridge */}
        <div className="grid grid-cols-1 gap-[10px]  md:grid-cols-2">
          <div className="bg-black/70 rounded-md   p-[20px]">
            <h1 className=" font-bold text-[20px]">
              {projects.USCyberBridge.name}
            </h1>
            <p className=" text-[17px] font-light">HTML | CSS | JavaScript</p>
            <p className="text-[17px] my-[5px] ">
              {projects.USCyberBridge.desc}
            </p>
            <a href={projects.USCyberBridge.live} target="_blank">
              <button className="rounded-md w-[125px] h-[40px]">
                Live Site
              </button>
            </a>
          </div>
          {/* CA Cyber Bridge */}
          <div className="bg-black/70 rounded-md   p-[20px]">
            <h1 className="font-bold text-[20px]">
              {projects.CACyberBridge.name}
            </h1>
            <p className=" text-[17px] font-light">HTML | CSS | JavaScript</p>
            <p className="text-[17px] my-[5px] ">
              {projects.CACyberBridge.desc}
            </p>
            <a href={projects.CACyberBridge.live} target="_blank">
              <button className="rounded-md w-[125px] h-[40px] ">
                Live Site
              </button>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Other Projects */}
      <motion.div
        whileInView={{ x: 0 }}
        initial={{ x: 300 }}
        className="flex flex-1  flex-wrap flex-col gap-[20px] lg:px-36 sm:px-12  "
      >
        <div className="flex  flex-col items-center justify-center gap-1 max-lg:w-[100%] max-lg:gap-3 ">
          <h1 className="text-3xl md:text-4xl ">Other Projects</h1>
          <img className="h-[5px]" src="./img/line.png"></img>
        </div>

        <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2">
          {/* Netflix App */}
          <div className="bg-black/70 rounded-md   p-[20px]">
            <h1 className="font-bold text-[20px]">
              {projects.NetflixClone.name}
            </h1>
            <p className=" text-[17px] font-light">
              React | NextJS | TailwindCSS | Prisma | MongoDB
            </p>
            <p className="text-[17px] my-[5px] ">
              {projects.NetflixClone.desc}
            </p>
            <a href={projects.NetflixClone.github} target="_blank">
              <button className="rounded-md w-[125px] h-[40px]">GitHub</button>
            </a>
          </div>

          {/* Photo Gallery App */}
          <div className="bg-black/70 rounded-md   p-[20px]">
            <h1 className="font-bold text-[20px]">
              {projects.photoGallery.name}
            </h1>
            <p className=" text-[17px] font-light">Kotlin</p>
            <p className="text-[17px] my-[5px] ">
              {projects.photoGallery.desc}
            </p>
            <a href={projects.photoGallery.github} target="_blank">
              <button className="rounded-md w-[125px] h-[40px]">GitHub</button>
            </a>
          </div>

          {/* Split The Bill App */}
          <div className="bg-black/70 rounded-md p-[20px]">
            <h1 className="font-bold text-[20px]">
              {projects.splitTheBill.name}
            </h1>
            <p className=" text-[17px] font-light">Kotlin</p>
            <p className="text-[17px] my-[5px]">{projects.splitTheBill.desc}</p>
            <a href={projects.splitTheBill.github} target="_blank">
              <button className="rounded-md w-[125px] h-[40px]">GitHub</button>
            </a>
          </div>

          {/* PokeDex App */}
          <div className="bg-black/70 rounded-md   p-[20px]">
            <h1 className="font-bold text-[20px]">{projects.pokeDex.name}</h1>
            <p className=" text-[17px] font-light">React</p>
            <p className="text-[17px] my-[5px]">{projects.pokeDex.desc}</p>
            <a href={projects.pokeDex.github} target="_blank">
              <button className="rounded-md w-[125px] h-[40px]">GitHub</button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Works;
