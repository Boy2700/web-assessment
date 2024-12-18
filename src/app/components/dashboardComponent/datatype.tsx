export interface MetricCardProps {
    icon: React.ReactNode;
    title: string;
    value: string;
    className?: string;
  }
  
  export interface RevenueData {
    day: string;
    amount: number;
  }
  
  export interface SalesMetric {
    label: string;
    value: string;
    percentage: number;
    color: string;
  }
  
  