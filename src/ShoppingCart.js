function ShoppingCart(props) {
  

    return (
      <div>
        <div className="container">
          <div className="text-center">
              <div class="container border">
                  <p>{props.selectedGrocery}</p>
                  <p>${props.selectedGroceryPrice}</p>
                  <p>amount in cart: <span>{props.quantityInCart}</span></p></div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ShoppingCart;
  