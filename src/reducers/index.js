import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cartReducer } from './cartReducer';

import {
	newProductReducer,
	productsReducer,
	adminProductsReducer,
	productDeletesReducer,
	productDetailsReducer,
	productReducer,
} from './productReducer';
import {
	allUsersReducer,
	forgotPasswordReducer,
	loadUserReducer,
	profileReducer,
	userDetailsReducer,
	userReducer,
} from './userReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user'],
};

const rootReducer = combineReducers({
	products: productsReducer,
	product: productReducer,
	productDetails: productDetailsReducer,
	newProduct: newProductReducer,
	deleteProduct: productDeletesReducer,
	profile: profileReducer,
	forgotPassword: forgotPasswordReducer,
	user: userReducer,

	loadUser: loadUserReducer,
	adminProducts: adminProductsReducer,
	allUsers: allUsersReducer,
	userDetails: userDetailsReducer,
	cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
