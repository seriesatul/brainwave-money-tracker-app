
import React from 'react';
import { format } from 'date-fns';
import { Transaction } from '@/types';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';

type TransactionItemProps = {
  transaction: Transaction;
};

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const { amount, type, date, category, description } = transaction;
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(value);
  };

  // Use a color circle instead of trying to dynamically import icons
  const getCategoryCircle = () => {
    return <div className="h-3 w-3 rounded-full" style={{ backgroundColor: category.color }}></div>;
  };

  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm border">
      <div className="flex items-center">
        <div className="mr-3 bg-gray-100 p-2 rounded-full" style={{ backgroundColor: `${category.color}20` }}>
          {type === 'income' ? 
            <ArrowUpIcon className="h-4 w-4 text-income" /> : 
            <ArrowDownIcon className="h-4 w-4 text-expense" />
          }
        </div>
        <div>
          <p className="font-medium text-sm">{description}</p>
          <div className="flex items-center">
            <span className="text-xs text-gray-500 mr-2">{category.name}</span>
            <span className="text-xs text-gray-400">{format(date, 'MMM dd')}</span>
          </div>
        </div>
      </div>
      <span className={`font-semibold ${type === 'income' ? 'text-income' : 'text-expense'}`}>
        {type === 'income' ? '+' : '-'} {formatCurrency(amount)}
      </span>
    </div>
  );
};

export default TransactionItem;
