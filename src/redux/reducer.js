const initialState = {
    products: [], 
    selectedProduct: {
        title: "",
        imageUrl: "",
        description: "",
        price: 0
    }
}

export function reducer(state=initialState, action){
    switch (action.type){
        case "GET_PRODUCTS":
            return {...state, products: action.payload};
        case "GET_PRODUCT":
            return {...state, selectedProduct: action.payload}
        default:
            return {...state}
    }
    
}