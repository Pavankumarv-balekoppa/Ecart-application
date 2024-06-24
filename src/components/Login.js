import { Fragment, useEffect } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

function Login() {
  useEffect(() => {
    const labels = document.querySelectorAll(".input-box label");

    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map(
          (letter, idx) =>
            `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
        )
        .join("");
    });
  }, []);

  return (
    <Fragment>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-box">
            <input type="text" required />
            <label>Phone/ Email</label>
          </div>

          <div className="input-box">
            <input type="password" required />
            <label>Password</label>
          </div>

          <div className="buttons login-btn">
            <NavLink className="btn btn-dark login-btn-style" to="/products">
              <i className="fa fa-sign-in me-1"></i>
              Login
            </NavLink>
          </div>

          <p className="bottom-text">
            Don't have an account?
            <NavLink to="/register" className="register-link">
              Register
            </NavLink>
          </p>
        </form>
      </div>
    </Fragment>
  );
}

export default Login;
