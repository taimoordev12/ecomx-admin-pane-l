import { combineReducers } from 'redux';
import OrderReducer from '../OrderReducer/OrderReducer';


const rootReducer =combineReducers({
   Order:OrderReducer
});

export default rootReducer;