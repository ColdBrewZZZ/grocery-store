import React from 'react';
import ReceiptItem from './ReceiptItem';

function Order(props) {
    const cartItems = location.state ? location.state.cartItems : [];

  
    return (
      <div class="container">
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
      <p>you have purchased {'2'} items</p>
        <p>total cost: ${'2'}</p>
      <p>Thank you!</p>
    </div>
    );
  }


export default Order;