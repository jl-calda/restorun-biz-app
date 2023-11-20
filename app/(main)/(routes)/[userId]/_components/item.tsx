"use client";

import { Button } from "@/components/ui/button";
import { Doc } from "@/convex/_generated/dataModel";
import { useParams, useRouter } from "next/navigation";

interface ItemProps {
  data?: Doc<"shops">;
  isOverview?: boolean;
}

export const Item = ({ data, isOverview }: ItemProps) => {
  const router = useRouter();
  const params = useParams();

  if (data === undefined) {
    return <div>Loading</div>;
  }

  if (data === null) {
    return <div>Not found</div>;
  }

  const onClick = () => {
    if (isOverview) {
      router.push(`/${params.userId}`);
    } else {
      if (data) {
        router.push(`/${params.userId}/${data._id}}`);
      } else {
        router.push(`/${params.userId}`);
      }
    }
  };

  return (
    <li className="px-2">
      <Button
        variant="ghost"
        className="w-full justify-start"
        onClick={onClick}
      >
        {isOverview ? <span>Overview</span> : <span>{data?.shopName}</span>}
      </Button>
    </li>
  );
};
