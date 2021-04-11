// import * as types from '../actionTypes';

const initialState = {
    cart:[],
    userName: "ABC"
}

export const productReducer =  (state = initialState, { type, payload }) => {
    switch (type) {

    case "ADD_PRODUCT":
        return { ...state, cart: [...state.cart, payload]}
    
    
    default:
        return state
    }
} 
 