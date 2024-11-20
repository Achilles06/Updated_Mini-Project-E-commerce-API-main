
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerList from './components/customers/CustomerList';
import CustomerForm from './components/customers/CustomerForm';
import CustomerDetails from './components/customers/CustomerDetails';
import ProductList from './components/products/ProductList';
import ProductForm from './components/products/ProductForm';
import ProductDetails from './components/products/ProductDetails';
import OrderForm from './components/orders/OrderForm';
import OrderHistory from './components/orders/OrderHistory';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/customers" element={<CustomerList />} />
                <Route path="/customers/new" element={<CustomerForm />} />
                <Route path="/customers/:id" element={<CustomerDetails />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/new" element={<ProductForm />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/orders/new" element={<OrderForm />} />
                <Route path="/orders/history" element={<OrderHistory />} />
            </Routes>
        </Router>
    );
};

export default App;
