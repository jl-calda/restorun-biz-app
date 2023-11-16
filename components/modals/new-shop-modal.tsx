"use client";

import { api } from "@/convex/_generated/api";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useParams } from "next/navigation";
import { useMutation } from "convex/react";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface NewShopModalProps {
  children: React.ReactNode;
}

const NewShopModal: React.FC<NewShopModalProps> = ({ children }) => {
  const [shopName, setShopName] = useState("Untitled Shop");
  const params = useParams();
  const router = useRouter();
  const create = useMutation(api.shops.create);

  const onCreate = () => {
    const promise = create({
      shopName: shopName,
    }).then((shop) => router.push(`/${params.userId}/${shop}`));
    console.log(promise);
    toast.promise(promise, {
      success: "Shop created! Continue setting up your shop.",
      loading: "Creating shop...",
      error: "Error creating shop",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Whats your new shop name?</DialogTitle>
          <DialogDescription>Make it short and catchy!</DialogDescription>
        </DialogHeader>
        <Input
          id="shop-name"
          defaultValue={shopName}
          onChange={(e) => setShopName(e.target.value)}
        />
        <DialogFooter>
          <Button onClick={onCreate}>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewShopModal;
