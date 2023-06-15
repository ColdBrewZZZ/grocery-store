import React from 'react';

function Receipt(props) {
  return (
    <li>
        <p>{props.name}</p>
        <p>price: {props.price} </p>
        <p>In cart: {props.quantity}</p>
    </li>
  );
}

export default Receipt;
