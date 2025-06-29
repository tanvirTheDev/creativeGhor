"use client";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import { TProductCategory } from "@/types";
import { FeaturedCategoryCard } from "./CategoriesCard";

export const FeaturedCategories = () => {
  const { data, isLoading } = useGetAllProductsQuery(undefined);

  if (isLoading) {
    return <p>isLoding</p>;
  }

  console.log(data);

  return (
    <section className="w-full px-4 py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Featured Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.data?.map((category: TProductCategory) => (
            <FeaturedCategoryCard
              key={category.title}
              category={category.category}
              image={category.images[0]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
