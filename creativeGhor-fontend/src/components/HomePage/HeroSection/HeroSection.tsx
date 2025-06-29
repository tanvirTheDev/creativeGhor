"use client";

import Image from "next/image";
import topBanner from "../../../../public/images/emi.webp";
import bottomBanner from "../../../../public/images/hotDeal.webp";
import { HeroSlider } from "./HeroSlider";

export default function HeroSection() {
  return (
    <section className="w-full bg-gray-50 py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full lg:h-[500px]">
          {/* Left Side - Main Slider (2/3 width) */}
          <div className="lg:col-span-2 h-[300px] md:h-[500px]">
            <HeroSlider />
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-4 w-full">
            {/* Top Banner */}
            <div className="relative w-full aspect-[12/9] lg:h-[250px]">
              <Image
                src={topBanner}
                alt="top banner"
                fill
                className="object-contain w-full h-full"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

            {/* Bottom Banner */}
            <div className="relative w-full aspect-[12/9] lg:h-[250px]">
              <Image
                src={bottomBanner}
                alt="bottom banner"
                fill
                className="object-contain w-full h-full"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
