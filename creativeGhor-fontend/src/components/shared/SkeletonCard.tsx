"use client";
import { motion } from "framer-motion";

export const SkeletonCard = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse shadow p-4 w-full h-72 flex flex-col"
  >
    <div className="bg-gray-300 dark:bg-gray-700 rounded-md h-40 w-full mb-4" />
    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2" />
    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4" />
    <div className="flex-1 flex flex-col justify-end">
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-2" />
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4" />
    </div>
  </motion.div>
);
