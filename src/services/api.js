import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/transactions'; // Update when deploying

export const getTransactions = () => axios.get(API_BASE_URL);

export const addTransaction = (transaction) => axios.post(API_BASE_URL, transaction);

export const deleteTransaction = (id) => axios.delete(`${API_BASE_URL}/${id}`);
