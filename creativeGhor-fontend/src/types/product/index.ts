export type TProudct = {
  _id: string;
  title: string;
  price: number;
  category?: string;
  salePrice?: number | null;
  stock?: string;
  features?: string[];
  description?: string;
  images: string[];
};

export type TProductCard = Pick<
  TProudct,
  "_id" | "title" | "price" | "salePrice" | "images"
>;

export type TProductCategory = Pick<
  TProudct,
  "_id" | "title" | "category" | "images"
>;
