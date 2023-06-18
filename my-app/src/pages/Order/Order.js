import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import ReceiptItem from './ReceiptItem';

function Order(props) {
  
  const cartItems = props.cartItems ? props.cartItems : [];

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
      <p>you have purchased {cartItems.length} items</p>
      <p>total cost: ${'2'}</p>
      <p>Thank you!</p>
    </div>
  );
}

export default Order;
