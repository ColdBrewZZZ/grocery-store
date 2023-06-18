import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Order from './pages/Order/Order';
import History from './pages/History/History';

function App(props) {
  
    return (
      <div>
        <h2>Grocery Store</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/Order'} className="nav-link">Order</Link></li>
            <li><Link to={'/History'} className="nav-link">History</Link></li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/History" element={<History />} />
        </Routes>
      </div>
    );
  }


export default App;
