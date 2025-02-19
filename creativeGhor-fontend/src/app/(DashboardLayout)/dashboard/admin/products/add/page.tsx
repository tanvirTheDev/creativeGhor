"use client";

import EliteForm from "@/components/Form/EliteForm";
import UploadForm from "@/components/Form/ImageUpload";
import InputForm from "@/components/Form/InputForm";
import KeyFeaturesForm from "@/components/Form/KeyFeaturesForm";
import { SelectForm } from "@/components/Form/SelectForm";
import TextareaForm from "@/components/Form/TextAreaForm";
import { useCreateProductMutation } from "@/redux/api/productApi";
import { Button, message } from "antd";
import { FieldValues } from "react-hook-form";

const AddProductForm = () => {
  const [addProduct, { data }] = useCreateProductMutation();
  console.log(data);
  // Default form values
  const defaultValues = {
    title: "",
    category: "",
    price: null,
    salePrice: null,
    brand: "",
    colors: ["Red"], // Default selected color
    sizes: ["M"], // Default selected size
    sku: "",
    stock: "inStock",
    features: [],
    description: "",
    images: [],
  };
  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
    const productData = {
      ...values,
      price: parseFloat(values.price), // Corrected syntax
      salePrice: parseFloat(values.salePrice), // Corrected syntax
    };
    try {
      const response = await addProduct(productData);
      console.log(response);
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("An error occurred while adding the product.");
    }
  };

  return (
    <div className="bg-white text-black p-6 rounded-xl shadow-lg max-w-4xl mx-auto">
      <EliteForm onSubmit={handleSubmit} defaultValues={defaultValues}>
        <div className="mb-6">
          <UploadForm
            name="images"
            multiple
            listType="picture-card"
            buttonText="Upload Images"
          />
          <p className="text-gray-600 text-sm mt-2">
            You can add multiple images. Pay attention to the quality of the
            pictures you add.
          </p>
        </div>

        <div className="space-y-6">
          {/* Product Title */}
          <InputForm
            placeholder="Enter title"
            name="title"
            required
            className="bg-gray-100 border border-gray-300 text-black"
          />
          <p className="text-gray-600 text-xs">Do not exceed 60 characters.</p>

          {/* Category */}
          <SelectForm
            name="category"
            placeholder="Choose category"
            className="w-full bg-gray-100 text-black"
            options={[
              { value: "Bannar", label: "Bannar" },
              { value: "Business Card", label: "Business Card" },
              { value: "Calender", label: "Calender" },
              { value: "Poster", label: "Poster" },
            ]}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price */}
            <InputForm
              name="price"
              placeholder="Price"
              type="number"
              className="bg-gray-100 border border-gray-300 text-black"
            />
            {/* Sale Price */}
            <InputForm
              name="salePrice"
              placeholder="Sale Price"
              type="number"
              className="bg-gray-100 border border-gray-300 text-black"
            />
          </div>
          {/* Stock */}
          <SelectForm
            name="stock"
            placeholder="Enter Stock"
            className="w-full bg-gray-100 text-black"
            options={[
              { value: "inStock", label: "In Stock" },
              { value: "outOfStock", label: "Out of Stock" },
            ]}
          />
          {/* Key Features */}
          <KeyFeaturesForm name="features" />

          {/* Description */}
          <TextareaForm
            placeholder="Short description about product"
            name="description"
            row={4}
            className="bg-gray-100 border border-gray-300 text-black"
          />
          <p className="text-gray-600 text-xs">Do not exceed 100 characters.</p>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <Button danger>Cancel</Button>
            <Button type="primary" htmlType="submit">
              Add Product
            </Button>
          </div>
        </div>
      </EliteForm>
    </div>
  );
};

export default AddProductForm;
