"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { useParams } from "next/navigation";

const ShopPage = () => {
  const params = useParams();
  const shop = useQuery(api.shops.getByShopId, {
    shopId: params.shopId as Id<"shops">,
  });
  return <h1>{shop?.shopName}</h1>;
};

export default ShopPage;
