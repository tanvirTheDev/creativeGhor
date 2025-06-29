"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginUser } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/auth.services";

interface SignInPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginPanel({ isOpen, onClose }: SignInPanelProps) {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async () => {
    try {
      const values: FieldValues = { email, password };
      const response = await loginUser(values);
      storeUserInfo({ accessToken: response?.token });
      onClose();
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error", error);
    }
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.8,
            }}
            className="fixed bg-scroll right-0 top-0 h-full w-full bg-white shadow-2xl"
          >
            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex items-center justify-between px-6 py-2 border-b"
            >
              <div className="flex-1" />
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-6 w-6" />
              </Button>
            </motion.div>

            <div className="flex flex-col lg:flex-row w-full h-screen overflow-y-auto">
              {/* Login Panel */}
              <div className="w-full lg:w-1/2 p-6 sm:p-8 max-w-md mx-auto flex items-center justify-center">
                <div className="space-y-6 w-full">
                  <h1 className="text-2xl font-bold text-center">SIGN IN</h1>

                  {/* Email */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="space-y-2"
                  >
                    <Label>Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </motion.div>

                  {/* Password */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="space-y-2"
                  >
                    <Label>Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </motion.div>

                  {/* Sign In Button */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <Button
                      onClick={handleSubmit}
                      className="w-full h-12 bg-black text-white hover:bg-gray-800"
                    >
                      SIGN IN
                    </Button>
                  </motion.div>

                  {/* Links */}
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="text-center text-sm text-gray-600"
                  >
                    <Link href="/forgot-password" className="hover:underline">
                      Forgot your password?
                    </Link>
                  </motion.p>

                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className="text-center text-sm text-gray-600"
                  >
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/register"
                      className="text-blue-600 hover:underline"
                    >
                      Sign Up
                    </Link>
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
