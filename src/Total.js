import React from 'react';

function Total(props) {
  return (
    <div>
      <div className="container bg-info border border-dark text-center rounded">
      <p className="p-2">you have <span>{props.numberOfItems} items in your cart</span></p>
        <p className="p-2">total: $<span>{props.totalPrice}</span></p>
      </div>
    </div>
  );
}

export default Total;
