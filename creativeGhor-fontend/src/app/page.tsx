import { FeaturedCategories } from "@/components/HomePage/FeaturedCategories/FeaturedCategories";
import FeaturedProduct from "@/components/HomePage/FeaturedProduct/FeaturedProduct";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import { Footer } from "@/components/shared/Footer/Footer";

import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <div>
      <Ticker />
      <HeroSection />
      {/* <Banner /> */}
      <FeaturedCategories />
      <FeaturedProduct />
      <Footer />
    </div>
  );
}
