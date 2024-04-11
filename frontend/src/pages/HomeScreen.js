import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { getAllProductsReducer } from "../redux/reducers/productReducers";
import { getAllProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import Filter from "../components/Filter";

const HomeScreen = () => {
  // const [product, setProduct] = useState([]);
  let dispatch = useDispatch();
  let getAllProductsState = useSelector((state) => state.getAllProductsReducer);
  let { loading, products, error } = getAllProductsState;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div className="container">
      <Filter />
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error error='Something went wrong!' />
      ) : (
        <div className="row mt-3">
          {products.map((product) => {
            return (
              <div className="col-3" key={product._id}>
                <div className="card p-2 mb-3">
                  <Link to={`product/${product._id}`}>
                    <img
                      src={product.image}
                      className="image-fluid m-auto"
                      alt=""
                      width="200px"
                      height="150px"
                      title="hii"
                    />
                    <h2>name : {product.name}</h2>
                    <h2>category : {product.category}</h2>
                    <h2>price : {product.price}</h2>
                    {/* <p>description : {product.description}</p> */}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
