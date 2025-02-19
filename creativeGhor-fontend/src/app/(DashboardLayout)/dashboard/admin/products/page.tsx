/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/redux/api/productApi";
import { TProudct } from "@/types";
import { formatDate } from "@/utils/formatDate";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input, Table, Tag } from "antd";
import Link from "next/link";
import { useState } from "react";

const AllProducts = () => {
  const [searchText, setSearchText] = useState("");
  const { data: productData, isLoading: productDataLoading } =
    useGetAllProductsQuery(undefined);
  const [deleteProductData] = useDeleteProductMutation();

  const handleSearch = (e: any) => {
    setSearchText(e.target.value);
  };

  const handleDelete = async (_id: string) => {
    try {
      const res = await deleteProductData(_id);
      console.log("deletedd", res);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "Product",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Product ID",
      dataIndex: "sku",
      key: "sku",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `$${price.toLocaleString()}`,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      render: (stock: string) => (
        <Tag color={stock === "In Stock" ? "red" : "green"}>{stock}</Tag>
      ),
    },
    {
      title: "Start Date",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (text: string) => formatDate(text),
    },
    {
      title: "Action",
      key: "action",
      render: (_: unknown, record: TProudct) => (
        <div className="flex space-x-2">
          <Button icon={<EyeOutlined />} />
          <Link href={`/dashboard/admin/products/edit/${record._id}`}>
            <Button icon={<EditOutlined />} />
          </Link>
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(record._id)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="flex justify-between mb-4">
        <Input
          placeholder="Search here..."
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={handleSearch}
          className="w-1/3"
        />
        <Button type="primary">+ Add New</Button>
      </div>
      <Table
        columns={columns}
        dataSource={productData?.data?.map((product: TProudct) => ({
          ...product,
          key: product._id, // Ensure each row has a unique key
        }))}
        pagination={{ pageSize: 10 }}
        loading={productDataLoading}
      />
    </div>
  );
};

export default AllProducts;
