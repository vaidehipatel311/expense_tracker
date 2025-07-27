import React from 'react';

const Balance = ({ transactions }) => {
  const amounts = transactions.map(t => t.amount);
  const total = amounts.reduce((acc, val) => acc + val, 0).toFixed(2);

  return (
    <div>
      <div class="balance-section">
        <h4>Your Balance</h4>
        <h2>${total}</h2>
      </div>

    </div>
  );
};

export default Balance;
