"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FeaturedCategoryCardProps {
  category?: string;
  image: string;
}

export const FeaturedCategoryCard = ({
  category,
  image,
}: FeaturedCategoryCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="group rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md transition-all cursor-pointer"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src={image}
          alt="categoryImage"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="mt-3 text-center text-sm font-medium text-gray-800 group-hover:text-black">
        {category}
      </h3>
    </motion.div>
  );
};
