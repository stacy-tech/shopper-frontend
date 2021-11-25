
// fetch request for my product index
export const getProducts = () => {
    return dispatch => fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(products => dispatch({type: "GET_PRODUCTS", payload: products}))   
}

// fetch request for my show action
export const getProduct = (id) => {
    return dispatch => fetch(`http://localhost:3000/products/${id}`)
    .then(res => res.json())
    .then(product => dispatch({type: "GET_PRODUCT", payload: product}))   
}