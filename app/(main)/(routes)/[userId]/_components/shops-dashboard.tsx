"use client";

import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";

import { useQuery } from "convex/react";
import { useParams, useSearchParams } from "next/navigation";
import { DashboardTitle } from "./dashboard-title";
import { ShopSwitcher } from "./shop-switcher";

export const ShopsDashboard = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const shops = useQuery(api.shops.getByUserId, {
    userId: params.userId as Id<"shops">,
  });
  const shop = useQuery(api.shops.getByShopId, {
    shopId: searchParams.get("shop") as Id<"shops">,
  });

  return (
    <div className="w-full gap-y-4 px-6 flex-1">
      <ShopSwitcher shops={shops} />
      {shop && <DashboardTitle initialData={shop} />}
    </div>
  );
};
