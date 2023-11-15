"use client";

import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

const MarketingHeader = () => {
  const pathname = usePathname();
  const { user } = useUser();
  const { isLoading, isAuthenticated } = useConvexAuth();
  return (
    <header className="flex items-center gap-x-2">
      <Button
        size="lg"
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
          size="lg"
          variant="secondary"
        >
          <Link href="/">About RestoRUN</Link>
        </Button>
      ) : (
        <Button
          size="lg"
          variant="secondary"
        >
          <Link href="/shops">Explore shops</Link>
        </Button>
      )}

      {isAuthenticated ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <SignInButton mode="modal" />
      )}
    </header>
  );
};

export default MarketingHeader;
