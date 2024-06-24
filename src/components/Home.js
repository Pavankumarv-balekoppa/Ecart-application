import { Fragment } from "react";
import "./Home.css";
import Products from "./Products";

function Home() {
  return (
    <Fragment>
      <div className="hero">
        <div className="card text-bg-dark text-white border-0">
          <img src="/assets/wall_picture.jpg" className="card-img" alt="Background" />
          <div className="card-img-overlay">
            <div className="container content">
              <h5 className="hero-title">NEW Arrival Fashion</h5>
              <p className="hero-text">Upgrade your style be classy & trendy</p>
              <div className="shop-now">Shop Now</div>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </Fragment>
  );
}

export default Home;
