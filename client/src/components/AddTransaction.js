import React, { useState } from 'react';

function AddTransaction({ onAdd }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;
    onAdd(text, amount);
    setText('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text" />
      <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTransaction;
