"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQueries, useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { Item } from "./item";

export const Sidebar = () => {
  const params = useParams();
  const shops = useQuery(api.shops.getByUserId, {
    userId: params.userId as string,
  });

  if (shops === undefined) {
    return <div>Loading</div>;
  }

  if (shops === null) {
    return <div>Not found</div>;
  }

  return (
    <aside className="w-60">
      <h2 className="font-semibold">Shops</h2>
      <ul>
        <Item isOverview />
        {shops?.map((shop) => (
          <Item
            data={shop}
            key={shop?._id}
          />
        ))}
      </ul>
    </aside>
  );
};
