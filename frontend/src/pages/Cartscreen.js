import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/actions/cartActions";
import Checkout from "../components/Checkout";

const Cartscreen = () => {
  let cartState = useSelector((state) => state.cartReducer);

  // let getProductByIdState = useSelector((state) => state.getProductByIdReducer);
  let dispatch = useDispatch();
  // let { product } = getProductByIdState;

  let { cartItems } = cartState;
  console.log(cartItems)


  let total = cartItems.reduce((cum, item) => {
    return cum + (item.quantity * item.price)
  }, 0)
  console.log(total)

  return (
    <div className="container">
      <h2>Cart info</h2>
      <div className="col-md-10 text-center m-auto">
        <table className="table table-bordered w-100">
          <thead>
            <tr>
              <th>name</th>
              <th>price</th>
              <th>quantity</th>
              <th>total</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <select
                      value={item.quantity}
                      onChange={(e) =>
                        dispatch(addToCart(item, e.target.value))
                      }
                    >
                      {Array.from({ length: item.countInStock }).map((v, i) => {
                        // console.log(v);
                        let optionValue = i + 1;
                        return (
                          <option key={optionValue} value={optionValue}>
                            {optionValue}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                  <td>{item.quantity * item.price}</td>
                  <td>
                    <i
                      class="bi bi-trash3"
                      onClick={() => dispatch(deleteFromCart(item))}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h4 className="mt-4 fs-4">Total: {total}</h4>
        <hr />
        <Checkout amount={total} />
      </div>
    </div>
  );
};

export default Cartscreen;
