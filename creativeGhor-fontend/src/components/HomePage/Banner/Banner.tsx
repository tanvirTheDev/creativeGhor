import Image from "next/image";
import banner1 from "../../../../public/images/banner/banner-1.jpg";
import banner2 from "../../../../public/images/banner/banner-2.jpg";
const Banner = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-3 container md:px-0 h-[400px]">
      <div className="flex flex-col md:flex-row gap-10 absolute top-5 md:-top-10">
        <div>
          <Image src={banner1} alt="banner1" width={1000} height={600} />
        </div>
        <div>
          <Image src={banner2} alt="banner2" width={1000} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
