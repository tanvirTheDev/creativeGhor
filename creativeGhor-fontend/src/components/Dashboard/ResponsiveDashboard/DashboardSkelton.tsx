"use client";
import { Layout, Skeleton } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const DashboardSkeleton = () => {
  return (
    <Layout>
      <Sider collapsedWidth="0" className="">
        <Skeleton active paragraph={{ rows: 6 }} />
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <Skeleton active paragraph={{ rows: 10 }} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardSkeleton;
