import { CartDropdown } from "./CartDropdown";
import { DesktopNav } from "./DesktopNav";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { SearchBar } from "./SearchBar";
import UserDropDown from "./UserDropDown";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-5 flex h-16 items-center">
        <MobileNav />
        <Logo />
        <DesktopNav />
        <div className="flex items-center gap-4">
          <SearchBar />
          <CartDropdown />
          <UserDropDown />
        </div>
      </div>
    </header>
  );
}
