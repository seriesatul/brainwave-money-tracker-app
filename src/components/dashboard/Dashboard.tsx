
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import SummaryCard from '@/components/dashboard/SummaryCard';
import TransactionList from '@/components/transactions/TransactionList';
import ExpensePieChart from '@/components/charts/ExpensePieChart';
import BudgetCard from '@/components/budget/BudgetCard';

import { 
  transactions, 
  budgets, 
  totalIncome, 
  totalExpenses, 
  balance,
  expensesByCategory
} from '@/data/sampleData';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <Header />
        
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-3 mb-6">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="budgets">Budgets</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="space-y-6">
            {/* Financial Summary */}
            <div className="grid gap-4 md:grid-cols-3">
              <SummaryCard title="Income" amount={totalIncome} type="income" changePercentage={5.2} />
              <SummaryCard title="Expenses" amount={totalExpenses} type="expense" changePercentage={-2.4} />
              <SummaryCard title="Balance" amount={balance} type="balance" />
            </div>
            
            {/* Dashboard Content */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Left Column - Transactions */}
              <TransactionList transactions={transactions.slice(0, 5)} />
              
              {/* Right Column - Charts & Budgets */}
              <div className="space-y-6">
                {/* Expense Pie Chart */}
                <Card>
                  <CardContent className="p-6">
                    <ExpensePieChart data={expensesByCategory} />
                  </CardContent>
                </Card>
                
                {/* Budgets */}
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Budget Overview</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {budgets.map(budget => (
                      <BudgetCard key={budget.id} budget={budget} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="transactions">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">All Transactions</h3>
                <TransactionList transactions={transactions} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="budgets">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Budget Management</h3>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {budgets.map(budget => (
                    <BudgetCard key={budget.id} budget={budget} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
