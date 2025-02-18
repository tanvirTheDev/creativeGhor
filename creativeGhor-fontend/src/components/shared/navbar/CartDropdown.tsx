import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCart } from "lucide-react";

export function CartDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          <Badge className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0">
            3
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>My Cart</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="grid gap-4 p-2">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-md bg-muted" />
            <div className="grid gap-1">
              <h4 className="text-sm font-medium">Wireless Earbuds</h4>
              <p className="text-sm text-muted-foreground">1 × $99.00</p>
            </div>
          </div>
          <DropdownMenuSeparator />
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Total</span>
            <span className="text-sm font-medium">$99.00</span>
          </div>
          <Button className="w-full">Checkout</Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
