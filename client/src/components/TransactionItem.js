import React from 'react';

const TransactionItem = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  const style = {
    color: transaction.amount < 0 ? 'red' : 'green',
    borderLeft: `4px solid ${transaction.amount < 0 ? 'red' : 'green'}`,
    padding: '5px',
    margin: '5px 0'
  };

  return (
    <li style={style}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
    </li>
  );
};

export default TransactionItem;
