import { categories } from "@/lib/categories";
import Link from "next/link";

export function DesktopNav() {
  return (
    <nav className="hidden md:flex md:flex-1">
      <ul className="flex gap-6">
        {categories.map((category) => (
          <li key={category.name} className="relative group ">
            <Link
              href={category.href}
              className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
            >
              <p className="text-textPrimary font-bold hover:text-primary_color transition-all">
                {" "}
                {category.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
