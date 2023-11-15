import NewShopModal from "@/components/modals/new-shop-modal";
import { Button } from "@/components/ui/button";
import Dashboard from "../_components/dashboard";

const UserPage = () => {
  return (
    <div>
      <Dashboard />
      <NewShopModal>
        <Button>Open a shop</Button>
      </NewShopModal>
    </div>
  );
};

export default UserPage;
