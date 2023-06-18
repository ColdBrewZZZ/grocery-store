import React from 'react';

function Total(props) {
  return (
    <div>
      <div className="container bg-info border border-dark text-center rounded">
      <p className="p-2">Subtotal (<span>{props.numberOfItems}</span> items): <span class="font-weight-bold">${props.totalPrice}</span></p>

      </div>
    </div>
  );
}

export default Total;