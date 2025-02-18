import { USER_ROLE } from "@/constants/role";
import { IDrawerItem, UserRole } from "@/types";
import {
  AppstoreOutlined,
  FileTextOutlined,
  HeartOutlined,
  LineChartOutlined,
  PlusCircleOutlined,
  ReadOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  UnorderedListOutlined,
  UploadOutlined,
} from "@ant-design/icons";

export const getMenuItems = (role: UserRole) => {
  const defaultRoutes = [
    {
      key: "profile",
      label: "Profile",
      path: `/dashboard/${role}/profile`,
      icon: SettingOutlined,
    },
    {
      key: "change-password",
      label: "Change Password",
      path: `/dashboard/${role}/change-password`,
      icon: SettingOutlined,
    },
  ];

  const roleMenus: IDrawerItem[] = [];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          key: "dashboard",
          label: "Dashboard",
          path: `/dashboard`,
          icon: AppstoreOutlined,
        },
        {
          key: "manage-products",
          label: "Manage Products",
          path: `/dashboard/${role}/products`,
          icon: AppstoreOutlined,
          child: [
            {
              key: "all-products",
              label: "All Products",
              path: `/dashboard/${role}/products`,
              icon: UnorderedListOutlined, // 📌 Icon for All Products
            },
            {
              key: "add-product",
              label: "Add Product",
              path: `/dashboard/${role}/products/add`,
              icon: PlusCircleOutlined, // 📌 Icon for Add Product
            },
            {
              key: "product-details",
              label: "Product Details",
              path: `/dashboard/${role}/products/details`,
              icon: ReadOutlined, // 📌 Icon for Product Details
            },
          ],
        },
        {
          key: "flash-sales",
          label: "Flash Sales",
          path: `/dashboard/${role}/flash-sales`,
          icon: UploadOutlined,
        },
        {
          key: "analytics",
          label: "Analytics",
          path: `/dashboard/${role}/analytics`,
          icon: LineChartOutlined,
        },
        {
          key: "orders",
          label: "Orders",
          path: `/dashboard/${role}/orders`,
          icon: FileTextOutlined,
        },
        {
          key: "users",
          label: "Users Management",
          path: `/dashboard/${role}/users`,
          icon: TeamOutlined,
        }
      );
      break;

    case USER_ROLE.CUSTOMER:
      roleMenus.push(
        {
          key: "my-orders",
          label: "My Orders",
          path: `/dashboard/${role}/my-orders`,
          icon: ShoppingCartOutlined,
        },
        {
          key: "wishlist",
          label: "Wishlist",
          path: `/dashboard/${role}/wishlist`,
          icon: HeartOutlined,
        },
        {
          key: "account-settings",
          label: "Account Settings",
          path: `/dashboard/${role}/settings`,
          icon: SettingOutlined,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus, ...defaultRoutes];
};
