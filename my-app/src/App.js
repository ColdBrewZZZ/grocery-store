import logo from './logo.svg';
import './App.css';
import apple from './pages/Home/img/apple.JPG';
import bread from './pages/Home//img/bread.JPG';
import chips from './pages/Home//img/chips.JPG';
import milk from './pages/Home//img/milk.JPG';
import pickles from './pages/Home//img/pickles.JPG';
import yogurt from './pages/Home//img/yogurt.JPG';
import coffee from './pages/Home//img/coffee.JPG';
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Order from './pages/Order/Order';
import History from './pages/History/History';

function App() {
   

    // home 

    const [cartItems, setCartItems] = useState([]);
  const [groceryItems, setGroceryItems] = useState([
    { name: 'apple', price: 3.25, quantity: 10, image: apple },
    { name: 'bread', price: 5.99, quantity: 3, image: bread },
    { name: 'chips', price: 4.79, quantity: 6, image: chips },
    { name: 'milk', price: 6.29, quantity: 4, image: milk },
    { name: 'pickles', price: 2.49, quantity: 9, image: pickles },
    { name: 'yogurt', price: 1.39, quantity: 3, image: yogurt },
    { name: 'coffee', price: 21.78, quantity: 100, image: coffee },
  ]);
  const[showReceipt, setShowReceipt] = useState(false);
  

  const addToCart = (name, price) => {
    const item = {
          selectedGrocery: name,
          selectedGroceryPrice: price,
          quantityInCart: 1
        };
        setCartItems([...cartItems, item]);
  };

  const incrementCartItem = (name, price) => {
    const updatedItems = cartItems.map(item =>
      item.selectedGrocery === name
        ? { 
          ...item, 
          quantityInCart: item.quantityInCart + 1,
          
         }
        : item
    );
    setCartItems(updatedItems);
  };

  const decrementGroceryItem = (name) => {
    const updatedItems = groceryItems.map(item =>
      item.name === name
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setGroceryItems(updatedItems);
  };

  const checkIfItemAlreadyInCart = (name, price) => {
    const existingItem = cartItems.find(item => item.selectedGrocery === name);
    decrementGroceryItem(name);
    if (existingItem) {
      incrementCartItem(name, price);
    } else {
      addToCart(name, price);
    }
  };

  const removeEmptyItemsFromCart = () => {
    setCartItems(current => current.filter(item => item.quantityInCart > 0));
  };

  const incrementGroceryItem = (name) => {
    const updatedItems = groceryItems.map(item =>
      item.name === name
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setGroceryItems(updatedItems);
  };

  const cartItemClicked = (name, quantity) => {
    const updatedItems = cartItems.map(item =>
      item.selectedGrocery === name
        ? {
            ...item,
            quantityInCart: item.quantityInCart - 1, 
          }
        : item
    );
    setCartItems(updatedItems);
    incrementGroceryItem(name);
    removeEmptyItemsFromCart();
  };

  const calculateTotalQuantityInCart = () => {
    const totalQuantityInCart = cartItems.reduce((total, item) => total + item.quantityInCart, 0);
    return totalQuantityInCart;
  };

  const calculateTotalCost = () => {
    const totalCost = cartItems.reduce((total, item) => total + (item.quantityInCart * item.selectedGroceryPrice), 0);
    return totalCost.toFixed(2);
  };

  const orderButtonClicked = () => {
    setShowReceipt(true);
  };



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
          <Route path="/" element={<Home 
          cartItems={cartItems}
          groceryItems={groceryItems}
          addToCart={addToCart}
          incrementCartItem={incrementCartItem}
          decrementGroceryItem={decrementGroceryItem}
          checkIfItemAlreadyInCart={checkIfItemAlreadyInCart}
          removeEmptyItemsFromCart={removeEmptyItemsFromCart}
          incrementGroceryItem={incrementGroceryItem}
          cartItemClicked={cartItemClicked}
          calculateTotalQuantityInCart={calculateTotalQuantityInCart}
          calculateTotalCost={calculateTotalCost}
          orderButtonClicked={orderButtonClicked}
          />} />
          <Route path="/Order" element={<Order cartItems={cartItems} />} /> 
          <Route path="/History" element={<History />} />
        </Routes>
      </div>
    );
  }


export default App;
