import React, { useState } from 'react';
import Groceries from './Groceries';
import ShoppingCart from './ShoppingCart';
import apple from './img/apple2.JPG';
import bread from './img/bread1.JPG';

function App() {
  const [cartItems, setCartItems] = useState([]);

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
  }

  const checkIfItemAlreadyInCart = (name, price) => {
    const existingItem = cartItems.find(item => item.selectedGrocery === name);
    if (existingItem) {
      incrementCartItem(name);
    } else {
      addToCart(name, price);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-3">
        {[
            [apple, 'apple', '3', '10'],
            [bread, 'bread', '5.99', '4']
          ].map(item => (
            <Groceries
              key={item[1]} // Use a unique key for each mapped element
              image={item[0]}
              name={item[1]}
              price={item[2]}
              quantity={item[3]}
              functionProp={checkIfItemAlreadyInCart}
            />
          ))}
          
        </div>
        <div className="col-3">
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
