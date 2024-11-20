
import React, { useState } from 'react';

const CustomerForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !phone) {
            setError('Please fill in all fields.');
            return;
        }

        const newCustomer = { name, email, phone };

        try {
            const response = await fetch('http://localhost:5000/api/customers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCustomer),
            });

            if (!response.ok) {
                throw new Error('Failed to add customer');
            }

            setSuccessMessage('Customer added successfully!');
            setName('');
            setEmail('');
            setPhone('');
            setError(null);
        } catch (error) {
            setError(error.message);
            setSuccessMessage('');
        }
    };

    return (
        <div>
            <h1>Add New Customer</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
                <button type="submit">Add Customer</button>
            </form>
        </div>
    );
};

export default CustomerForm;
