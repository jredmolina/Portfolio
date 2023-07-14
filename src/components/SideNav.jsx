import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const SideNav = ({ scrollToComponent }) => {
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      console.log(containerRef.current.scrollTop);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute pt-[40vh] pl-[80px] flex flex-col gap-5 text-[20px] z-[100] font-bold text-right max-sm:hidden"
    >
      <motion.div
        whileHover={{ scale: 1.2, color: "#9dd6cb" }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer"
        onClick={() => scrollToComponent("Hero")}
      >
        Home
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2, color: "#9dd6cb" }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer"
        onClick={() => scrollToComponent("Who")}
      >
        Who
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2, color: "#9dd6cb" }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer"
        onClick={() => scrollToComponent("Works")}
      >
        Work
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2, color: "#9dd6cb" }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer"
        onClick={() => scrollToComponent("Contact")}
      >
        Contact
      </motion.div>
    </div>
  );
};
