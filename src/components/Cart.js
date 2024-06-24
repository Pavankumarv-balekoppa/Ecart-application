import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { addtocart, deletefromcart } from "./features/productSlice";

function Cart() {
  const productInCart = useSelector((state) => state.product.product);

  const dispatch = useDispatch();

  function addToCart(product) {
    dispatch(addtocart(product));
  }

  function deleteFromCart(product) {
    dispatch(deletefromcart(product.id));
  }

  return (
    <Fragment>
      {productInCart.map((product) => {
        return (
          <div className="cart-container" key={product.id}>
            <div className="card mb-3">
              <div className="row g-0 cart-card">
                <div className="col-md-4">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="200px"
                    width="200px"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body cart-text">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                      {product.quantity} * ${product.price} ={" "}
                      {product.totalPrice}
                    </p>
                    <div className="quantity-icons">
                      <button onClick={() => addToCart(product)}>
                        <i className="fa fa-plus"></i>
                      </button>
                      <button onClick={() => deleteFromCart(product)}>
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}

export default Cart;
