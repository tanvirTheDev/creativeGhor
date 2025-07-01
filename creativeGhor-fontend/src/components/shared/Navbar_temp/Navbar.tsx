"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getUserInfo, isUserLoggedIn } from "@/services/auth.services";
import { Menu, Search, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import logo from "../../../../public/logo2.png";
import { CartPanel } from "./Cart";
import { SearchPanel } from "./SearchBar";

const navigationItems = [
  "End of Season Sale",
  "Summer Selections",
  "Men",
  "Women",
  "Kids",
  "Footwear",
  "Fragrance",
  // Add more as needed
];

export const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [, setIsSignInOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItemCount = useSelector((state: any) =>
    state.cart.items.reduce(
      (total: number, item: any) => total + item.quantity,
      0
    )
  );

  const router = useRouter();
  const isLoggedIn =
    typeof window !== "undefined" && isUserLoggedIn && isUserLoggedIn();
  const userInfo =
    typeof window !== "undefined" && getUserInfo && getUserInfo();
  const userRole = userInfo?.role as string;
  const userName = userInfo?.name as string;

  const handleDashboardClick = () => {
    if (userRole === "admin") {
      router.push("/dashboard/admin");
    } else {
      router.push("/dashboard/user");
    }
  };

  return (
    <>
      <nav className="w-full bg-white border-b border-gray-200 sticky">
        {/* Top Row - Logo and Actions */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button - Left */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <div className="flex flex-col space-y-4 mt-8">
                    <Link
                      href="/category/all"
                      className="text-sm font-medium text-gray-700 hover:text-gray-900 py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      All Categories
                    </Link>
                    <Link
                      href="/blog"
                      className="text-sm font-medium text-gray-700 hover:text-gray-900 py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Blog
                    </Link>
                    {navigationItems.map((item) => (
                      <Link
                        key={item}
                        href="#"
                        className="text-sm font-medium text-gray-700 hover:text-gray-900 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Logo - Center */}
            <div className="flex justify-center w-full">
              <Link href="/" className="flex flex-col items-center">
                <Image src={logo} alt="logo" className="size-[150px]" />
              </Link>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              {/* Search */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 rounded-lg px-3 py-2"
              >
                <Search className="h-5 w-5" />
                <span className="hidden sm:inline">Search</span>
              </Button>

              {/* Sign In or User/Admin Name */}
              {isLoggedIn ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDashboardClick}
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 rounded-lg px-3 py-2"
                >
                  <User className="h-5 w-5" />
                  <span className="hidden sm:inline">
                    {userName
                      ? userName
                      : userRole === "admin"
                      ? "Admin"
                      : "User"}
                  </span>
                </Button>
              ) : (
                <Link href="/login">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSignInOpen(true)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 rounded-lg px-3 py-2"
                  >
                    <User className="h-5 w-5" />
                    <span className="hidden sm:inline">SIGN IN</span>
                  </Button>
                </Link>
              )}

              {/* Cart */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCartOpen(true)}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 rounded-lg px-3 py-2 relative"
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="hidden sm:inline">{cartItemCount}</span>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Row - Navigation Items */}
        <div className="border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hidden md:flex items-center justify-center space-x-8 h-12 overflow-x-auto scrollbar-hide">
              <Link
                href="/category/all"
                className="text-sm font-bold text-gray-700 hover:text-gray-900 whitespace-nowrap py-3 border-b-2 border-transparent hover:border-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                All Categories
              </Link>
              <Link
                href="/blog"
                className="text-sm font-bold text-gray-700 hover:text-gray-900 whitespace-nowrap py-3 border-b-2 border-transparent hover:border-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Blog
              </Link>
              {navigationItems.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm font-bold text-gray-700 hover:text-gray-900 whitespace-nowrap py-3 border-b-2 border-transparent hover:border-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Sliding Panels */}
      <SearchPanel
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};
