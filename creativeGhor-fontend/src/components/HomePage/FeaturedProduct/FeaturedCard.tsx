import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TProductCard } from "@/types";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({
  _id,
  title,
  price = 0,
  salePrice = null,
  images = [],
}: TProductCard) {
  const discount = salePrice
    ? Math.round(((salePrice - price) / salePrice) * 100)
    : null;

  return (
    <Card className="overflow-hidden group">
      <div className="relative">
        {discount && (
          <Badge variant="destructive" className="absolute top-2 right-2 z-10">
            -{discount}%
          </Badge>
        )}
        <div className="aspect-square overflow-hidden">
          <Image
            src={images?.[0] || "/placeholder.svg"}
            alt={title}
            width={400}
            height={400}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
        </div>
      </div>
      <CardContent className="p-4">
        <Link href={`/${_id}`}>
          <h3 className="font-medium text-sm mb-2 line-clamp-2 h-10">
            {title}
          </h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-red-500">
            €{price.toFixed(2)}
          </span>
          {salePrice && (
            <span className="text-sm text-gray-500 line-through">
              €{salePrice.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
