
import React, { useState } from 'react';

const OrderForm = () => {
    const [customerId, setCustomerId] = useState('');
    const [productId, setProductId] = useState('');
    const [orderDate, setOrderDate] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!customerId || !productId || !orderDate) {
            setError('Please fill in all fields.');
            return;
        }

        const newOrder = { customerId, productId, orderDate };

        try {
            const response = await fetch('http://localhost:5000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newOrder),
            });

            if (!response.ok) {
                throw new Error('Failed to place order');
            }

            setSuccessMessage('Order placed successfully!');
            setCustomerId('');
            setProductId('');
            setOrderDate('');
            setError(null);
        } catch (error) {
            setError(error.message);
            setSuccessMessage('');
        }
    };

    return (
        <div>
            <h1>Place New Order</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="customerId">Customer ID:</label>
                    <input
                        type="text"
                        id="customerId"
                        value={customerId}
                        onChange={(e) => setCustomerId(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="productId">Product ID:</label>
                    <input
                        type="text"
                        id="productId"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="orderDate">Order Date:</label>
                    <input
                        type="date"
                        id="orderDate"
                        value={orderDate}
                        onChange={(e) => setOrderDate(e.target.value)}
                    />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
};

export default OrderForm;
