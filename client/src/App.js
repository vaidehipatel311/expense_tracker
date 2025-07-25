import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import { getTransactions, addTransaction, deleteTransaction } from './services/api';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const res = await getTransactions();
    setTransactions(res.data);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!text || !amount) return;
    await addTransaction({ text, amount: +amount });
    setText('');
    setAmount('');
    fetchTransactions();
  };

  const handleDelete = async (id) => {
    await deleteTransaction(id);
    fetchTransactions();
  };

  return (
     <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <Header />
      <Balance transactions={transactions} />
      <AddTransaction onAdd={handleAdd} />
      <TransactionList transactions={transactions} onDelete={handleDelete} />
    </div>
  );
}

export default App;
