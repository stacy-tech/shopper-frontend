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
        username: "",
        transactions: []
    }
}



export function reducer(state=initialState, action){
    switch (action.type){
        case "GET_PRODUCTS":
            return {...state, products: action.payload};
        case "GET_PRODUCT":
            return {...state, selectedProduct: action.payload}
        case "SET_USER":
            let products = action.payload.transactions.map(product => product.product )
            // console.log(action.payload.transactions)
            console.log(action.payload.username)
            return {...state, user:{username: action.payload.username, transactions: products}}
        case "LOGOUT":
            return {...state, user: {username: ""}}
            case "ADD_TO_CART":
                console.log(action.payload)
                return {...state, user:{...state.user,transactions:[action.payload.product, ...state.user.transactions]}}
        //         return {...state, selectedProduct: {...state.selectedProduct, transactions: [action.payload, ...state.selectedProduct.transactions]}}
        default:
            return {...state}
        
        
    }
    
}