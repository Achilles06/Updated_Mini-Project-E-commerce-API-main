import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CustomerDetails = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/customers/${id}`)
      .then(response => response.json())
      .then(data => setCustomer(data))
      .catch(error => console.error('Error fetching customer details:', error));
  }, [id]);

  if (!customer) {
    return <p>Loading customer details...</p>;
  }

  return (
    <div>
      <h2>Customer Details</h2>
      <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
    </div>
  );
};

export default CustomerDetails;
