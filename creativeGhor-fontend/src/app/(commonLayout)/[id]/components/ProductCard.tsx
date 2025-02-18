import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useInitiatePaymentMutation } from "@/redux/api/paymentApi";
import { useGetUserByIdQuery } from "@/redux/api/user";
import { getUserInfo } from "@/services/auth.services";
import { TProudct } from "@/types";
import { Button } from "antd";
import { useState } from "react";
import { ProductImageGallery } from "./ProductImageGallery";

export function ProductCard({ data }: { data: TProudct }) {
  const userData = getUserInfo() as any;
  const { data: user } = useGetUserByIdQuery(userData?.userId);
  console.log("user", user);

  const [initialPayment, { data: paymentData }] = useInitiatePaymentMutation();

  console.log("email", user);
  const discount = Math.round(
    ((data?.price - (data?.salePrice ?? 0)) / data?.price) * 100
  );

  const [loading, setLoading] = useState(false);

  const handleBuyNow = async () => {
    setLoading(true);
    // const initialData = {
    //   amount: data.salePrice ?? data.price,
    //   user_email: email,
    // };
    try {
      // const response = await initialPayment(initialData);
      // console.log("response", response);
      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error("Payment error", error);
    }
    setLoading(false);
  };

  return (
    <Card className="p-6 shadow-lg border rounded-lg max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Side - Product Image */}
        <div className="relative">
          {discount > 0 && (
            <Badge
              variant="destructive"
              className="absolute top-2 right-2 z-10"
            >
              -{discount}%
            </Badge>
          )}
          <div>
            <ProductImageGallery images={data?.images} />
          </div>
        </div>

        {/* Right Side - Product Details */}
        <CardContent className="flex flex-col">
          <h2 className="text-2xl font-bold mb-3">{data?.title}</h2>
          <p className="text-red-500 mb-3">
            <span className="font-semibold">{data?.category}</span>
          </p>
          <p
            className={`font-semibold ${
              data?.stock === "In Stock" ? "text-red-600" : "text-green-600"
            }`}
          >
            Status: {data?.stock}
          </p>
          {/* Key Features List */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Key Features:</h3>
            <div className=" text-gray-700 mt-2">
              {data?.features?.map((feature, index) => (
                <ul
                  key={index}
                  className="text-sm space-y-2 list-disc list-inside"
                >
                  {feature.split(",").map((feature, index) => (
                    <li key={index} className="font-normal">
                      {feature}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-2xl font-bold text-red-500">
              {data?.price.toLocaleString()}৳
            </span>
            <span className="text-lg text-gray-500 line-through">
              {data?.salePrice?.toLocaleString()}৳
            </span>
          </div>

          {/* View More Info Button */}
          <Button type="link" className="text-red-500 mt-4">
            View More Info
          </Button>
          <Button onClick={handleBuyNow} disabled={loading}>
            {loading ? "Redirecting..." : "Buy Now"}
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}
