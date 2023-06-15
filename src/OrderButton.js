import React from 'react';

function OrderButton(props) {
    const orderButtonClickedHandler = () => {
        props.functionProp();
      }

  return (
    <div>
      <div className="container">
        <div className="text-center">
          <button className="btn col-3 mt-3 mx-5 btn-outline-dark" onClick={() => orderButtonClickedHandler()} >Order</button>
        </div>
      </div>
    </div>
  );
}

export default OrderButton;
