import {ADD_TO_CART, DELETE_FROM_CART, INC_QUANTITY, DEC_QUANTITY} from './action';
import React from "react";
import getLocalData from "../hooks/getLocalStorage";
// getLocalData('cartData') ||



let initialState = [];
getLocalData('cartData') ? initialState = getLocalData('cartData') : initialState = [];

const cartReduser = (state = initialState, action)=> {
    switch(action.type) {
        case ADD_TO_CART:
            let newItem = state.find(item => item.id === action.payload.id);
            if (newItem) {
                newItem.quantity += 1;
                console.log(state);
                return [...state];
            }
            return [...state, action.payload];

        case DELETE_FROM_CART:
            return  state.filter(item => item.id !== action.id);

        case INC_QUANTITY:
            let plusItem = state.find(item => item.id === action.id);
            plusItem.quantity += 1;
            return [...state];

        case DEC_QUANTITY:
            let minusItem = state.find(item => item.id === action.id);
            minusItem.quantity -= 1;
            if (minusItem.quantity <= 0){
                return  state.filter(item => item.id !== action.id);
            }
            return [...state];

        default:
            return [...state];
    }
};

export default cartReduser;