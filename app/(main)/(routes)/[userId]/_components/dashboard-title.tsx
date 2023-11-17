"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Doc } from "@/convex/_generated/dataModel";

interface DashboardTitleProps {
  initialData: Doc<"shops"> | undefined;
}

export const DashboardTitle = ({ initialData }: DashboardTitleProps) => {
  if (!initialData) return <Skeleton />;

  return (
    <span className="text-lg tracking-wide font-medium">
      {initialData?.shopName}
    </span>
  );
};

DashboardTitle.Skeleton = () => {};
