
import React from 'react';
import { 
  ArrowDownIcon, 
  ArrowUpIcon,
  DollarSign,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type SummaryCardProps = {
  title: string;
  amount: number;
  type: 'income' | 'expense' | 'balance';
  changePercentage?: number;
};

const SummaryCard: React.FC<SummaryCardProps> = ({ 
  title, 
  amount, 
  type, 
  changePercentage = 0 
}) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(value);
  };
  
  const getIcon = () => {
    switch(type) {
      case 'income':
        return <ArrowUpIcon className="h-5 w-5 text-green-500" />;
      case 'expense':
        return <ArrowDownIcon className="h-5 w-5 text-red-500" />;
      case 'balance':
        return <DollarSign className="h-5 w-5 text-blue-500" />;
      default:
        return null;
    }
  };

  const getCardClasses = () => {
    switch(type) {
      case 'income':
        return 'border-l-4 border-income';
      case 'expense':
        return 'border-l-4 border-expense';
      case 'balance':
        return 'border-l-4 border-finance-blue';
      default:
        return '';
    }
  };
  
  return (
    <Card className={`card-hover ${getCardClasses()}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gray-100 p-2 rounded-full">
              {getIcon()}
            </div>
            <h3 className="font-medium text-gray-600">{title}</h3>
          </div>
          
          {changePercentage !== 0 && (
            <div className={`text-xs font-medium flex items-center ${changePercentage > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {changePercentage > 0 ? 
                <ArrowUpIcon className="h-3 w-3 mr-1" /> : 
                <ArrowDownIcon className="h-3 w-3 mr-1" />
              }
              {Math.abs(changePercentage)}%
            </div>
          )}
        </div>
        
        <div className="mt-3">
          <p className={`text-2xl font-bold ${
            type === 'income' ? 'text-income' : 
            type === 'expense' ? 'text-expense' : 
            'finance-text-gradient'
          }`}>
            {formatCurrency(amount)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {type === 'balance' ? 'Current Balance' : 'This Month'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
