import { CardContent } from "@/components/ui/card";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import { categories } from "./FeaturedCategories";

export function CategoryGrid({ categories }: { categories: categories }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 bg-[#F1F1F1]">
      {categories.map((category, index) => (
        <Link key={index} href={category.href}>
          <Card className="hover:shadow-lg group  transition-shadow">
            <CardContent className="p-4">
              <div className="aspect-square relative mb-4">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="text-center font-medium text-sm sm:text-base group-hover:text-primary_color transition-all">
                {category.title}
              </h3>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
