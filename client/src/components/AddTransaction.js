import React, { useState } from 'react';

function AddTransaction({ onAdd }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Default to today

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount || !category || !date) return;
    onAdd(text, amount, category, date);
    setText('');
    setAmount('');
    setCategory('Food');
    setDate(new Date().toISOString().split('T')[0]); // Reset to today
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        value={text} id="expense-name"
        placeholder="Expense Name"
        onChange={(e) => setText(e.target.value)}
        required />

      <input type="number"
        value={amount}
        id="expense-amount"
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
        required />

      <select
        id="expense-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required>
        <option disabled>Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>

      <input
        type="date"
        id="expense-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required />

      <button type="submit">Add Expense</button>

    </form>
  );
}

export default AddTransaction;
