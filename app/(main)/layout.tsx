"use client";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isLoading, isAuthenticated } = useConvexAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    redirect("/");
  }

  return (
    <div>
      Navbar
      {children}
    </div>
  );
};

export default MainLayout;
