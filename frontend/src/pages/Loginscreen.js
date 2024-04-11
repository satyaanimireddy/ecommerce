// import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/userAction";
import Error from "../components/Error";
import Spinner from "../components/Spinner";

function Loginscreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let loginuserstate = useSelector((state) => state.loginUserReducer)
  console.log(loginuserstate)

  let { error, success, loading } = loginuserstate

  // const [token, setToken] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault(); // it will control default behavior
    let userdata = {
      email,
      password,
    };

    dispatch(loginUser(userdata))
    if (success) {
      navigate('/')
    }


    // axios
    //   .post("http://localhost:5010/login", userdata)
    //   .then((res) => {
    //     console.log(res.data.token);
    //     window.localStorage.setItem("jwt-token", res.data.token);
    //     setToken(localStorage.getItem("jwt-token"));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  // if (token) {
  //   return navigate("/profile");
  // }

  return (
    <div className="container mt-3">
      <div className="row">
        <h2 className="text-center fs-4">Login</h2>
        {loading && <Spinner />}
        {error && <Error error='Credentials not matched' />}
        <div className="col-4 m-auto my-4 bg-secondary px-4 py-3 text-white fs-5 rounded">
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 fs-5 fw-medium mt-3"
            >
              Login
            </button>
          </form>
          <p className="pt-3">
            Don't have account?
            <Link to="/signup" className="text-warning fs-5 fw-medium px-2">
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
