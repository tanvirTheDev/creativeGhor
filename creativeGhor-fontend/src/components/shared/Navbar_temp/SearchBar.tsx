"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGetProductsBySearchQuery } from "@/redux/api/productApi";
import type { TProudct } from "@/types/product";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface SearchPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchPanel({ isOpen, onClose }: SearchPanelProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Fetch products by search query
  const { data, isLoading, isError } = useGetProductsBySearchQuery(
    searchQuery,
    {
      skip: !searchQuery.trim(),
    }
  );
  const products = data?.data || [];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // If there are results, go to the first one
      if (products.length > 0) {
        router.push(`/product/${products[0].slug}`);
        onClose();
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

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
            className="fixed right-0 top-0 h-full bg-white shadow-2xl w-full sm:w-96 md:max-w-md"
          >
            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex items-center justify-between p-4 sm:p-6 border-b bg-gray-50"
            >
              <h2 className="text-lg font-semibold">Search</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-gray-200 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </Button>
            </motion.div>

            {/* Search Content */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="p-4 sm:p-6 space-y-6"
            >
              {/* Search Input */}
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full h-12 text-base border-2 focus:border-black transition-colors duration-200"
                  autoFocus
                />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={handleSearch}
                    className="w-full h-12 bg-black text-white hover:bg-gray-800 flex items-center justify-center space-x-2 transition-all duration-200"
                  >
                    <span>SEARCH</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              </div>

              {/* Search Results */}
              {searchQuery.trim() && (
                <div className="mt-4">
                  {isLoading ? (
                    <div className="text-center text-gray-400">
                      Searching...
                    </div>
                  ) : isError ? (
                    <div className="text-center text-red-500">
                      Error loading results
                    </div>
                  ) : products.length === 0 ? (
                    <div className="text-center text-gray-400">
                      No products found
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {products.map((product: TProudct) => (
                        <div
                          key={product._id}
                          className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer transition"
                          onClick={() => {
                            router.push(`/product/${product.slug}`);
                            onClose();
                          }}
                        >
                          {product.images && product.images[0] && (
                            <Image
                              src={product.images[0]}
                              alt={product.title}
                              width={40}
                              height={40}
                              className="w-10 h-10 object-cover rounded"
                            />
                          )}
                          <div className="flex-1">
                            <div className="font-medium text-gray-800 text-sm">
                              {product.title}
                            </div>
                            <div className="text-xs text-gray-500">
                              {product.price?.toLocaleString()} BDT
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
