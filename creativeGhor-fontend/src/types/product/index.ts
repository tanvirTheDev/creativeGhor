import { TCategory } from "../category";

export type TProudct = {
  _id: string;
  title: string;
  slug: string;
  price: number;
  category?: TCategory | null;
  salePrice?: number | null;
  stock?: string;
  features?: string[];
  description?: string;
  images: string[];
};

export type TProductCard = Pick<
  TProudct,
  "_id" | "title" | "slug" | "price" | "salePrice" | "images"
>;

export type TProductCategory = Pick<
  TProudct,
  "_id" | "title" | "slug" | "category" | "images"
>;
