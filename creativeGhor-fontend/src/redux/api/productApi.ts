import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: [tagTypes.product],
    }),
    getProductsByCategory: build.query({
      query: (category: string) => ({
        url: `/products/category/${category}`,
        method: "GET",
      }),
      providesTags: [tagTypes.product],
    }),
    getProductsByCategorySlug: build.query({
      query: (slug: string) => ({
        url: `/products/category/slug/${slug}`,
        method: "GET",
      }),
      providesTags: [tagTypes.product],
    }),
    getSingleProducts: build.query({
      query: (_id) => {
        console.log("productId Inside query", _id);
        return {
          url: `/product/${_id}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.product],
    }),
    getProductBySlug: build.query({
      query: (slug: string) => ({
        url: `/product/slug/${slug}`,
        method: "GET",
      }),
      providesTags: [tagTypes.product],
    }),
    createProduct: build.mutation({
      query: (data) => {
        return {
          url: "/create-product",
          method: "POST",
          ConTentType: "multipart/form-data",
          data,
        };
      },
      invalidatesTags: [tagTypes.product],
    }),
    updateProduct: build.mutation({
      query: (data) => {
        console.log("data", data);

        return {
          url: `/update-product/${data._id}`,
          method: "PATCH",
          data: data.body,
        };
      },
      invalidatesTags: [tagTypes.product],
    }),

    deleteProduct: build.mutation({
      query: (_id) => {
        return {
          url: `/delete-product/${_id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.product],
    }),
    getProductsBySearch: build.query({
      query: (searchTerm: string) => ({
        url: `/products/search?q=${encodeURIComponent(searchTerm)}`,
        method: "GET",
      }),
      providesTags: [tagTypes.product],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductsByCategoryQuery,
  useGetProductsByCategorySlugQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetSingleProductsQuery,
  useGetProductBySlugQuery,
  useGetProductsBySearchQuery,
} = productApi;
