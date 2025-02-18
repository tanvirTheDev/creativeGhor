"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

export function SearchBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div
        className={`${
          isSearchOpen ? "flex" : "hidden"
        } absolute left-0 top-0 w-full items-center gap-2 bg-background p-4 md:static md:flex md:w-auto md:p-0`}
      >
        <Input
          type="search"
          placeholder="Search products..."
          className="md:w-[200px] lg:w-[300px]"
        />
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsSearchOpen(false)}
        >
          ✕
        </Button>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className={`${isSearchOpen ? "hidden" : "flex"} md:hidden`}
        onClick={() => setIsSearchOpen(true)}
      >
        <Search className="h-5 w-5" />
      </Button>
    </>
  );
}
