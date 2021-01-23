import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './app.reducer';

const appStore = createStore(appReducer, composeWithDevTools());

export default appStore;