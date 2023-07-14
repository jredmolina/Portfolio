import { motion } from "framer-motion";

import React from "react";

export const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="absolute  z-[1000] top-0 left-0 h-full w-full bg-[#000000e1] flex items-center justify-center"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
