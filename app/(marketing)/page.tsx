import { api } from "@/convex/_generated/api";

const MarketingPage = async () => {
  const shops = await api.shops.getShops();
  return <div>MarketingPage</div>;
};

export default MarketingPage;
