
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Budget } from '@/types';
import { Progress } from '@/components/ui/progress';

type BudgetCardProps = {
  budget: Budget;
};

const BudgetCard: React.FC<BudgetCardProps> = ({ budget }) => {
  const { category, amount, spent } = budget;
  
  // Calculate percentage of budget spent
  const percentSpent = (spent / amount) * 100;
  
  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };
  
  // Determine progress bar color based on percentage
  const getProgressColor = () => {
    if (percentSpent < 50) return 'bg-green-500';
    if (percentSpent < 80) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: category.color }}
            ></div>
            <CardTitle className="text-sm font-medium">
              {category.name}
            </CardTitle>
          </div>
          <span className="text-xs text-gray-500">
            {formatCurrency(spent)} of {formatCurrency(amount)}
          </span>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <Progress 
          value={percentSpent} 
          className={`h-2 ${getProgressColor()}`}
        />
        <div className="flex justify-between mt-1">
          <span className="text-xs text-gray-500">
            {percentSpent.toFixed(0)}% used
          </span>
          <span className="text-xs text-gray-500">
            {formatCurrency(amount - spent)} left
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetCard;
