"use client";

import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import UserAvatar from "./user-button";

const MarketingHeader = () => {
  const pathname = usePathname();
  const { user } = useUser();
  const { isLoading, isAuthenticated } = useConvexAuth();
  return (
    <header className="flex items-center gap-x-2 w-full shadow-sm py-2">
      <div>
        <Button
          size="sm"
          variant="default"
        >
          {isAuthenticated && <Link href={`/${user?.id}`}>Open a shop</Link>}
          {!isAuthenticated && (
            <>
              <SignInButton mode="redirect">Open a shop</SignInButton>
            </>
          )}
        </Button>
        {pathname === "/shops" ? (
          <Button
            size="sm"
            variant="secondary"
          >
            <Link href="/">About restoRUN</Link>
          </Button>
        ) : (
          <Button
            size="sm"
            variant="secondary"
          >
            <Link href="/shops">Explore shops</Link>
          </Button>
        )}
      </div>
      <UserAvatar />
    </header>
  );
};

export default MarketingHeader;
