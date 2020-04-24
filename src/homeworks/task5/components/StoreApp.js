import React, {useContext, useState} from 'react';
import '../animationCSS.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import {BrowserRouter as Router, Switch, NavLink, Route, withRouter} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ProductsPage from "../pages/productsPage";
import CartPage from "../pages/cartPage";
import store from '../redux/store'
import {Provider} from "react-redux";
import CartCounter from "./cartCounter";
import Icon from '@material-ui/core/Icon';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomePage from "../pages/homePage";


export default function StoreApp() {

    const NavAnimation = withRouter(({ location }) => (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames='slide'
                timeout={400}
            >
                <Switch>
                    <Route path='/products' exact component={ProductsPage}/>
                    <Route path='/cart' exact component={CartPage}/>
                    <Route path='/' exact component={HomePage}/>
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    ))

    return(
        <Provider store={store}>
            <Container maxWidth="1200">
                <Router>
                    <h2>Market</h2>
                    <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                        <Button>
                            <NavLink to='/'>Home</NavLink>
                        </Button>
                        <Button>
                            <NavLink to='/products'>Products</NavLink>
                        </Button>
                        <Button className = "cart-icon">
                            <div className='circle-count'>
                                <CartCounter />
                            </div>
                            <ShoppingCartIcon/>
                            <NavLink to='/cart'>Cart </NavLink>
                        </Button>
                    </ButtonGroup>
                    <NavAnimation/>
                </Router>
            </Container>
        </Provider>
    )
}

