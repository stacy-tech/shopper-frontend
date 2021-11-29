
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

// fetch to backend for user signup
export const submitSignup = (user) => {
    return dispatch => fetch("http://localhost:3000/users", {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(user => dispatch({type: "SET_USER", payload: user}))
}

// fetch to backend for user login
export const submitLogin = (user) => {
    return dispatch => fetch("http://localhost:3000/sessions", {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(user => dispatch({type: "SET_USER", payload: user}))

}