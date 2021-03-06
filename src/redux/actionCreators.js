
// fetch request for my product index
export const getProducts = () => {
    return dispatch => fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(products => dispatch({type: "GET_PRODUCTS", payload: products})) 
    .catch(handleError)  
}

// fetch request for my show action
export const getProduct = (id) => {
    return dispatch => fetch(`http://localhost:3000/products/${id}`)
    .then(res => res.json())
    .then(product => dispatch({type: "GET_PRODUCT", payload: product}))  
    .catch(handleError) 
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
    .then(response => {
        localStorage.token = response.token
        dispatch({type: "SET_USER", payload: response.user})
    })
    .catch(handleError)
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
    .then(response => {
        localStorage.token = response.token
        dispatch({type: "SET_USER", payload: response.user})
    })
    .catch(handleError)
}

// fetch to backend for autologin
export const autoLogin = () => {
    return dispatch => fetch("http://localhost:3000/me" , {
        headers: {
            'Authorization': localStorage.token
        }
    })
    .then(res => res.json())
    .then(response => {
        localStorage.token = response.token
        dispatch({type: "SET_USER", payload: response.user})
    })
    .catch(handleError)
}

//  action for both clearing the localStorage and logout request
export const logout = () => {
    return dispatch => {
        localStorage.clear()
        dispatch({type: "LOGOUT"})
    }
}

// adding a item to cart
export const addToCart = (product_id) => {
    // console.log("hello")
    return dispatch => fetch(`http://localhost:3000/transactions`, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.token
        },
        body: JSON.stringify(product_id),
    })
    .then(res => res.json())
    .then(product => dispatch({type: "ADD_TO_CART", payload: product})) 
    .catch(handleError)
   
}

// load an item into my cart for each user
export const loadCart = () => dispatch => fetch('http://localhost:3000/transactions',{
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
    },
})
.then(res => res.json())
.then(user_transaction_items=> dispatch({type: 'LOAD_CART', payload: user_transaction_items}))
.catch(handleError)


// delete item from cart
export const removeFromCart = (product_id)=> {

    return dispatch => fetch(`http://localhost:3000/transactions/${product_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.token
        },
        body: JSON.stringify(product_id),
    })
    .then(res => res.json())
    .then(user_transaction_item => {
        dispatch({type: "REMOVE_FROM_CART", payload: user_transaction_item})
    }) 
    .catch(handleError) 
}

function handleError(error){
    console.error('Failed network request', error)
}