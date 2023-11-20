import { useParams, useRouter } from "next/navigation";
import React from "react";

export const ShopSidebar = () => {
  const params = useParams();
  const router = useRouter();
  const routes = [
    {
      name: "Settings",
      onClick: () => router.push(`/${params.userId}/${params.shopId}/settings`),
      subRoutes: [
        {
          name: "General",
          onClick: () =>
            router.push(`/${params.userId}/${params.shopId}/settings/general`),
        },
      ],
    },
  ];

  return <div>ShopSidebar</div>;
};
