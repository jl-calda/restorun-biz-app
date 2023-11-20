"use client";

import NewShopModal from "@/components/modals/new-shop-modal";
import { Button } from "@/components/ui/button";
import React from "react";

export const Header = () => {
  return (
    <div>
      <NewShopModal>
        <Button>New Shop</Button>
      </NewShopModal>
    </div>
  );
};
