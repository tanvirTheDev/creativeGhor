export type TProudct = {
  _id: string;
  title: string;
  price: number;
  category?: string;
  salePrice?: number | null; // Allow null as a valid type
  brand?: string;
  colors: string[];
  sizes: string[];
  sku?: string;
  stock?: string;
  features?: string[];
  description?: string;
  images: string[]; // Array of image URLs from Cloudinary
};

export type TProductCard = Pick<
  TProudct,
  "_id" | "title" | "price" | "salePrice" | "images"
>;
