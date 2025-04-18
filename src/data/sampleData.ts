
import { Transaction, Category, Budget } from '@/types';

export const categories: Category[] = [
  { id: '1', name: 'Food & Dining', icon: 'utensils', color: '#ef4444' },
  { id: '2', name: 'Transportation', icon: 'car', color: '#f97316' },
  { id: '3', name: 'Shopping', icon: 'shopping-bag', color: '#8b5cf6' },
  { id: '4', name: 'Housing', icon: 'home', color: '#0ea5e9' },
  { id: '5', name: 'Entertainment', icon: 'film', color: '#ec4899' },
  { id: '6', name: 'Healthcare', icon: 'stethoscope', color: '#10b981' },
  { id: '7', name: 'Education', icon: 'book', color: '#6366f1' },
  { id: '8', name: 'Salary', icon: 'wallet', color: '#22c55e' },
  { id: '9', name: 'Investments', icon: 'trending-up', color: '#14b8a6' },
  { id: '10', name: 'Gifts', icon: 'gift', color: '#d946ef' },
  { id: '11', name: 'Other', icon: 'more-horizontal', color: '#64748b' },
];

// Helper to create dates in the past
const daysAgo = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
};

export const transactions: Transaction[] = [
  {
    id: '1',
    amount: 42.50,
    type: 'expense',
    date: daysAgo(1),
    category: categories[0], // Food & Dining
    description: 'Grocery shopping'
  },
  {
    id: '2',
    amount: 3200,
    type: 'income',
    date: daysAgo(5),
    category: categories[7], // Salary
    description: 'Monthly salary'
  },
  {
    id: '3',
    amount: 25.99,
    type: 'expense',
    date: daysAgo(2),
    category: categories[4], // Entertainment
    description: 'Movie tickets'
  },
  {
    id: '4',
    amount: 850,
    type: 'expense',
    date: daysAgo(3),
    category: categories[3], // Housing
    description: 'Rent payment'
  },
  {
    id: '5',
    amount: 120,
    type: 'expense',
    date: daysAgo(7),
    category: categories[5], // Healthcare
    description: 'Doctor appointment'
  },
  {
    id: '6',
    amount: 65.30,
    type: 'expense',
    date: daysAgo(4),
    category: categories[2], // Shopping
    description: 'New clothes'
  },
  {
    id: '7',
    amount: 200,
    type: 'income',
    date: daysAgo(10),
    category: categories[9], // Gifts
    description: 'Birthday money'
  },
  {
    id: '8',
    amount: 35.40,
    type: 'expense',
    date: daysAgo(6),
    category: categories[1], // Transportation
    description: 'Gas'
  },
  {
    id: '9',
    amount: 199.99,
    type: 'expense',
    date: daysAgo(12),
    category: categories[6], // Education
    description: 'Online course'
  },
  {
    id: '10',
    amount: 150,
    type: 'income',
    date: daysAgo(8),
    category: categories[8], // Investments
    description: 'Dividend payment'
  },
  {
    id: '11',
    amount: 18.99,
    type: 'expense',
    date: daysAgo(2),
    category: categories[0], // Food & Dining
    description: 'Lunch at restaurant'
  },
  {
    id: '12',
    amount: 89.99,
    type: 'expense',
    date: daysAgo(9),
    category: categories[2], // Shopping
    description: 'Headphones'
  },
];

export const budgets: Budget[] = [
  {
    id: '1',
    category: categories[0], // Food & Dining
    amount: 400,
    spent: 61.49,
    period: 'monthly'
  },
  {
    id: '2',
    category: categories[1], // Transportation
    amount: 150,
    spent: 35.40,
    period: 'monthly'
  },
  {
    id: '3',
    category: categories[2], // Shopping
    amount: 200,
    spent: 155.29,
    period: 'monthly'
  },
  {
    id: '4',
    category: categories[4], // Entertainment
    amount: 100,
    spent: 25.99,
    period: 'monthly'
  },
];

// Calculate total income
export const totalIncome = transactions
  .filter(transaction => transaction.type === 'income')
  .reduce((sum, transaction) => sum + transaction.amount, 0);

// Calculate total expenses
export const totalExpenses = transactions
  .filter(transaction => transaction.type === 'expense')
  .reduce((sum, transaction) => sum + transaction.amount, 0);

// Calculate balance
export const balance = totalIncome - totalExpenses;

// Calculate expense by category
export const expensesByCategory = categories.map(category => {
  const totalForCategory = transactions
    .filter(transaction => transaction.type === 'expense' && transaction.category.id === category.id)
    .reduce((sum, transaction) => sum + transaction.amount, 0);
  
  return {
    category,
    amount: totalForCategory
  };
}).filter(item => item.amount > 0)
  .sort((a, b) => b.amount - a.amount);
