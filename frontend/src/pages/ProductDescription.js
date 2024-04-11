import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
// import { products } from "../Products";

const ProductDescription = () => {
  let getProductByIdState = useSelector((state) => state.getProductByIdReducer);

  let { loading, product, error } = getProductByIdState;

  const [quantity, setQuantity] = useState(1);

  let dispatch = useDispatch();

  let { id } = useParams();
  let productId = id;
  console.log(productId);

  let addtocart = () => {
    // alert(quantity);
    dispatch(addToCart(product, quantity));
  };

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [dispatch, productId]);
  // let productdata = products.find((product) => productId == product.id);
  // console.log(productdata);
  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error error={error} />
      ) : (
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card p-4">
              <h2>name:{product.name}</h2>
              <img
                src={product.image}
                className="img-fluid w-100"
                alt={product.name}
              />
              <p className="mt-3">
                <span className="fw-medium">description: </span>
                {product.description}
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <p className="text-center fw-bold mt-3">price:{product.price}</p>
            <div className="d-flex justify-content-around mt-5">
              <h5>select Quantity</h5>
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                {Array.from({ length: product.countInStock }).map((v, i) => {
                  // console.log(v);
                  let optionValue = i + 1;
                  return (
                    <option key={optionValue} value={optionValue}>
                      {optionValue}
                    </option>
                  );
                })}
              </select>
              <button className="btn btn-dark" onClick={addtocart}>
                Add To cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
