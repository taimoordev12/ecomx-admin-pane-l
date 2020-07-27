import { combineReducers } from 'redux';
import OrderReducer from '../OrderReducer/OrderReducer';
import ProductReducer from '../ProductReducer/ProductReducer';


const rootReducer =combineReducers({
   Order:OrderReducer,
   Product:ProductReducer
});

export default rootReducer;