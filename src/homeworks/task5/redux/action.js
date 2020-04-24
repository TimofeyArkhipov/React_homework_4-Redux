export const ADD_TO_CART = 'ADD_RO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART ';
export const INC_QUANTITY = 'INC_QUANTITY';
export const DEC_QUANTITY = 'RED_QUANTITY';



export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        payload: {
            id,
            quantity: 1,
        }
    }
};


export const deleteFromCart = (id) => {
    return {
        type: DELETE_FROM_CART,
        id,
    }
};

export const increaseQuantity = (id) => {
    return {
        type: INC_QUANTITY,
        id,
    }
};

export const decreaseQuantity = (id) => {
    return {
        type: DEC_QUANTITY,
        id,
    }
};