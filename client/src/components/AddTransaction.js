import React, { useState } from 'react';
import axios from 'axios';

const AddTransaction = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    const newTx = {
      text,
      amount: +amount
    };

    const res = await axios.post('https://your-backend-url/api/transactions', newTx);
    onAdd(res.data);
    setText('');
    setAmount('');
  };

  return (
    <form onSubmit={submit}>
      <h4>Add New Transaction</h4>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text..."
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount..."
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransaction;
