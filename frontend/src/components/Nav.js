import React from "react";
import logo from "../images/mypic.jpeg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/actions/userAction";

const Nav = () => {
  let cartState = useSelector((state) => state.cartReducer);
  let userState = useSelector((state) => state.loginUserReducer);
  let state = useSelector((state) => state)
  console.log(state)

  let { cartItems } = cartState;
  let { userdata } = userState;
  let { username } = userdata

  let dispatch = useDispatch()
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link to="/">
          <img src={logo} alt="" width="40px" height="40px" className="me-3" />
        </Link>
        <Link to="/" className="navbar-brand fs-3 fw-medium">
          ReyanStore
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto align-items-center">
            {username ? (<div className="dropdown pe-2">
              <button className="btn btn-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-person-circle" style={{ background: "transparent" }}>{username}</i>  </button>
              <ul className="dropdown-menu mt-3">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Orders</a></li>
                <li className="dropdown-item" onClick={() => { dispatch(userLogout()) }}>Logout</li>
              </ul>
            </div>) : (<Link
              to="/login"
              className="nav-link text-light fw-medium"
              aria-current="page"
            >
              login
            </Link>)}



            <Link to="/cart" className="nav-link text-light fw-medium">
              <i className="bi bi-cart2"></i>
              {cartItems.length}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
