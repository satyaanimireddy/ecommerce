let initialState = {
  loading: false,
  products: [],
  error: "",
};

export let getAllProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_REQUEST":
      return {
        loading: true,
      };
      break;
    case "GET_PRODUCT_SUCCESS":
      return {
        loading: false,
        products: action.payload,
      };
      break;
    case "GET_PRODUCT_FAILURE":
      return {
        loading: false,
        error: action.payload,
      };
      break;
    default:
      return state;
  }
};

export let getAllProductByIdReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case "GET_PRODUCTBYID_REQUEST":
      return {
        loading: true,
      };
      break;
    case "GET_PRODUCTBYID_SUCCESS":
      return {
        loading: false,
        product: action.payload,
      };
      break;
    case "GET_PRODUCTBYID_FAILURE":
      return {
        loading: false,
        error: action.payload,
      };
      break;
    default:
      return state;
  }
};
