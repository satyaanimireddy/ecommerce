import { applyMiddleware, combineReducers, createStore } from "redux";
import {
  getAllProductByIdReducer,
  getAllProductsReducer,
} from "./reducers/productReducers";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducer";
import { signUpUserReducer } from "./reducers/userReducer";
import { loginUserReducer } from "./reducers/userReducer";
import { placeOrderReducer } from "./reducers/orderReducer";

let cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
let userdata = localStorage.getItem("userdata") ? JSON.parse(localStorage.getItem("userdata")) : [];

console.log(cartItems);

//we passed this get state as reducer
let rootReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  getProductByIdReducer: getAllProductByIdReducer,
  cartReducer: cartReducer,
  signUpUserReducer: signUpUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer
});

let initialState = {
  cartReducer: { cartItems: cartItems },
  loginUserReducer: { userdata: userdata }
};

export let store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
