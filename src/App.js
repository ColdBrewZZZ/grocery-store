import React, { useState } from 'react';
import Groceries from './Groceries';
import ShoppingCart from './ShoppingCart';
import apple from './img/apple.jpeg';

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

  const checkIfItemAlreadyInCart = (name, price) => {
    const existingItem = cartItems.find(item => item.selectedGrocery === name);
    if (existingItem) {
      const updatedItems = cartItems.map(item =>
        item.selectedGrocery === name
          ? { ...item, quantityInCart: item.quantityInCart + 1 }
          : item
      );
      setCartItems(updatedItems);
    } else {
      addToCart(name, price);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-3">
          <Groceries
            image={apple}
            name="apple"
            price="3"
            quantity="10"
            functionProp={checkIfItemAlreadyInCart}
          />
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
