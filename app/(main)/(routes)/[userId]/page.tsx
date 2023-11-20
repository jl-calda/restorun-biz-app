"use client";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import { useQuery } from "convex/react";
import { useParams } from "next/navigation";

import NewShopModal from "@/components/modals/new-shop-modal";
import { Button } from "@/components/ui/button";
import { ShopSwitcher } from "./_components/shop-switcher";

const UserPage = () => {
  const params = useParams();
  // const shops = useQuery(api.shops.getByUserId, {
  //   userId: params.userId as Id<"shops">,
  // });

  return (
    <main className="h-full">
      Overview
      {/* <DashboardHeader initialData={currentShop}/> */}
    </main>
  );
};

export default UserPage;
