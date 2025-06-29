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
      storeUserInfo({ accessToken: response?.token });
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <div className="h-full bg-gray-50 p-6">
      <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 text-gray-500" />
        <span className="text-gray-700">Login</span>
      </div>
      <div className="max-w-md w-full mx-auto space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold">SIGN IN</h1>
        </div>

        <EliteForm
          onSubmit={handleSubmit}
          defaultValues={{
            email: "",
            password: "",
          }}
        >
          <div className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <InputForm
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className=""
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <InputForm
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                className=""
              />
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-black text-white hover:bg-gray-800"
            >
              SIGN IN
            </Button>

            {/* Links */}
            <p className="text-center text-sm text-gray-600">
              <Link href="/forgot-password" className="hover:underline">
                Forgot your password?
              </Link>
            </p>

            <p className="text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </EliteForm>
      </div>
    </div>
  );
}
