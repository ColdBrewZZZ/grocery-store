import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import Groceries from './Groceries';
import ShoppingCart from './ShoppingCart';
import Total from './Total';
import OrderButton from '../OrderButton';

function Home(props) {

  const groceryItems = props.groceryItems;

  const cartItems = props.cartItems;

  const checkIfItemAlreadyInCartHandler = (name, price) => {
    props.checkIfItemAlreadyInCart(name, price);
  };

  

  const cartItemClickedHandler = (name, quantity) => {
    props.cartItemClicked(name, quantity);
  };

  const calculateTotalQuantityInCartHandler = () => {
    const totalQuantityInCart = props.calculateTotalQuantityInCart();
    return totalQuantityInCart;
  };

  const calculateTotalCostHandler = () => {
    const totalCost = props.calculateTotalCost();
    return totalCost;
  };

  const  orderButtonClickedHandler = () => {
    props.orderButtonClicked();
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
                    functionProp={checkIfItemAlreadyInCartHandler}
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
                        functionProp={cartItemClickedHandler}
                      />
                    </li>
                  ))}
                </ul>
                <Total
                  numberOfItems={calculateTotalQuantityInCartHandler()}
                  totalPrice={calculateTotalCostHandler()}
                />
                <Link to={{
                  pathname: '/order',
                  state: { cartItems: cartItems }
                }}>
                  <OrderButton functionProp={orderButtonClickedHandler} />
                </Link>
              </div>
            </div>
       
          </div>
    );
  }


export default Home;