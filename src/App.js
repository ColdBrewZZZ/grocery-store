import React, { useState } from 'react';
import Groceries from './Groceries';
import ShoppingCart from './ShoppingCart';
import Total from './Total';
import OrderButton from './OrderButton';
import Receipt from './Receipt';
import apple from './img/apple2.JPG';
import bread from './img/bread1.JPG';
import OrderButton from './OrderButton';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [groceryItems, setGroceryItems] = useState([
    { id: 1, name: 'apple', price: 3.25, quantity: 10, image: apple },
    { id: 2, name: 'bread', price: 5.99, quantity: 3, image: bread },
  ]);

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

  return (
    <div>
      <div className="row">
        <div className="col-5">
          {groceryItems.map(item => (
            <Groceries
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              functionProp={checkIfItemAlreadyInCart}
            />
          ))}
        </div>
        <div className="col-6">
          <div>
            <Total
              numberOfItems={calculateTotalQuantityInCart()}
              totalPrice={calculateTotalCost()}
            />
          </div>
          <ul id="shoppingCart">
            {cartItems.map((item, index) => (
              <li key={index}>
                <ShoppingCart
                  selectedGrocery={item.selectedGrocery}
                  totalPrice={item.selectedGroceryPrice * item.quantityInCart}
                  quantityInCart={item.quantityInCart}
                  functionProp={cartItemClicked}
                />
              </li>
            ))}
          </ul>
          <OrderButton/>
        </div>
      </div>
    </div>
  );
}

export default App;
