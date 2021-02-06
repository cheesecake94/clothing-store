import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import categoriesReducer from './categories/categories.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
  key: 'app',
  storage,
  whitelist: ['cart']
}

const appReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, appReducer);