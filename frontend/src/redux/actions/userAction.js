import axios from "axios";

export let signUpUser = (userdata) => {
  return (dispatch, getState) => {
    dispatch({ type: "USER_SIGNUP_REQUEST" });
    axios
      .post("http://localhost:5010/signup", userdata)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: 'USER_SIGNUP_SUCCESS' })

      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "USER_SIGNUP_FAILURE", payload: err.message });
      });
  };
};

export let loginUser = (userdata) => {
  return (dispatch, getState) => {
    dispatch({ type: "USER_LOGIN_REQUEST" });
    axios
      .post("http://localhost:5010/login", userdata)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: res.data });
        localStorage.setItem('userdata', JSON.stringify(getState().loginUserReducer.userdata))
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "USER_LOGIN_FAILURE", payload: err.message });
      });
  };
};


export let userLogout = () => {
  return (dispatch) => {
    dispatch({ type: 'USER_LOGOUT' })
    localStorage.removeItem('userdata')
    localStorage.removeItem('cartItems')
    window.location.href = '/login'
  }
}