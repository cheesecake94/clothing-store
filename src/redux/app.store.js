import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './app.reducer';
import { persistStore } from 'redux-persist';

export const appStore = createStore(appReducer, composeWithDevTools());

export const persistor = persistStore(appStore);

// eslint-disable-next-line
export default { appStore, persistor };