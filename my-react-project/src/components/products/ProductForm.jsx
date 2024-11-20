
import React, { useState } from 'react';

const ProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !price) {
            setError('Please fill in all fields.');
            return;
        }

        const newProduct = { name, price: parseFloat(price) };

        try {
            const response = await fetch('http://localhost:5000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });

            if (!response.ok) {
                throw new Error('Failed to add product');
            }

            setSuccessMessage('Product added successfully!');
            setName('');
            setPrice('');
            setError(null);
        } catch (error) {
            setError(error.message);
            setSuccessMessage('');
        }
    };

    return (
        <div>
            <h1>Add New Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Product Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default ProductForm;
