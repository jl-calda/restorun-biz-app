import NewShopModal from "@/components/modals/new-shop-modal";
import { Button } from "@/components/ui/button";
import { ShopsDashboard } from "./_components/shops-dashboard";

const UserPage = () => {
  return (
    <main className="h-full">
      <ShopsDashboard />

      {/* <NewShopModal>
        <Button>Open a shop</Button>
      </NewShopModal> */}
    </main>
  );
};

export default UserPage;
