import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TProudct } from "@/types";
import { Button } from "antd";
import { useState } from "react";
import { ProductImageGallery } from "./ProductImageGallery";

export function ProductCard({ productData }: { productData: TProudct }) {
  console.log("productData", productData);

  // const userData = getUserInfo() as any;
  // console.log("userData", userData);

  // const { data: user } = useGetUserByIdQuery(userData?);
  // console.log("user", user);

  // const [initialPayment, { productData: paymentproductData }] = useInitiatePaymentMutation();

  // console.log("email", user);
  const discount = Math.round(
    ((productData?.price - (productData?.salePrice ?? 0)) /
      productData?.price) *
      100
  );

  const [loading, setLoading] = useState(false);

  const handleBuyNow = async () => {
    setLoading(true);
    // const initialproductData = {
    //   amount: productData.salePrice ?? productData.price,
    //   user_email: email,
    // };
    try {
      // const response = await initialPayment(initialproductData);
      // console.log("response", response);
      // if (response.productData.url) {
      //   window.location.href = response.productData.url;
      // }
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
            <ProductImageGallery images={productData?.images} />
          </div>
        </div>

        {/* Right Side - Product Details */}
        <CardContent className="flex flex-col">
          <h2 className="text-2xl font-bold mb-3">{productData?.title}</h2>
          <p className="text-red-500 mb-3">
            <span className="font-semibold">{productData?.category}</span>
          </p>
          <p
            className={`font-semibold ${
              productData?.stock === "In Stock"
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            Status: {productData?.stock}
          </p>
          {/* Key Features List */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Key Features:</h3>
            <div className=" text-gray-700 mt-2">
              {productData?.features?.map((feature, index) => (
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
              {productData?.price.toLocaleString()}৳
            </span>
            <span className="text-lg text-gray-500 line-through">
              {productData?.salePrice?.toLocaleString()}৳
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
