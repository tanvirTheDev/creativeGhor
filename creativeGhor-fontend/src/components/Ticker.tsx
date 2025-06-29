"use client";

import { motion } from "framer-motion";

export default function Ticker() {
  return (
    <div className="bg-gray-100 py-2 overflow-hidden rounded-full shadow-md">
      <motion.div
        className="whitespace-nowrap text-sm text-gray-800 font-medium px-4"
        animate={{
          x: ["100%", "-100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >
        Saturday, 28 June, all our branches are open except Gulshan, Banani, and
        Dhanmondi.
      </motion.div>
    </div>
  );
}
