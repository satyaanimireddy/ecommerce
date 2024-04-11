import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../redux/actions/userAction";
import Spinner from "../components/Spinner";
import Success from "../components/Success";
import Error from "../components/Error";

function Signupscreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  let signupuserstate = useSelector((state) => state.signUpUserReducer)

  let { loading, success, error } = signupuserstate

  let dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault(); // it will control default behavior
    const userdata = {
      username,
      email,
      password,
      confirmpassword,
    };

    if (password == confirmpassword) {
      dispatch(signUpUser(userdata));
    } else {
      alert("Passwords are not matched");
    }
    // axios
    //   .post("http://localhost:5010/signup", data)
    //   .then((res) => {
    //     console.log(res);
    //     navigate("/login");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  return (
    <div className="container mt-3">
      <div className="row">
        <h2 className="text-center fs-4">Sign Up</h2>
        {loading && <Spinner />}
        {success && <Success success='User Created Successfully' />}
        {error && <Error error='Something went wrong!' />}
        <div className="col-4 m-auto my-4 bg-secondary px-4 py-3 text-white fs-5 rounded">
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                User name
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
            </div>
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
            <div className="mb-3">
              <label htmlFor="cpassword" className="form-label">
                confirm password
              </label>
              <input
                type="password"
                className="form-control"
                id="cpassword"
                value={confirmpassword}
                onChange={(e) => {
                  setConfirmpassword(e.target.value);
                }}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 fs-5 fw-medium mt-3"
            >
              Register
            </button>
          </form>
          <p className="pt-3">
            Have already account ? &nbsp;
            <Link to="/login" className="text-warning fs-5 fw-medium">
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signupscreen;
