"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import Link from "next/link";
import { useParams } from "next/navigation";

const Dashboard = () => {
  const params = useParams();
  const shops = useQuery(api.shops.getByUserId, {
    userId: params.userId as Id<"shops">,
  });
  console.log(shops);

  return (
    <div>
      <h1>Dashboardaa</h1>
      <div>
        {shops?.map((shop) => (
          <Link
            key={shop._id}
            href={`/${params.userId}/${shop._id}`}
          >
            <div>{shop?.shopName}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
