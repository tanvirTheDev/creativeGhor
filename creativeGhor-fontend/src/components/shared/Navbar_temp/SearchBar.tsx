"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";

interface SearchPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchPanel({ isOpen, onClose }: SearchPanelProps) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const suggestedSearches = [
    {
      title: "You can search for product codes -",
      subtitle: "222514 or 225124",
    },
    {
      title: "You can search for product collections -",
      subtitle: "Premium or Platinum",
    },
    {
      title: "You can search for product categories -",
      subtitle: "Panjabi or Trouser",
    },
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      onClose();
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

              {/* Suggested Searches */}
              <div className="space-y-4">
                <h3 className="font-semibold text-center">
                  Suggested Searches:
                </h3>

                <div className="space-y-4">
                  {suggestedSearches.map((suggestion, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
                      className="text-center space-y-1 p-3 rounded-lg cursor-pointer transition-colors duration-200"
                      onClick={() => {
                        setSearchQuery(suggestion.subtitle);
                      }}
                    >
                      <p className="text-sm text-gray-700">
                        {suggestion.title}
                      </p>
                      <p className="text-sm font-medium">
                        {suggestion.subtitle}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
