import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import ReceiptItem from './ReceiptItem';

function Order(props) {
  
  const cartItems = props.cartItems ? props.cartItems : [];

  const calculateTotalQuantityInCartHandler = () => {
    const totalQuantityInCart = props.calculateTotalQuantityInCart();
    return totalQuantityInCart;
  };

  const calculateTotalCostHandler = () => {
    const totalCost = props.calculateTotalCost();
    return totalCost;
  };

  return (
    <div className="container">
      <h3>Receipt:</h3>
      <ul>
        {cartItems.map((item) => (
          <ReceiptItem
            name={item.selectedGrocery}
            price={item.selectedGroceryPrice}
            quantity={item.quantityInCart}
          />
        ))}
      </ul>
      <p>you have purchased {calculateTotalQuantityInCartHandler()} items</p>
      <p>total cost: ${calculateTotalCostHandler()}</p>
      <p>Thank you!</p>
    </div>
  );
}

export default Order;
