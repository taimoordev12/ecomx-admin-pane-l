 import {GET_ORDERS,ADD_ORDERS,DELETE_ORDER,ORDER_LOADING} from '../OrderReducer/OrderTypes';
const INTIAL_STATE = {
   orders:[],
   loading:false
    
}
const OrderReducer = (state = INTIAL_STATE, action) => {
    switch(action.type) {
       case GET_ORDERS:
         return {...state,
                   orders:action.payload,
                  loading:false
                };
         
         case DELETE_ORDER:
          return {...state,
                  orders:state.orders.filter(order=>order._id!==action.payload) };
     
       case ADD_ORDERS:
         return state = state -1;

         case ORDER_LOADING:
          return {
            ...state,
            loading:true
          }

       default:
         return state;
     }
  };
   export default OrderReducer;