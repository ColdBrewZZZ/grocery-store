import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
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

  useEffect(() => {
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    const newOrder = { items: cartItems.map(item => item.selectedGrocery), total: calculateTotalCostHandler() };
    orderHistory.push(newOrder);
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
  }, [cartItems, calculateTotalCostHandler]);

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
