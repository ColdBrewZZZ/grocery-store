import React from 'react';

function History() {
  const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];

  const clearOrderHistory = () => {
    localStorage.removeItem('orderHistory');
    window.location.reload(); 
  };

  return (
    <div>
      <h2>History</h2>
      <div className="text-center">
        <div className="container border">
          {orderHistory.map((order, index) => (
            <div key={index}>
              <p>Order {index + 1}</p>
              <p>Items: {order.items.join(', ')}</p>
              <p>Total: {order.total}</p>
              <hr />
            </div>
          ))}
        </div>
        <button class="btn mt-3 mx-5 btn-outline-dark" onClick={clearOrderHistory}>Clear History</button>
      </div>
    </div>
  );
}

export default History;
