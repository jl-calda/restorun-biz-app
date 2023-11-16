import MarketingHeader from "./_components/header";
import Header from "./_components/header";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

const MarketingLayout: React.FC<MarketingLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-full bg-slate-50">
      <MarketingHeader />
      <main className="flex-1 max-w-6xl container">{children}</main>
    </div>
  );
};

export default MarketingLayout;
