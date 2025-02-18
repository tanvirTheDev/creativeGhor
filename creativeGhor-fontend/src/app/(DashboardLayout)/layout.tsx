import Dashboard from "@/components/Dashboard/ResponsiveDashboard/Dashboard";
import "antd/dist/reset.css"; // Use the latest reset.css
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Dashboard>{children}</Dashboard>
    </div>
  );
};

export default DashboardLayout;
