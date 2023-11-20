import React from "react";

interface ShopLayoutProps {
  children: React.ReactNode;
}

export const ShopLayout = ({ children }: ShopLayoutProps) => {
  return <div>{children}</div>;
};

export default ShopLayout;
