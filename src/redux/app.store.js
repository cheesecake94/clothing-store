import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import appReducer from './app.reducer';

const middlewares = [logger];

const appStore = createStore(appReducer, applyMiddleware(...middlewares));

export default appStore;