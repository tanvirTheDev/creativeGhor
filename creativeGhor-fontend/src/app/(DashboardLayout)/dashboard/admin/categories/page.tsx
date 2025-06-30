"use client";

import EliteForm from "@/components/Form/EliteForm";
import ImageUpload from "@/components/Form/ImageUpload";
import InputForm from "@/components/Form/InputForm";
import TextAreaForm from "@/components/Form/TextAreaForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
} from "@/redux/api/categoryApi";
import { Edit, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const CategoriesPage = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { data: categories, isLoading } = useGetAllCategoriesQuery();
  const [createCategory] = useCreateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  const handleCreateCategory = async (data: {
    name?: string;
    description?: string;
    image?: string | string[];
  }) => {
    try {
      console.log("Raw form data:", data); // Debug log

      // Process the data to handle image upload properly
      const categoryData: Record<string, string | undefined> = {
        name: data.name,
        description: data.description,
      };

      // Handle image field - if it's an array, take the first item
      if (data.image) {
        if (Array.isArray(data.image)) {
          categoryData.image = data.image[0];
        } else {
          categoryData.image = data.image;
        }
      }

      console.log("Processed category data:", categoryData); // Debug log

      // Remove undefined or empty values
      Object.keys(categoryData).forEach((key) => {
        if (categoryData[key] === undefined || categoryData[key] === "") {
          delete categoryData[key];
        }
      });

      console.log("Final category data:", categoryData); // Debug log

      // Ensure name is present
      if (!categoryData.name) {
        alert("Category name is required!");
        return;
      }

      await createCategory(categoryData).unwrap();
      alert("Category created successfully");
      setIsCreateModalOpen(false);
    } catch (error) {
      console.error("Error creating category:", error);
      alert("Failed to create category");
    }
  };

  // Test function to create category without image
  const handleTestCreate = async () => {
    try {
      const testData = {
        name: "Test Category",
        description: "Test description",
      };
      console.log("Test data:", testData);
      await createCategory(testData).unwrap();
      alert("Test category created successfully");
    } catch (error) {
      console.error("Test error:", error);
      alert("Test failed");
    }
  };

  const handleDeleteCategory = async (id: string) => {
    try {
      await deleteCategory(id).unwrap();
      alert("Category deleted successfully");
    } catch {
      alert("Failed to delete category");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Categories</h1>
        <div className="flex gap-2">
          <Button onClick={handleTestCreate} variant="outline">
            Test Create
          </Button>
          <Button onClick={() => setIsCreateModalOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Category
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories?.data?.map((category) => (
          <Card key={category._id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{category.name}</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteCategory(category._id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {category.image && (
                <Image
                  src={category.image}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="w-full h-32 object-cover rounded-md mb-3"
                />
              )}
              {category.description && (
                <p className="text-gray-600 text-sm">{category.description}</p>
              )}
              <div className="mt-3">
                <span className="text-xs text-gray-500">
                  Slug: {category.slug}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Create Category Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Create Category</h2>
            <EliteForm onSubmit={handleCreateCategory}>
              <InputForm
                name="name"
                placeholder="Category Name"
                required
                className="mb-4"
              />
              <TextAreaForm
                name="description"
                placeholder="Category Description"
                className="mb-4"
              />
              <ImageUpload
                name="image"
                buttonText="Upload Category Image"
                className="mb-4"
              />
              <div className="flex gap-2">
                <Button type="submit" className="flex-1">
                  Create
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </EliteForm>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;
