import { Fragment, useEffect } from "react";
import "./Register.css";
import { NavLink } from "react-router-dom";

function Register() {
  useEffect(() => {
    const labels = document.querySelectorAll(".input-box label");

    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map(
          (letter, idx) =>
            `<span style="transition-delay:${idx * 40}ms">${letter}</span>`
        )
        .join("");
    });
  }, []);

  return (
    <Fragment>
      <div className="register-box">
        <h2>Register</h2>
        <form>
          <div className="input-box">
            <input type="text" required />
            <label>Full Name</label>
          </div>
          <div className="input-box">
            <input type="tel" required />
            <label>Phone Number</label>
          </div>
          <div className="input-box">
            <input type="email" required />
            <label>Email Address</label>
          </div>
          <div className="input-box">
            <input type="text" required />
            <label>Address</label>
          </div>
          <div className="input-box">
            <input type="password" required />
            <label>Password</label>
          </div>

          <div className="buttons register-btn">
            <NavLink className="btn btn-dark register-btn-style" to="/products">
              <i className="fa fa-user-plus me-1"></i>
              Register
            </NavLink>
          </div>

          <p className="bottom-text">
            Alraedy have an account?
            <NavLink to="/login" className="login-link">
              Login
            </NavLink>
          </p>
        </form>
      </div>
    </Fragment>
  );
}

export default Register;
