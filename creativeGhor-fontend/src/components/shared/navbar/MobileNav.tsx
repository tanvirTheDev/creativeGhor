import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { categories } from "@/lib/categories";
import { ChevronRight, Menu } from "lucide-react";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {categories.map((category) => (
            <Collapsible key={category.name}>
              <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium">
                <div className="flex items-center gap-2">{category.name}</div>
                <ChevronRight className="h-4 w-4 transition-transform duration-200" />
              </CollapsibleTrigger>
            </Collapsible>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
