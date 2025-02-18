"use client";
import { getUserInfo } from "@/services/auth.services";
import { IDrawerItem, UserRole } from "@/types";
import { getMenuItems } from "@/utils/sidebarItems";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DashboardSkeleton from "./DashboardSkelton";

const { Content, Sider } = Layout;

const ResponsiveDashboard = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [mounted, setMounted] = useState(false);
  const userInfo = getUserInfo() as { role?: UserRole };
  const menuItems = getMenuItems(userInfo?.role || "CUSTOMER"); // Default to 'customer'

  useEffect(() => {
    setTimeout(() => setMounted(true), 500); // Delay for smooth rendering
  }, []);

  if (!mounted) {
    return <DashboardSkeleton />;
  }

  // Convert menuItems to Antd's `items` format
  const menuData = menuItems.map((item: IDrawerItem) => {
    if (item.child) {
      return {
        key: item.key,
        icon: React.createElement(item.icon!),
        label: item.label,
        children: item.child.map((subItem: IDrawerItem) => ({
          key: subItem.key,
          icon: React.createElement(subItem.icon!),
          label: <Link href={subItem.path}>{subItem.label}</Link>,
        })),
      };
    }
    return {
      key: item.key,
      icon: React.createElement(item.icon!),
      label: <Link href={item.path}>{item.label}</Link>,
    };
  });

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="demo-logo-vertical" />
        {/* Pass `items` directly to Menu */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          items={menuData}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ResponsiveDashboard;
