"use client";

import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";

import { useQuery } from "convex/react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { use, useEffect, useMemo, useState } from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Check, PlusCircle, Store } from "lucide-react";
import NewShopModal from "@/components/modals/new-shop-modal";
import { toast } from "sonner";

export const ShopSwitcher = () => {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const shops = useQuery(api.shops.getByUserId, {
    userId: params.userId as Id<"shops">,
  });
  const [selectedShop, setSelectedShop] = useState<Doc<"shops"> | undefined>(
    undefined
  );

  useEffect(() => {
    if (shops) {
      const shop = shops.find((shop) => shop._id === searchParams.get("shop"));
      setSelectedShop(shop);
    }
  }, [shops]);

  const onSelect = (value: string | Id<"shops">) => {
    const queryString = new URLSearchParams(searchParams);
    queryString.set("shopId", value);
    router.push(`/${params.userId}?${queryString.toString()}`);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="w-60 flex items-center justify-start p-2.5"
        >
          <Store className="text-foreground w-4 h-4 mr-4" />
          {selectedShop === undefined && <Spinner size="sm" />}
          {selectedShop && (
            <span className="text-foreground">{selectedShop?.shopName}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="p-0 rounded-sm w-60"
        align="start"
      >
        <Command shouldFilter={true}>
          <CommandInput
            className="text-xs text-muted-foreground"
            placeholder="Search for shops..."
          />
          <CommandSeparator />
          <CommandGroup
            heading={shops === undefined ? "No shops found" : "Current shops"}
          >
            <CommandList>
              <>
                {shops?.map((shop) => (
                  <CommandItem
                    value={shop._id}
                    onSelect={onSelect}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <Store className="text-muted-foreground w-4 h-4 mr-4" />
                      <span>{shop.shopName}</span>
                    </div>
                    {shop.shopName === selectedShop?.shopName && (
                      <Check className="text-foreground w-4 h-4" />
                    )}
                  </CommandItem>
                ))}
              </>
            </CommandList>
          </CommandGroup>
          <CommandSeparator />
          <NewShopModal>
            <Button
              variant="secondary"
              className="justify-start gap-0 p-2.5"
            >
              <PlusCircle className="text-muted-foreground w-4 h-4 mr-4" />
              <span className="">Open a new shop</span>
            </Button>
          </NewShopModal>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
