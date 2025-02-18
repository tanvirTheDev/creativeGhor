import { USER_ROLE } from "@/constants/role";
import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon"; // Adjust the path if necessary
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type UserRole = keyof typeof USER_ROLE;
export type TMeta = {
  page: number;
  limit: number;
  total: number;
};
export interface IDrawerItem {
  key: string;
  label: string;
  path: string;
  // parentPath?: string; // Corrected spelling from 'parrentPath'
  icon?: ForwardRefExoticComponent<
    Omit<AntdIconProps, "ref"> & RefAttributes<HTMLSpanElement>
  >;
  child?: IDrawerItem[];
}
