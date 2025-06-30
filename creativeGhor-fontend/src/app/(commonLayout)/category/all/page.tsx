"use client";

import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import { TCategory } from "@/types/category";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AllCategoriesPage = () => {
  const { data: categories, isLoading } = useGetAllCategoriesQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          All Categories
        </h1>
        <p className="text-gray-600">Browse all available product categories</p>
      </div>

      {categories?.data && categories.data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.data.map((category: TCategory, index: number) => (
            <motion.div
              key={category._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={`/category/${category.slug}`}>
                <div className="group rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md transition-all cursor-pointer">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl mb-3">
                    {category.image ? (
                      <Image
                        src={category.image}
                        alt={category.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">No Image</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-center text-sm font-medium text-gray-800 group-hover:text-black">
                    {category.name}
                  </h3>
                  {category.description && (
                    <p className="text-center text-xs text-gray-600 mt-1 line-clamp-2">
                      {category.description}
                    </p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No categories found.</p>
        </div>
      )}
    </div>
  );
};

export default AllCategoriesPage;
