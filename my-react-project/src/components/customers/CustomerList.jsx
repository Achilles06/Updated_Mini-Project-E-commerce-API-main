import React, { useEffect, useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        // Fetch customers from backend
        const fetchCustomers = async () => {
            const response = await fetch('/api/customers'); // Replace with your API
            const data = await response.json();
            setCustomers(data);
        };
        fetchCustomers();
    }, []);

    return (
        <Container>
            <h2>Customer List</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                            <td>
                                <Link to={`/customers/${customer.id}`}>View</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default CustomerList;
