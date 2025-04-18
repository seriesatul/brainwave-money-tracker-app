
export type Category = {
  id: string;
  name: string;
  icon: string;
  color: string;
};

export type Transaction = {
  id: string;
  amount: number;
  type: 'income' | 'expense';
  date: Date;
  category: Category;
  description: string;
};

export type Budget = {
  id: string;
  category: Category;
  amount: number;
  spent: number;
  period: 'weekly' | 'monthly' | 'yearly';
};
