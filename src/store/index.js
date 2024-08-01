import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import fetchCatsMiddleware from './middlewares/fetchCatsMiddleware';
import rootReducer from './reducers/catfacts';

const store = createStore(
  rootReducer,
  applyMiddleware(promiseMiddleware, fetchCatsMiddleware),
);

export default store;
