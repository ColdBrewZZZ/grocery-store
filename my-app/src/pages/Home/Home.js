import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import apple from './img/apple.JPG';
import bread from './img/bread.JPG';
import chips from './img/chips.JPG';
import milk from './img/milk.JPG';
import pickles from './img/pickles.JPG';
import yogurt from './img/yogurt.JPG';
import coffee from './img/coffee.JPG';
import Groceries from './Groceries';
import ShoppingCart from './ShoppingCart';
import Total from './Total';
import OrderButton from '../OrderButton';

function Home() {
  
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
        <div class="bg-light"> 
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
                ))
                }
              </div>
              <div class="col-6">
                <ul id="shoppingCart" class="list-unstyled ">
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
                <Link to={{
                  pathname: '/order',
                  state: { cartItems: cartItems }
                }}>
                  <OrderButton functionProp={orderButtonClicked} />
                </Link>
              </div>
            </div>
       
          </div>
    );
  }


export default Home;