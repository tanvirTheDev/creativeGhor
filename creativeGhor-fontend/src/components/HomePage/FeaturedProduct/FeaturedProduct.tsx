"use client";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import { TProductCard } from "@/types";
import { ProductCard } from "./FeaturedCard";

export default function FeaturedProduct() {
  const { data } = useGetAllProductsQuery(undefined);
  return (
    <div className="container mx-auto p-4 my-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight relative inline-block">
          FEATURED PRODUCTS
          <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 -mb-2" />
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5">
        {data?.data?.map((product: TProductCard, index: number) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}
