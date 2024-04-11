import axios from "axios";

export let getAllProducts = () => {
  return (dispatch) => {
    dispatch({ type: "GET_PRODUCT_REQUEST" });
    axios
      .get("http://localhost:5010/getallproducts")
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "GET_PRODUCT_SUCCESS", payload: res.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "GET_PRODUCT_FAILURE", payload: error.message });
      });
  };
};

export let getProductById = (productid) => {
  return (dispatch) => {
    dispatch({ type: "GET_PRODUCTBYID_REQUEST" });
    axios
      .post("http://localhost:5010/getproductbyid", { productid })
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "GET_PRODUCTBYID_SUCCESS", payload: res.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "GET_PRODUCTBYID_FAILURE", payload: error.message });
      });
  };
};

export let filterProducts = (searchkey, sortkey, category) => {

  let filteredProducts
  return (dispatch) => {
    dispatch({ type: "GET_PRODUCT_REQUEST" });
    axios
      .get("http://localhost:5010/getallproducts")
      .then((res) => {
        console.log(res.data);

        filteredProducts = res.data

        if (searchkey) {
          filteredProducts = res.data.filter((product) => product.name.toLowerCase().includes(searchkey))
        }

        if (sortkey !== 'popular') {
          if (sortkey === 'htl') {
            filteredProducts = res.data.sort((a, b) => {
              return b.price - a.price

            })
          }
          else {
            if (sortkey === 'lth') {
              filteredProducts = res.data.sort((a, b) => {
                return a.price - b.price
              })
            }
          }

        }

        if (category !== 'all') {
          filteredProducts = res.data.filter((product) => product.category.toLowerCase().includes(category))

        }

        dispatch({ type: "GET_PRODUCT_SUCCESS", payload: filteredProducts });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "GET_PRODUCT_FAILURE", payload: error.message });
      });
  };
};




