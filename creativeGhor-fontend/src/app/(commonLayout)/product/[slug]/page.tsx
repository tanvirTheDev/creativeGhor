"use client";

import { SkeletonCard } from "@/components/shared/SkeletonCard";
import { useGetProductBySlugQuery } from "@/redux/api/productApi";
import { useParams } from "next/navigation";
import { ProductCard } from "../../[id]/components/ProductCard";

export default function ProductPage() {
  const { slug } = useParams();
  console.log("slug", slug);

  const { data, isLoading, error } = useGetProductBySlugQuery(slug as string);

  if (isLoading) {
    return (
      <div className="p-10">
        <SkeletonCard />
      </div>
    );
  }

  if (error || !data?.data) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-red-600">Product not found</div>
      </div>
    );
  }

  const product = data.data;

  return (
    <div className="p-10">
      <ProductCard key={product._id} productData={product} />
    </div>
  );
}
