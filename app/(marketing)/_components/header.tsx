"use client";

import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { useConvexAuth, useQuery } from "convex/react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import UserAvatar from "./user-button";
import { api } from "@/convex/_generated/api";
import { useCallback } from "react";

const MarketingHeader = () => {
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  const pathname = usePathname();
  const { user } = useUser();
  const { isLoading, isAuthenticated } = useConvexAuth();
  const shop = useQuery(api.shops.getFirstByUserId, { userId: user?.id || "" });

  const URL = shop
    ? `/${user?.id}` + "?" + createQueryString("shop", shop?._id)
    : `/{user}`;

  return (
    <header className="flex items-center gap-x-2 w-full shadow-sm py-2">
      <div>
        <Button
          size="sm"
          variant="default"
        >
          {isAuthenticated && <Link href={`${URL}`}>Open a shop</Link>}
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
