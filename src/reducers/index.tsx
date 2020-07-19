import { combineReducers } from 'redux';
import loadNews from './loadNews';

const rootReducer = combineReducers({
    loadNews,
});

export default rootReducer;