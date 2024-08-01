import catfactsReducer from './reducers/catfacts';
import promiseMiddleware from 'redux-promise-middleware';
import {createStore, applyMiddleware} from 'redux';

const store = createStore(catfactsReducer, applyMiddleware(promiseMiddleware));

export default store;
