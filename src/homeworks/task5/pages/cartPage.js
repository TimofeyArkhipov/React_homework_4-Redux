import React from "react";
import { connect } from 'react-redux';
import {deleteFromCart, increaseQuantity, decreaseQuantity } from "../redux/action";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";

function CartPage({products, cart,  deleteFromCart, increaseQuantity, decreaseQuantity }) {

    //удаление
    function eventHandlerDelete (id) {
        deleteFromCart(id);
    }

    //увелечение на 1
   function eventHandlerIncrease (id) {
       increaseQuantity(id);
       console.log('+');
    }

    //уменьшение на 1
   function eventHandlerDecrease (id) {
       decreaseQuantity(id);
       console.log('-');
    }

    //найти товры в корзине
    function addedProductsInCart () {
       let cartArray = [];
       cart.forEach((cartProduct) => {
           let currentProduct = products.find(item => item.id === cartProduct.id);
           currentProduct.quantity = cartProduct.quantity;
           cartArray.push(currentProduct);
       })
        return cartArray;
    }

    let cartArray = addedProductsInCart();

    console.log(cartArray);
    return(
        <div>
            {cartArray.length > 0 ?
            cartArray.map(item =>
                <Card>
                    <br/>
                        <CardMedia
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.name}
                            </Typography>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="240"
                                image={item.img}
                                title="Contemplative Reptile"
                            />
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.userCategory}
                            </Typography>
                            <div className="amount-position">
                                <IconButton onClick={()=> eventHandlerIncrease(item.id)} aria-label="delete" size="small">+</IconButton>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Amount : {item.quantity}
                                </Typography>
                                <IconButton onClick={()=> eventHandlerDecrease(item.id)} aria-label="delete" size="small">-</IconButton>
                            </div>
                        </CardContent>
                        <Button onClick={()=> eventHandlerDelete(item.id)} variant="contained" color="secondary">
                            Detele
                        </Button>
                    <CardActions>
                    </CardActions>
                </Card>
            ):
                <div>
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="h2">
                            Cart empty
                        </Typography>
                    </CardContent>

                </div>
            }
        </div>
        )
}


const mapStateToProps = (state)=>{
    return {
        products: state.products,
        cart: state.cart,
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        deleteFromCart: (id)=>{
            dispatch(deleteFromCart(id))
        },
        increaseQuantity: (id)=>{
            dispatch(increaseQuantity(id))
        },
        decreaseQuantity: (id)=>{
            dispatch(decreaseQuantity(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
