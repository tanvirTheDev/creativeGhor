import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    initiatePayment: build.mutation({
      query: (data) => {
        return {
          url: "/payment/initiate-payment",
          method: "POST",
          data,
        };
      },
      invalidatesTags: [tagTypes.payment],
    }),
    successPayment: build.mutation({
      query: (data) => {
        return {
          url: "/payment/success/:transactionId",
          method: "POST",
          data,
        };
      },
      invalidatesTags: [tagTypes.payment],
    }),
    getPayment: build.query({
      query: (id) => {
        return {
          url: `/payment/${id}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.payment],
    }),
  }),
});

export const { useInitiatePaymentMutation, useSuccessPaymentMutation } =
  paymentApi;
