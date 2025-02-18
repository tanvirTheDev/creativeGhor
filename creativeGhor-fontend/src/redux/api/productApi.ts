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
  }),
});

export const {
  useGetAllProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetSingleProductsQuery,
} = productApi;
