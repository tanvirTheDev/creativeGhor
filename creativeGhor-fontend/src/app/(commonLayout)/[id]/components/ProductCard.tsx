import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { addToCart } from "@/redux/cartSlice";
import { TProudct } from "@/types";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ProductImageGallery } from "./ProductImageGallery";

export function ProductCard({ productData }: { productData: TProudct }) {
  const discount = Math.round(
    ((productData?.price - (productData?.salePrice ?? 0)) /
      productData?.price) *
      100
  );

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleBuyNow = async () => {
    setLoading(true);
    try {
      // Payment or redirect logic
    } catch (error) {
      console.error("Payment error", error);
    }
    setLoading(false);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...productData, quantity: 1 }));
  };

  return (
    <Card className="p-4 md:p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Gallery */}
        <div className="relative">
          {discount > 0 && (
            <Badge
              variant="outline"
              className="absolute top-2 right-2 text-xs font-medium bg-gray-100 border-gray-300"
            >
              -{discount}%
            </Badge>
          )}
          <ProductImageGallery images={productData?.images} />
        </div>

        {/* Product Info */}
        <CardContent className="flex flex-col justify-between px-0">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              {productData?.title}
            </h2>

            <p className="text-sm text-gray-500 mb-1">
              {productData?.category?.name}
            </p>

            <p
              className={`text-sm font-medium ${
                productData?.stock === "In Stock"
                  ? "text-green-600"
                  : "text-gray-500"
              }`}
            >
              Status: {productData?.stock}
            </p>

            {/* Features */}
            {productData?.features?.length &&
              productData.features.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">
                    Key Features:
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    {productData.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
          </div>

          {/* Price & Buttons */}
          <div className="mt-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-lg font-semibold text-gray-800">
                {productData?.price.toLocaleString()}৳
              </span>
              {productData?.salePrice && (
                <span className="text-sm text-gray-400 line-through">
                  {productData?.salePrice.toLocaleString()}৳
                </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="w-fit bg-black text-white hover:bg-gray-800 flex items-center justify-center space-x-2 transition-all duration-200">
                View Info
              </Button>
              <Button
                className="w-fit bg-black text-white hover:bg-gray-800 flex items-center justify-center space-x-2 transition-all duration-200"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
