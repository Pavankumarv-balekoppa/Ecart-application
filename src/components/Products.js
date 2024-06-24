import { Fragment, useState, useEffect } from "react";
import "./Products.css";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
    };
    getProducts();
  }, []);

  function Loading() {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} width={300} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} width={300} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} width={300} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} width={300} />
        </div>
      </>
    );
  }

  function filteredProducts(category) {
    const updatedList = data.filter((ele) => ele.category === category);
    setFilter(updatedList);
  }

  function ShowProducts() {
    return (
      <>
        <div className="buttons menu">
          <button
            className="btn btn-outline-dark"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filteredProducts("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filteredProducts("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark "
            onClick={() => filteredProducts("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filteredProducts("electronics")}
          >
            Electronics
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-3">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="210px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  }
  return (
    <Fragment>
      <div className="container products-container">
        <div className="row">
          <div className="col-12">
            <h2>Latest Products</h2>
          </div>
        </div>
        <hr />
        <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </Fragment>
  );
}

export default Products;
