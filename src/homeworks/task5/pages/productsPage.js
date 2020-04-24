import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


import { connect } from 'react-redux';
import {addToCart} from "../redux/action";

function ProductsPage({products, addToCart}){

    // console.log(productsList);

        const handleClick = (id) => {
            addToCart(id);
        };

    return (
        <div>
            <div className='page'>
                {products.map(product =>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {product.name}
                                </Typography>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="240"
                                    image={product.img}
                                    title="Contemplative Reptile"
                                />
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {product.userCategory}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                            <Button onClick={() => handleClick(product.id)} size="small" color="primary">
                                <AddShoppingCartIcon/> Add to cart
                            </Button>
                        </CardActions>
                    </Card>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        products: state.products
    }
};

const mapDispatchToProps = (dispatch)=>{

    return{
        addToCart: (id)=> {
            dispatch(addToCart(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);