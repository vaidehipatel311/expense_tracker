import React, { useEffect, useState } from 'react';
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
      <h2>💰 Expense Tracker</h2>
      <form onSubmit={handleAdd}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text" />
        <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {transactions.map((t) => (
          <li key={t._id}>
            {t.text} ({t.amount > 0 ? '+' : ''}{t.amount})
            <button onClick={() => handleDelete(t._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
