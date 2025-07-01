"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { clearCart, updateQuantity } from "@/redux/cartSlice";
import type { RootState } from "@/redux/store";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartPanel({ isOpen, onClose }: CartPanelProps) {
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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Get cart items from Redux
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.salePrice ?? item.price) * item.quantity,
    0
  );
  const currency = "BDT";

  const handleViewBag = () => {
    console.log("Navigate to full cart page");
    // Implement navigation to cart page
  };

  const handleCheckout = () => {
    console.log("Navigate to checkout");
    // Implement checkout logic
  };

  const dispatch = useDispatch();

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
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex items-center justify-between p-6 border-b bg-gray-50"
            >
              <h2 className="text-lg font-semibold">
                Shopping Bag ({cartItems.length})
              </h2>
              <div className="flex gap-2">
                {cartItems.length > 0 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => dispatch(clearCart())}
                    className="text-xs px-2 py-1 border-gray-400"
                  >
                    Clear Cart
                  </Button>
                )}
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </motion.div>

            {/* Cart Content */}
            <div className="flex-1 flex flex-col">
              {cartItems.length === 0 ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
                  className="flex-1 flex items-center justify-center"
                >
                  <p className="text-gray-600 text-lg">
                    Your Shopping Bag Is Empty
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="flex-1 overflow-y-auto p-6"
                >
                  {/* Cart items would be rendered here */}
                  <div className="space-y-4">
                    {cartItems.map((item, index) => (
                      <motion.div
                        key={item._id}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                        className="border-b pb-4 flex items-center gap-4"
                      >
                        <Image
                          src={item.images[0]}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded"
                          width={64}
                          height={64}
                        />
                        <div className="flex-1">
                          <div className="font-semibold">{item.title}</div>
                          <div className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                            <Button
                              variant="outline"
                              size="icon"
                              className="w-6 h-6 p-0 text-lg"
                              onClick={() =>
                                item.quantity > 1 &&
                                dispatch(
                                  updateQuantity({
                                    id: item._id,
                                    quantity: item.quantity - 1,
                                  })
                                )
                              }
                              disabled={item.quantity <= 1}
                            >
                              -
                            </Button>
                            <span className="mx-2 min-w-[24px] text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="w-6 h-6 p-0 text-lg"
                              onClick={() =>
                                dispatch(
                                  updateQuantity({
                                    id: item._id,
                                    quantity: item.quantity + 1,
                                  })
                                )
                              }
                            >
                              +
                            </Button>
                            <span className="ml-2">
                              ×{" "}
                              {(item.salePrice ?? item.price).toLocaleString()}{" "}
                              BDT
                            </span>
                          </div>
                        </div>
                        <div className="font-bold">
                          {(
                            item.quantity * (item.salePrice ?? item.price)
                          ).toLocaleString()}{" "}
                          BDT
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Footer */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="border-t bg-white p-6 space-y-4"
              >
                <div className="text-center">
                  <p className="font-semibold">
                    Subtotal: {subtotal.toLocaleString()} {currency}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      onClick={handleViewBag}
                      className="w-full h-12 border-black text-black hover:bg-gray-50 bg-transparent transition-all duration-200"
                      disabled={cartItems.length === 0}
                    >
                      View Bag
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={handleCheckout}
                      className="w-full h-12 bg-black text-white hover:bg-gray-800 transition-all duration-200"
                      disabled={cartItems.length === 0}
                    >
                      Checkout
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
