import { message } from "antd";
import { RcFile } from "antd/es/upload";
import axios from "axios";

const useImageUpload = () => {
  const uploadToCloudinary = async (file: RcFile): Promise<string | null> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "products"); // Replace with your Cloudinary preset
    formData.append("cloud_name", "db7gm7o4g"); // Replace with your Cloudinary cloud name

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/db7gm7o4g/image/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      return response.data.secure_url; // Return the uploaded image URL
    } catch (error) {
      console.error("Error uploading image:", error);
      message.error("Image upload failed.");
      return null;
    }
  };

  return { uploadToCloudinary };
};

export default useImageUpload;
