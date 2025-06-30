"use client";

import { ProductCard } from "@/components/HomePage/FeaturedProduct/FeaturedCard";
import { useGetCategoryBySlugQuery } from "@/redux/api/categoryApi";
import { useGetProductsByCategorySlugQuery } from "@/redux/api/productApi";
import { TProudct } from "@/types/product";
import { useParams } from "next/navigation";

const CategoryPage = () => {
  const { slug } = useParams();
  const { data: category, isLoading: categoryLoading } =
    useGetCategoryBySlugQuery(slug as string);
  const { data: products, isLoading: productsLoading } =
    useGetProductsByCategorySlugQuery(slug as string);

  if (categoryLoading || productsLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (!category?.data) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Category not found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {category.data.name}
        </h1>
        {category.data.description && (
          <p className="text-gray-600">{category.data.description}</p>
        )}
      </div>

      {products?.data && products.data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.data.map((product: TProudct) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
