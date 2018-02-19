import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import dialogReducer from './reducer';

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
  thunk
]

const reducers = {
  dialogReducer
};

const reducer = combineReducers(reducers);

export default createStore(reducer, withDevTools(
  applyMiddleware(...middleware)
));
