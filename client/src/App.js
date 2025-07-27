import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import ExpenseChart from './components/ExpenseChart';
import { getTransactions, addTransaction, deleteTransaction } from './services/api';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  // const [text, setText] = useState('');
  // const [amount, setAmount] = useState('');

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const res = await getTransactions();
    setTransactions(res.data);
  };

  // const handleAdd = async (e) => {
  //   e.preventDefault();
  //   if (!text || !amount) return;
  //   await addTransaction({ text, amount: +amount });
  //   setText('');
  //   setAmount('');
  //   fetchTransactions();
  // };

  const handleAdd = async (text, amount, category, date) => {
    await addTransaction({ text, amount: +amount, category, date });
    fetchTransactions();
  };

  const handleDelete = async (id) => {
    await deleteTransaction(id);
    fetchTransactions();
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', overflow: 'hidden' }}>
      <Header />
      <Balance transactions={transactions} />
      <AddTransaction onAdd={handleAdd} />
      <ExpenseChart transactions={transactions} />
      <TransactionList transactions={transactions} onDelete={handleDelete} />

    </div>
  );
}

export default App;
