function ShoppingCart(props) {
    const cartItemClickedHandler = (name, quantity) => {
          props.functionProp(name, quantity);
        
      };

    return (
      <div>
        <div className="container ">
          <div className="text-center">
              <div class="container border "
               onClick={() => cartItemClickedHandler(
                props.selectedGrocery,
                props.quantityInCart
                )
                }
                > 
                  <p>{props.selectedGrocery}</p>
                  <p>${props.totalPrice}</p>
                  <p>amount in cart: <span>{props.quantityInCart}</span></p></div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ShoppingCart;
  