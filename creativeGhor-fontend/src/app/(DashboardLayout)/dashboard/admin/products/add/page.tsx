"use client";

import EliteForm from "@/components/Form/EliteForm";
import UploadForm from "@/components/Form/ImageUpload";
import InputForm from "@/components/Form/InputForm";
import KeyFeaturesForm from "@/components/Form/KeyFeaturesForm";
import { SelectForm } from "@/components/Form/SelectForm";
import TextareaForm from "@/components/Form/TextAreaForm";
import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import { useCreateProductMutation } from "@/redux/api/productApi";
import { TProudct } from "@/types";
import { useRouter } from "next/navigation";

const AddProductForm = () => {
  const router = useRouter();
  const [createProduct] = useCreateProductMutation();
  const { data: categories } = useGetAllCategoriesQuery();

  const defaultValues = {
    title: "",
    category: "",
    price: "",
    salePrice: "",
    stock: "",
    description: "",
    features: [],
    images: [],
  };

  const handleSubmit = async (data: Partial<TProudct>) => {
    try {
      await createProduct(data).unwrap();
      alert("Product created successfully");
      router.push("/dashboard/admin/products");
    } catch {
      alert("Failed to create product");
    }
  };

  const categoryOptions =
    categories?.data?.map((category) => ({
      value: category._id,
      label: category.name,
    })) || [];

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
            options={categoryOptions}
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
            name="description"
            placeholder="Enter product description"
            className="w-full bg-gray-100 border border-gray-300 text-black"
            row={4}
          />
        </div>

        <div className="flex gap-4 mt-8">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Product
          </button>
          <button
            type="button"
            onClick={() => router.push("/dashboard/admin/products")}
            className="flex-1 bg-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
        </div>
      </EliteForm>
    </div>
  );
};

export default AddProductForm;
