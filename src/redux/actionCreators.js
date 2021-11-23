export const getProducts = () => {
    return dispatch => fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(products => dispatch({type: "GET_PRODUCTS", payload: products}))
    
}