import React from 'react';
import TransactionItem from './TransactionItem';

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div class="expense-table">
      <table>
        <thead>
          <tr>
            <th>Expense Name</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="expense-list">
          {transactions.map(txn => (
            <tr key={txn._id}>
              <td>{txn.text}</td>
              <td>${Math.abs(txn.amount)}</td>
              <td>{txn.category}</td>
              <td>{txn.date.split('T')[0]}</td>
              <td><button class="btn btn-danger" onClick={() => onDelete(txn._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
