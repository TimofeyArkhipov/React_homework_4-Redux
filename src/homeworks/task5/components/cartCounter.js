import React from "react";
import { connect } from 'react-redux';

function CartCounter({cart}) {

    function counter (cart){
        let sum = 0;
        cart.map( item =>
            sum += item.quantity
       );
        return sum;
    }

    // console.log(counter(cart));
    return(
        <div> {counter(cart)}</div>
    )
}

const mapStateToProps = (state)=>{
    return {
        cart: state.cart
    }
};

export default connect(mapStateToProps)(CartCounter);