const initialState = {
    products: [],
    selectedProduct: {
        title: "",
        imageUrl: "",
        description: "",
        price: 0,
        transactions: []
    },
    user: {
        username: ""
    }
}



export function reducer(state=initialState, action){
    switch (action.type){
        case "GET_PRODUCTS":
            return {...state, products: action.payload};
        case "GET_PRODUCT":
            return {...state, selectedProduct: action.payload}
        case "SET_USER":
            return {...state, user: action.payload}
        case "LOGOUT":
            return {...state, user: {username: ""}}
        default:
            return {...state}
        
        
    }
    
}