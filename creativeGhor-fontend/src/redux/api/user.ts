// get user by id

import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUserById: build.query({
      query: (id) => {
        return {
          url: `/user/${id}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetUserByIdQuery } = userApi;
