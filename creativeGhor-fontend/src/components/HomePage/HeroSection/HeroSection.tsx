import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HeroSection() {
  return (
    <div className="relative min-h-[400px] w-full overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-purple-800">
      <div className="absolute inset-0 bg-[linear-gradient(40deg,#00000088,#00000022)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 px-4 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Easy Way To Sell Digital Goods
        </h1>
        <p className="text-lg text-gray-200">
          [ Best place to buy and sell digital products ]
        </p>
        <div className="flex w-full max-w-3xl items-center gap-2">
          <div className="relative flex-1">
            <Input
              type="search"
              placeholder="Search your products..."
              className="h-12 w-full bg-white pr-4 text-base"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="h-12 w-[180px] bg-white">
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              <SelectItem value="software">Software</SelectItem>
              <SelectItem value="ebooks">eBooks</SelectItem>
              <SelectItem value="graphics">Graphics</SelectItem>
              <SelectItem value="music">Music</SelectItem>
            </SelectContent>
          </Select>
          <Button
            type="submit"
            size="lg"
            className="h-12 bg-red-600 px-8 hover:bg-red-700"
          >
            Search Now
          </Button>
        </div>
      </div>
    </div>
  );
}
