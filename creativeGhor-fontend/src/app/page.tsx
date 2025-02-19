import FeaturedProduct from "@/components/HomePage/FeaturedProduct/FeaturedProduct";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import Footer from "@/components/shared/Footer/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <Banner />
      <FeaturedCategories /> */}
      <FeaturedProduct />
      <Footer />
    </div>
  );
}
