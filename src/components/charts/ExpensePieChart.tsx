
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

type ExpenseData = {
  category: {
    id: string;
    name: string;
    color: string;
  };
  amount: number;
};

type ExpensePieChartProps = {
  data: ExpenseData[];
};

const ExpensePieChart: React.FC<ExpensePieChartProps> = ({ data }) => {
  const totalExpenses = data.reduce((sum, item) => sum + item.amount, 0);

  // Format data for the chart
  const chartData = data.map((item) => ({
    name: item.category.name,
    value: item.amount,
    color: item.category.color,
    percentage: ((item.amount / totalExpenses) * 100).toFixed(1)
  }));

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return percent > 0.05 ? (
      <text
        x={x}
        y={y}
        fill="#333"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="text-xs"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    ) : null;
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      
      return (
        <div className="bg-white p-3 shadow-md rounded-md border">
          <p className="font-medium">{data.name}</p>
          <p className="text-sm">
            ${data.value.toFixed(2)} ({data.percentage}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-full">
      <h3 className="text-lg font-medium mb-2">Expense Distribution</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
              labelLine={false}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend layout="horizontal" verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpensePieChart;
