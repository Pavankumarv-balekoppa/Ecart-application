import React, { Fragment } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  // const state = useSelector((state) => state.handleCart);
  const quantity = useSelector((state) => state.product.totalQuantity);

  return (
    <Fragment>
      <div className="navbar-fixed active">
        <nav className="navbar navbar-expand-lg bg-light bg-white py-4 shadow-sm">
          <div className="container">
            <NavLink className="navbar-brand" to="#/">
              HOME COLLECTIONS
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link ms-2" to="/products">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link ms-2" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link ms-2" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className="buttons">
                <NavLink className="btn btn-outline-dark" to="/login">
                  <i className="fa fa-sign-in me-1"></i>
                  Login
                </NavLink>
                <NavLink className="btn btn-outline-dark ms-3" to="/register">
                  <i className="fa fa-user-plus me-1"></i>
                  Register
                </NavLink>
                <NavLink className="btn btn-outline-dark ms-3" to="/cart">
                  <i className="fa fa-shopping-cart me-1"></i>
                  Cart ({quantity})
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
}

export default NavBar;
