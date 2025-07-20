import { PortfolioPageClient } from "@/components/client/pages/PortfolioPageClient";

// Mock portfolio data
const mockPortfolio = {
  id: "default-portfolio",
  name: "My Portfolio",
  totalValue: 33553.575,
  totalCost: 31000,
  totalPnL: 2553.575,
  totalPnLPercentage: 8.24,
  dayChange: 680.23,
  dayChangePercentage: 2.07,
  weekChange: -234.56,
  weekChangePercentage: -0.69,
  monthChange: 1234.67,
  monthChangePercentage: 3.82,
  allTimeHigh: 35000,
  allTimeLow: 28000,
  volatility: 12.5,
  sharpeRatio: 1.2,
};

export default function PortfolioPage() {
  return <PortfolioPageClient portfolio={mockPortfolio} />;
}
