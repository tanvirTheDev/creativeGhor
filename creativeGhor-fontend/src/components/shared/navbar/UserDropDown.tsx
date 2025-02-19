/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps } from "antd";
import Link from "next/link";
import React from "react";

const menuItems = [
  { key: "1", label: "Register Customer", href: "/register" },
  { key: "2", label: "Create Seller Account", href: "/seller-account" },
  { key: "3", label: "Login", href: "/login" },
];

const UserDropDown: React.FC = () => {
  // Handle click for each menu item
  const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
    console.log(`Item ${key} clicked`);
  };

  // Define Ant Design menu items
  const menu: MenuProps = {
    items: menuItems.map((item) => ({
      key: item.key,
      label: item.href ? (
        <Link href={item.href}>{item.label}</Link>
      ) : (
        item.label
      ),
      onClick: () => handleMenuClick({ key: item.key } as any),
    })),
  };

  return (
    <Dropdown menu={{ items: menu.items }} trigger={["click"]}>
      <Button
        icon={<UserOutlined />}
        shape="default"
        size="large"
        aria-label="User options"
        title="User options"
      />
    </Dropdown>
  );
};

export default UserDropDown;
