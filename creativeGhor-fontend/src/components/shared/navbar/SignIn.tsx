"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface SignInPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SignInPanel({ isOpen, onClose }: SignInPanelProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [countryCode, setCountryCode] = useState("BD");
  const [isAnimating, setIsAnimating] = useState(false);

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

  const handleSignIn = () => {
    console.log("Sign in attempt:", { phoneNumber, password, countryCode });
    // Implement sign in logic here
  };

  const handleSignUp = () => {
    console.log("Redirect to sign up");
    // Implement sign up redirect logic here
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
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
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={handleBackdropClick}
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
            className="fixed right-0 top-0 h-full w-full bg-white shadow-2xl"
          >
            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex items-center justify-between p-6 border-b"
            >
              <div className="flex-1" />
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-6 w-6" />
              </Button>
            </motion.div>

            {/* Sign In Content */}
            <div className="flex">
              {/* Left Side - Form */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="flex-1 p-8 max-w-md mx-auto"
              >
                <div className="space-y-6">
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="text-2xl font-bold text-center"
                  >
                    SIGN IN
                  </motion.h1>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <Tabs defaultValue="mobile" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="email" className="text-gray-500">
                          EMAIL
                        </TabsTrigger>
                        <TabsTrigger
                          value="mobile"
                          className="text-black border-b-2 border-black"
                        >
                          MOBILE
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="mobile" className="space-y-6 mt-8">
                        <motion.div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.5, duration: 0.3 }}
                          className="space-y-2"
                        >
                          <Label
                            htmlFor="phone"
                            className="text-sm font-medium text-gray-600 uppercase"
                          >
                            Phone Number
                          </Label>
                          <div className="flex space-x-2">
                            <Select
                              value={countryCode}
                              onValueChange={setCountryCode}
                            >
                              <SelectTrigger className="w-20">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="BD">BD</SelectItem>
                                <SelectItem value="US">US</SelectItem>
                                <SelectItem value="UK">UK</SelectItem>
                              </SelectContent>
                            </Select>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="Enter a phone number"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              className="flex-1"
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.6, duration: 0.3 }}
                          className="space-y-2"
                        >
                          <Label
                            htmlFor="password"
                            className="text-sm font-medium text-gray-600 uppercase"
                          >
                            Password
                          </Label>
                          <Input
                            id="password"
                            type="password"
                            placeholder="Enter a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </motion.div>

                        <motion.div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.7, duration: 0.3 }}
                          className="text-xs text-gray-500"
                        >
                          This site is protected by reCAPTCHA and the Google{" "}
                          <a href="#" className="text-blue-600 hover:underline">
                            Privacy Policy
                          </a>{" "}
                          and{" "}
                          <a href="#" className="text-blue-600 hover:underline">
                            Terms of Service
                          </a>{" "}
                          apply
                        </motion.div>

                        <motion.div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.8, duration: 0.3 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            onClick={handleSignIn}
                            className="w-full h-12 bg-white text-black border border-black hover:bg-gray-50 transition-all duration-200"
                          >
                            SIGN IN
                          </Button>
                        </motion.div>
                      </TabsContent>

                      <TabsContent value="email" className="space-y-6 mt-8">
                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-600 uppercase"
                          >
                            Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="email-password"
                            className="text-sm font-medium text-gray-600 uppercase"
                          >
                            Password
                          </Label>
                          <Input
                            id="email-password"
                            type="password"
                            placeholder="Enter a password"
                          />
                        </div>

                        <Button className="w-full h-12 bg-white text-black border border-black hover:bg-gray-50">
                          SIGN IN
                        </Button>
                      </TabsContent>
                    </Tabs>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Side - Sign Up */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="flex-1 bg-gray-50 p-8 flex flex-col justify-center items-center space-y-4"
              >
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="text-center text-gray-700"
                >
                  Don't have an account? To join us
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={handleSignUp}
                    variant="outline"
                    className="px-8 py-2 border-black text-black hover:bg-black hover:text-white bg-transparent transition-all duration-200"
                  >
                    SIGN UP
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                  className="text-center space-y-2"
                >
                  <p className="text-sm text-gray-600">Forgot your password?</p>
                  <a
                    href="#"
                    className="text-sm text-gray-500 underline hover:text-gray-700"
                  >
                    Recover Password
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
