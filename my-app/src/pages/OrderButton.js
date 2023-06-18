import React from 'react';

function OrderButton(props) {
    const orderButtonClickedHandler = () => {
        props.functionProp();
      }

  return (
    <div>
      <div className="container">
        <div className="text-center">
          <button className="btn mt-3 mx-5 btn-outline-dark" onClick={() => orderButtonClickedHandler()}>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}

export default OrderButton;