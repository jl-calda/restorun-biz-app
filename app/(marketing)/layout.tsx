import MarketingHeader from "./_components/header";
import Header from "./_components/header";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

const MarketingLayout: React.FC<MarketingLayoutProps> = ({ children }) => {
  return (
    <div className="h-full bg-slate-50">
      <MarketingHeader />
      {children}
    </div>
  );
};

export default MarketingLayout;
