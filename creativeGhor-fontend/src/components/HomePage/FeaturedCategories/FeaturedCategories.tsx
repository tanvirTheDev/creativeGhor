"use client";
import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import { TCategory } from "@/types/category";
import Link from "next/link";
import { FeaturedCategoryCard } from "./CategoriesCard";

export const FeaturedCategories = () => {
  const { data, isLoading } = useGetAllCategoriesQuery();

  if (isLoading) {
    return <p>Loading categories...</p>;
  }

  return (
    <section className="w-full px-4 py-8 my-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-8 text-center">
          Featured Categories
        </h2>

        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
          {data?.data?.map((category: TCategory) => (
            <Link key={category._id} href={`/category/${category.slug}`}>
              <FeaturedCategoryCard
                category={category.name}
                image={category.image || "/images/placeholder-category.jpg"}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
