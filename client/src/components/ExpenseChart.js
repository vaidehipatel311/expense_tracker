import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ExpenseChart = ({ transactions }) => {
  const chartData = {
    labels: transactions.map(txn => txn.text),
    datasets: [
      {
        label: 'Amount',
        data: transactions.map(txn => txn.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderRadius: 5,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: { family: 'Segoe UI', size: 14 }
        }
      },
      title: {
        display: true,
        text: 'Expense Overview',
        color: '#2a2a72',
        font: { size: 20, weight: 'bold' },
        padding: { top: 10, bottom: 20 }
      }
    },
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxRotation: 0,
          font: { size: 12, family: 'Segoe UI' }
        }
      },
      y: {
        beginAtZero: true,
        ticks: { font: { size: 12, family: 'Segoe UI' } }
      }
    }
  };

  return (
    <div className="chart-container" style={{ width: '100%', height: '400px' }}>
      <h4 style={{ textAlign: 'center', color: '#3949ab' }}>Expense Overview</h4>
      {transactions.length > 0 ? (
        <Bar data={chartData} options={options} />
      ) : (
        <p style={{ textAlign: 'center' }}>No data to display</p>
      )}
    </div>
  );
};

export default ExpenseChart;
