import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axiosInstance from '../axiosInstace';

const ExpensesTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    amount: '',
    category: '',
    description: '',
    date: new Date().toISOString().split('T')[0], // Default to current date
  });

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await axiosInstance.get('/api/expenses');
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({
      ...newExpense,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/api/expenses', newExpense);
      setNewExpense({
        amount: '',
        category: '',
        description: '',
        date: new Date().toISOString().split('T')[0], // Reset date to current date
      });
      fetchExpenses();
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <MDBContainer className="mt-4">
      <MDBRow>
        <MDBCol>
          <h2>Add Expense</h2>
          <Form onSubmit={handleSubmit}>
            <MDBRow className="mb-4">
              <MDBCol>
                <MDBInput
                  type="number"
                  label="Amount"
                  name="amount"
                  value={newExpense.amount}
                  onChange={handleInputChange}
                  required
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  type="text"
                  label="Category"
                  name="category"
                  value={newExpense.category}
                  onChange={handleInputChange}
                  required
                />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-4">
              <MDBCol>
                <MDBInput
                  type="textarea"
                  label="Description"
                  rows={3}
                  name="description"
                  value={newExpense.description}
                  onChange={handleInputChange}
                />
              </MDBCol>
            </MDBRow>
            <MDBBtn color="primary" type="submit">
              Add Expense
            </MDBBtn>
          </Form>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mt-4">
        <MDBCol>
          <h2>Expenses</h2>
          <MDBTable striped bordered hover>
            <MDBTableHead>
              <tr>
                <th>Amount</th>
                <th>Category</th>
                <th>Description</th>
                <th>Date</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.amount}</td>
                  <td>{expense.category}</td>
                  <td>{expense.description}</td>
                  <td>{expense.date}</td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ExpensesTracker;
