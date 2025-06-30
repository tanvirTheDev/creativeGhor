import {
  TCategory,
  TCategoryResponse,
  TSingleCategoryResponse,
} from "@/types/category";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCategories: build.query<TCategoryResponse, void>({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
      providesTags: [tagTypes.category],
    }),
    getCategoryBySlug: build.query<TSingleCategoryResponse, string>({
      query: (slug) => ({
        url: `/category/${slug}`,
        method: "GET",
      }),
      providesTags: [tagTypes.category],
    }),
    getCategoryById: build.query<TSingleCategoryResponse, string>({
      query: (id) => ({
        url: `/category/id/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.category],
    }),
    createCategory: build.mutation<TSingleCategoryResponse, Partial<TCategory>>(
      {
        query: (data) => ({
          url: "/create-category",
          method: "POST",
          data,
        }),
        invalidatesTags: [tagTypes.category],
      }
    ),
    updateCategory: build.mutation<
      TSingleCategoryResponse,
      { _id: string; body: Partial<TCategory> }
    >({
      query: (data) => ({
        url: `/update-category/${data._id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.category],
    }),
    deleteCategory: build.mutation<
      { success: boolean; message: string },
      string
    >({
      query: (_id) => ({
        url: `/delete-category/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.category],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetCategoryBySlugQuery,
  useGetCategoryByIdQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
