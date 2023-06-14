import React from 'react';

function Groceries(props) {
    const checkIfItemAlreadyInCartHandler = (selectedGrocery,price,quantity) => {
        if (quantity > 0) {
            props.functionProp(selectedGrocery,price);
        }
      }

  return (
    <div>
      <div className="container">
        <div className="text-center">
            <div class="container border" onClick={() => checkIfItemAlreadyInCartHandler(props.name,props.price,props.quantity)}>
                <img src={props.image}/>
                <p>{props.name}</p>
                <p>${props.price}</p>
                <p>left in stock: <span>{props.quantity}</span></p></div>
        </div>
      </div>
    </div>
  );
}

export default Groceries;
