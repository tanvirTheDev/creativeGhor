import { Image as AntImage, Modal } from "antd";
import Image from "next/image";
import { useState } from "react";

export const ProductImageGallery = ({ images }: { images: string[] }) => {
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center">
      {/* Main Image */}
      <div
        className="w-full max-w-md cursor-pointer"
        onClick={() => setVisible(true)}
      >
        <AntImage
          src={selectedImage}
          alt="Product Image"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex gap-2 mt-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-16 h-16 relative cursor-pointer border-2 rounded-md overflow-hidden"
            onClick={() => setSelectedImage(img)}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className={`rounded-md ${
                selectedImage === img ? "border-blue-500" : "border-gray-300"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Modal for Full View */}
      <Modal open={visible} footer={null} onCancel={() => setVisible(false)}>
        <AntImage
          src={selectedImage}
          alt="Full Product Image"
          className="rounded-lg"
        />
      </Modal>
    </div>
  );
};
