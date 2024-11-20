import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch orders from backend
        const fetchOrders = async () => {
            const response = await fetch('/api/orders'); // Replace with your API
            const data = await response.json();
            setOrders(data);
        };
        fetchOrders();
    }, []);

    return (
        <Container>
            <h2>Order History</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer ID</th>
                        <th>Product ID</th>
                        <th>Quantity</th>
                        <th>Order Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.customerId}</td>
                            <td>{order.productId}</td>
                            <td>{order.quantity}</td>
                            <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default OrderHistory;
