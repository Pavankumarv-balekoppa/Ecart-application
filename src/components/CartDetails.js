import { Fragment } from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import "./Cart.css";

function CartDetails() {
  const cartIsEmpty = useSelector((state) => state.product.cartIsEmpty);

  // const [isCartEmpty, setIsCartEmpty] = useState();

  return (
    <Fragment>
      <div className="cart-container-fixing">
        {cartIsEmpty ? (
          <div className="cartEmpty">
            <p className="herotext">Your cart is empty!</p>
            <p className="sublinecart">Pick up where you left off.</p>
          </div>
        ) : (
          <Cart />
        )}
      </div>
    </Fragment>
  );
}

export default CartDetails;
