// import { loadCart } from "./actionCreators";

const initialState = {
  products: [],
  selectedProduct: {
    title: "",
    imageUrl: "",
    description: "",
    price: 0,
    transactions: [],
  },
  user: {
    username: "",
    transactions: [],
  },
};

export function reducer(state = initialState, action) {
  const _loadCart = () => {
    return {
      ...state,
      user: { ...state.user, transactions: action.payload },
    };
  };

  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCT":
      return { ...state, selectedProduct: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    // let products = action.payload.transactions.map(product => product.product )
    // console.log(action.payload.transactions)
    // console.log(action.payload.username)
    // return {...state, user:{username: action.payload.username, transactions: products}}
    case "LOGOUT":
      return { ...state, user: { username: "" } };
    case "ADD_TO_CART":
      // console.log(action.payload)
      // return {...state, user:{...state.user,transactions:[action.payload.product, ...state.user.transactions]}}
      return {
        ...state,
        selectedProduct: {
          ...state.selectedProduct,
          transactions: [action.payload, ...state.selectedProduct.transactions],
        },
      };
    case "REMOVE_FROM_CART": {
      let _selectedProduct = {
        ...state.selectedProduct,
        transactions: [
          ...state.selectedProduct.transactions.filter(
            (transaction_item) =>
              transaction_item.id !== action.payload.product.id
          ),
        ],
      };
      console.log(
        "REMOVE_FROM_CART TRIGGERED",
        state.selectedProduct.transactions.length,
        _selectedProduct.transactions.length
      );
      return {
        ...state,
        selectedProduct: _selectedProduct,
      };
    }

    case "LOAD_CART": {
      let new_state = _loadCart();
      console.log("new_state", new_state);
      return new_state;
    }
    default:
      return { ...state };
  }
}
