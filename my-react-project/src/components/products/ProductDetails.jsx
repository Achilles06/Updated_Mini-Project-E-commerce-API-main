import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`/api/products/${id}`); // Replace with your API
            const data = await response.json();
            setProduct(data);
        };
        fetchProduct();
    }, [id]);

    const handleDelete = async () => {
        await fetch(`/api/products/${id}`, { method: 'DELETE' }); // Replace with your API
        navigate('/products');
    };

    return (
        <Container>
            {product ? (
                <>
                    <h2>{product.name}</h2>
                    <p>Price: ${product.price}</p>
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

export default ProductDetails;
