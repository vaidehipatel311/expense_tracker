import React from 'react';
import TransactionItem from './TransactionItem';

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h4>History</h4>
      <ul>
        {transactions.map(txn => (
          <TransactionItem key={txn._id} transaction={txn} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
