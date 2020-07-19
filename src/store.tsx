import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const InitialState = {};

const store = createStore(rootReducer, InitialState, compose(
    applyMiddleware(thunk),
    )
);

    export default store;