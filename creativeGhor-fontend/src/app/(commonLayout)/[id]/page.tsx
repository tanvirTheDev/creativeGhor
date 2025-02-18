"use client";
import { useGetSingleProductsQuery } from "@/redux/api/productApi";
import { useParams } from "next/navigation";
import { ProductCard } from "./components/ProductCard";

export default function ProductPage() {
  const { id } = useParams();
  console.log("id", id);

  const { data, isLoading } = useGetSingleProductsQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <div className="p-10">
      {<ProductCard key={data?.data?.id} data={data?.data} />}
    </div>
  );
}
