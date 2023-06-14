import React, { useState } from 'react';
import Groceries from './Groceries';
import ShoppingCart from './ShoppingCart';
import apple from './img/apple2.JPG';
import bread from './img/bread1.JPG';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [groceryItems, setGroceryItems] = useState([
    { id: 1, name: 'apple', price: '3', quantity: 10, image: apple },
    { id: 2, name: 'bread', price: '5.99', quantity: 3, image: bread },
  ]);

  const addToCart = (name, price) => {
    const item = {
      selectedGrocery: name,
      selectedGroceryPrice: price,
      quantityInCart: 1
    };
    setCartItems([...cartItems, item]);
  };

  const incrementCartItem = (name) => {
    const updatedItems = cartItems.map(item =>
      item.selectedGrocery === name
        ? { ...item, quantityInCart: item.quantityInCart + 1 }
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

  const checkIfItemAlreadyInCart = (name, price, quantity) => {
    const existingItem = cartItems.find(item => item.selectedGrocery === name);
    decrementGroceryItem(name);
    if (existingItem) {
      incrementCartItem(name);
    } else {
      addToCart(name, price);
    }
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
          <ul id="shoppingCart">
            {cartItems.map((item, index) => (
              <li key={index}>
                <ShoppingCart
                  selectedGrocery={item.selectedGrocery}
                  selectedGroceryPrice={item.selectedGroceryPrice}
                  quantityInCart={item.quantityInCart}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
