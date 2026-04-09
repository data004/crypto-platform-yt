"use client";

import PortfolioPageClient from "../../components/portfolio/PortfolioPageClient";

// Mock data for initial development
const mockPortfolio = {
  id: "1",
  name: "Main Portfolio",
  totalValue: 125430.50,
  totalCost: 98200.00,
  totalPnL: 27230.50,
  totalPnLPercentage: 27.73,
  dayChange: 1250.20,
  dayChangePercentage: 1.01,
  weekChange: -540.30,
  weekChangePercentage: -0.43,
  monthChange: 8420.10,
  monthChangePercentage: 7.19,
  allTimeChange: 27230.50,
  allTimeChangePercentage: 27.73,
  bestPerformer: "BTC",
  worstPerformer: "ETH",
  riskScore: 65,
  volatility: 12.5,
  sharpeRatio: 2.1,
};

// Added empty arrays/objects to satisfy the TypeScript interface
export default function PortfolioPage() {
  return (
    <PortfolioPageClient 
      portfolio={mockPortfolio} 
      holdings={[]} 
      performanceData={[]} 
      metrics={{
        volatility: mockPortfolio.volatility,
        sharpeRatio: mockPortfolio.sharpeRatio,
        maxDrawdown: 0,
        winRate: 0
      }}
    />
  );
}
