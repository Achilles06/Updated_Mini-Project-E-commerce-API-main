import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const CustomerDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        const fetchCustomer = async () => {
            const response = await fetch(`/api/customers/${id}`); // Replace with your API
            const data = await response.json();
            setCustomer(data);
        };
        fetchCustomer();
    }, [id]);

    const handleDelete = async () => {
        await fetch(`/api/customers/${id}`, { method: 'DELETE' }); // Replace with your API
        navigate('/customers');
    };

    return (
        <Container>
            {customer ? (
                <>
                    <h2>{customer.name}</h2>
                    <p>Email: {customer.email}</p>
                    <p>Phone: {customer.phone}</p>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </Container>
    );
};

export default CustomerDetails;
