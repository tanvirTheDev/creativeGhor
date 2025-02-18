"use client";

import EliteForm from "@/components/Form/EliteForm";
import UploadForm from "@/components/Form/ImageUpload";
import InputForm from "@/components/Form/InputForm";
import { SelectForm } from "@/components/Form/SelectForm";
import TextareaForm from "@/components/Form/TextAreaForm";
import {
  useGetSingleProductsQuery,
  useUpdateProductMutation,
} from "@/redux/api/productApi";
import { Button, message } from "antd";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

const EditProductForm = () => {
  const router = useRouter();
  const { productId } = useParams();
  // Store default values in state
  const [defaultValues, setDefaultValues] = useState<any>(null);
  const { data, isLoading } = useGetSingleProductsQuery(productId);
  console.log("singleProduct", data);
  console.log("isLoading", isLoading);
  const [updateProduct, { data: updateProductData }] =
    useUpdateProductMutation();
  console.log("updateProduct", updateProductData);

  const colors = ["Orange", "Blue", "Red"];
  const sizes = ["S", "M", "L", "XL"];

  // Update default values when data is fetched
  useEffect(() => {
    if (data) {
      setDefaultValues({
        title: data?.data?.title || "",
        category: data?.data?.category || "",
        price: data?.data?.price || 0,
        salePrice: data?.data?.salePrice || 80,
        stock: data?.data?.stock || "",
        features: data?.data?.features || [],
        description: data?.data?.description || "",
        images: data?.data?.images || [],
      });
    }
  }, [data]); // Runs whenever `data` changes

  const handleSubmit = async (values: FieldValues) => {
    try {
      const response = await updateProduct({ _id: productId, body: values });
      console.log("response", response);
      if (response?.data?.success) {
        toast.success("Product updated successfully!");
      }
      router.push("/dashboard/admin/products");
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("An error occurred while updating the product.");
    }
  };

  return (
    <div className="bg-white text-black p-6 rounded-xl shadow-lg max-w-4xl mx-auto">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        defaultValues && (
          <EliteForm onSubmit={handleSubmit} defaultValues={defaultValues}>
            <div className="mb-6">
              <UploadForm
                name="images"
                multiple
                listType="picture-card"
                buttonText="Upload Images"
              />
              <p className="text-gray-600 text-sm mt-2">
                You need to add at least 4 images. Pay attention to the quality
                of the pictures you add.
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
              <p className="text-gray-600 text-xs">
                Do not exceed 60 characters.
              </p>

              {/* Category */}
              <SelectForm
                name="category"
                placeholder="Choose category"
                className="w-full bg-gray-100 text-black"
                options={[
                  { value: "electronics", label: "Electronics" },
                  { value: "fashion", label: "Fashion" },
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
              <TextareaForm
                placeholder="Enter key features (one per line)"
                name="features"
                row={4}
                className="bg-gray-100 border border-gray-300 text-black"
              />
              <p className="text-gray-600 text-xs">
                Example: Model: FP-J30E-B, Plasma Cluster Ion Technology
              </p>

              {/* Description */}
              <TextareaForm
                placeholder="Short description about product"
                name="description"
                row={4}
                className="bg-gray-100 border border-gray-300 text-black"
              />
              <p className="text-gray-600 text-xs">
                Do not exceed 100 characters.
              </p>

              {/* Buttons */}
              <div className="flex justify-end gap-4">
                <Button danger>Cancel</Button>
                <Button type="primary" htmlType="submit">
                  Update Product
                </Button>
              </div>
            </div>
          </EliteForm>
        )
      )}
    </div>
  );
};

export default EditProductForm;
