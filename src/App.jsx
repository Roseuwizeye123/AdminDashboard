import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Dashboard from './components/Dashboard';
import Product from './components/Product';
import Orders from './components/Orders';
import Customers from './components/Customers';
import Transactions from './components/Transactions';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="product" element={<Product />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="transactions" element={<Transactions />} />
          </Route>
          <Route path="login" element={<div>this is login page</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
