import React, { useState } from 'react';
import Groceries from './Groceries';
import ShoppingCart from './ShoppingCart';
import Total from './Total';
import OrderButton from './OrderButton';
import Receipt from './Receipt';
import apple from './img/apple2.JPG';
import bread from './img/bread1.JPG';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [groceryItems, setGroceryItems] = useState([
    { name: 'apple', price: 3.25, quantity: 10, image: apple },
    { name: 'bread', price: 5.99, quantity: 3, image: bread },
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
    return totalCost;
  };

  const orderButtonClicked = () => {
    setShowReceipt(true);
  };

  return (
    <div>
      {showReceipt ? (
        <div class="container">
          <h3>Receipt:</h3>
          <ul>
            {cartItems.map((item) => (
              <Receipt
                key={item.selectedGrocery}
                name={item.selectedGrocery}
                price={item.selectedGroceryPrice}
                quantity={item.quantityInCart}
              />
            ))}
          </ul>
          <p>Thank you!</p>
        </div>
      ) : (
        <div class="row">
          <div class="col-5">
            {groceryItems.map((item) => (
              <Groceries
                image={item.image}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                functionProp={checkIfItemAlreadyInCart}
              />
            ))}
          </div>
          <div class="col-6">
            <ul id="shoppingCart">
              {cartItems.map((item) => (
                <li>
                  <ShoppingCart
                    selectedGrocery={item.selectedGrocery}
                    totalPrice={item.selectedGroceryPrice * item.quantityInCart}
                    quantityInCart={item.quantityInCart}
                    functionProp={cartItemClicked}
                  />
                </li>
              ))}
            </ul>
            <Total
              numberOfItems={calculateTotalQuantityInCart()}
              totalPrice={calculateTotalCost()}
            />
            <OrderButton
              functionProp={orderButtonClicked}
            />
          </div>
        </div>
      )}
    </div>
  );
  
}

export default App;
