import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

//записть в локал соредж
store.subscribe( () => {
  localStorage.setItem('cartData', JSON.stringify(store.getState().cart))
});

export default store;
