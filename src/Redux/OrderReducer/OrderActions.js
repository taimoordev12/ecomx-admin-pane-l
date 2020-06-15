import {GET_ORDERS,ADD_ORDERS,ORDER_LOADING,DELETE_ORDER} from './OrderTypes';
import axios from 'axios';
export const getOrders=()=>{
    return (dispatch) => {
        dispatch(OrderLoading());
        axios
        .get('/api/orders')
        .then(
            res=>dispatch({
               type:GET_ORDERS,
               payload:res.data
            }     )
        );
    }


   
}

export const DeleteOrder=id=>{
    return (dispatch) => {
        dispatch(OrderLoading());
        axios
        .delete('/api/orders/'+id)
        .then(dispatch({
        type: DELETE_ORDER,
        payload:id      
        }));
        
    }
   
}

export const OrderLoading=()=>{
    return {
        type:ORDER_LOADING,

        
    }
}
