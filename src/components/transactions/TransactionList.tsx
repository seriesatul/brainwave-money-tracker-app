
import React from 'react';
import { Calendar, Search } from 'lucide-react';
import { Transaction } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import TransactionItem from './TransactionItem';
import { Button } from '@/components/ui/button';

type TransactionListProps = {
  transactions: Transaction[];
};

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Recent Transactions</CardTitle>
        <Button variant="outline" size="sm" className="text-xs">
          <Calendar className="h-3 w-3 mr-1" />
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search transactions..." 
            className="pl-9 text-sm"
          />
        </div>
        <div className="space-y-4 max-h-[400px] overflow-auto scrollbar-hide pr-2">
          {transactions.map(transaction => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionList;
