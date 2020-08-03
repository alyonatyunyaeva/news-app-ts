import { combineReducers } from 'redux';
import loadNews from './loadNews';
import loadSources from './loadSources';

const rootReducer = combineReducers({
    loadNews,
    loadSources,
});

export default rootReducer;