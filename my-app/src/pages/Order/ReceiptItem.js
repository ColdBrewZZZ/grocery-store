import React from 'react';

function Receipt(props) {
  return (
    <li> 
        <p>{props.name}, price: ${props.price}, amount: {props.quantity}</p>
    </li>
  );
}

export default Receipt;