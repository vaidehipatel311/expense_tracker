import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const ExpenseChart = ({ transactions }) => {
  const chartData = {
    labels: transactions.map(txn => txn.text),
    datasets: [{
      label: 'Amount',
      data: transactions.map(txn => txn.amount),
      backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }]
  };

  return (
    <div>
      <h4>Expense Overview</h4>
      <Bar data={chartData} />
    </div>
  );
};

export default ExpenseChart;
