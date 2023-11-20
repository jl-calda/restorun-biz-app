"use client";

import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import { Header } from "./_components/header";
import { Subheader } from "./_components/sub-header";
import { Sidebar } from "./_components/sidebar";

interface UserLayoutProps {
  children: React.ReactNode;
  params: {
    userId: string;
  };
}

export const UserLayout = ({
  children,
  params: { userId },
}: UserLayoutProps) => {
  const router = useRouter();
  // const { user } = useUser();

  // if (user?.id !== userId) {
  //   router.push(`/${user?.id}`);
  // }

  return (
    <div className="flex flex-col min-h-full px-3">
      <Header />
      <div className="flex-1 flex flex-col h-full">
        <Subheader />
        <div className="flex-1 flex">
          <Sidebar />
          <div className="flex-1 bg-red-300">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
