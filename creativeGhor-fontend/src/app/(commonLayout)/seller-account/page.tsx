"use client";

import EliteForm from "@/components/Form/EliteForm";
import InputForm from "@/components/Form/InputForm";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FieldValues } from "react-hook-form";

export default function SellerRegister() {
  const handleSubmit = async (values: FieldValues) => {
    const registerData = {
      name: `${values.customer.firstName} ${values.customer.lastName}`,
      email: values.customer.email,
      phoneNumber: values.customer.phoneNumber,
      shopName: values.shopName,
      shopAddress: values.shopAddress,
      password: values.password,
    };
    try {
      //   const response = await registerUser(registerData);
      //   console.log(response);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 text-gray-500" />
        <span className="text-gray-700">Register Seller Account</span>
      </div>

      <div className="mx-auto max-w-lg space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">
            Create Seller Account
          </h1>
          <p className="text-gray-500">
            Already have an shop account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Log in instead!
            </Link>
          </p>
        </div>

        <EliteForm
          onSubmit={handleSubmit}
          defaultValues={{
            customer: {
              name: "",
              email: "",
              phoneNumber: "",
              shopName: "",
              shopAddress: "",
            },
            password: "",
          }}
        >
          <div className="space-y-4">
            <InputForm
              type="text"
              name="customer.name"
              placeholder="Name"
              required
              className="rounded-lg border border-gray-300 p-3 w-full focus:ring-2 focus:ring-blue-500"
            />
            <InputForm
              type="email"
              name="customer.email"
              placeholder="Email"
              required
              className="rounded-lg border border-gray-300 p-3 w-full focus:ring-2 focus:ring-blue-500"
            />
            <InputForm
              type="tel"
              name="customer.phoneNumber"
              placeholder="Phone Number"
              required
              className="rounded-lg border border-gray-300 p-3 w-full focus:ring-2 focus:ring-blue-500"
            />
            <InputForm
              type="text"
              name="shopName"
              placeholder="Shop Name"
              required
              className="rounded-lg border border-gray-300 p-3 w-full focus:ring-2 focus:ring-blue-500"
            />

            <InputForm
              type="text"
              name="shopAddress"
              placeholder="Shop Address"
              required
              className="rounded-lg border border-gray-300 p-3 w-full focus:ring-2 focus:ring-blue-500"
            />
            <InputForm
              type="password"
              name="password"
              placeholder="Password"
              required
              className="rounded-lg border border-gray-300 p-3 w-full focus:ring-2 focus:ring-blue-500"
            />

            <Button
              type="submit"
              className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-lg py-3 focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              Create Seller Account
            </Button>
          </div>
        </EliteForm>
      </div>
    </div>
  );
}
