"use client";

import EliteForm from "@/components/Form/EliteForm";
import InputForm from "@/components/Form/InputForm";
import { Button } from "@/components/ui/button";
import { loginUser } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/auth.services";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";

export default function LoginPage() {
  const router = useRouter();
  const handleSubmit = async (values: FieldValues) => {
    try {
      const response = await loginUser(values);
      router.push("/dashboard");
      storeUserInfo({ accessToken: response?.token });
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
        <span className="text-gray-700">Login</span>
      </div>

      <div className="mx-auto max-w-lg space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">
            Login to Your Account
          </h1>
        </div>

        <EliteForm
          onSubmit={handleSubmit}
          defaultValues={{
            email: "",
            password: "",
          }}
        >
          <div className="space-y-4">
            <InputForm
              type="email"
              name="email"
              placeholder="Email"
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
              Login
            </Button>

            <p className="text-center text-gray-500">
              <Link
                href="/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Lost your password?
              </Link>
            </p>

            <p className="text-center text-gray-500">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-blue-600 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </EliteForm>
      </div>
    </div>
  );
}
