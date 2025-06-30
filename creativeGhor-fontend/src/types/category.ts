export type TCategory = {
  _id: string;
  name: string;
  description?: string;
  image?: string;
  slug: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TCategoryResponse = {
  success: boolean;
  message: string;
  data: TCategory[];
};

export type TSingleCategoryResponse = {
  success: boolean;
  message: string;
  data: TCategory;
};
