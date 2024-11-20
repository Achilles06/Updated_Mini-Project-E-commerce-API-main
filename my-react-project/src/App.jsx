
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/products/ProductList';
import ProductDetails from './components/products/ProductDetails';
import ProductForm from './components/products/ProductForm';
import OrderForm from './components/orders/OrderForm';
import OrderHistory from './components/orders/OrderHistory';
import CustomerList from './components/customers/CustomerList';
import CustomerForm from './components/customers/CustomerForm';
import CustomerDetails from './components/customers/CustomerDetails';

const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home (Product List)</Link></li>
                    <li><Link to="/products/new">Add Product</Link></li>
                    <li><Link to="/orders/new">New Order</Link></li>
                    <li><Link to="/orders/history">Order History</Link></li>
                    <li><Link to="/customers">Customer List</Link></li>
                    <li><Link to="/customers/new">Add Customer</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/products/new" element={<ProductForm />} />
                <Route path="/orders/new" element={<OrderForm />} />
                <Route path="/orders/history" element={<OrderHistory />} />
                <Route path="/customers" element={<CustomerList />} />
                <Route path="/customers/new" element={<CustomerForm />} />
                <Route path="/customers/:id" element={<CustomerDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
