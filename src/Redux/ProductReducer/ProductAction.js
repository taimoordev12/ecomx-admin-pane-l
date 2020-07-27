import {GET_PRODUCTS,ADD_PRODUCTS,PRODUCT_LOADING,DELETE_PRODUCT} from './ProductType';
import axios from 'axios';
export const getProducts=()=>{
    return (dispatch) => {
        dispatch(ProductLoading());
        axios
        .get('/api/products')
        .then(
            res=>dispatch({
               type:GET_PRODUCTS,
               payload:res.data
            }     )
        );
    }


   
}

export const DeleteProduct=id=>{
    return (dispatch) => {
        dispatch(ProductLoading());
        axios
        .delete('/api/products/'+id)
        .then(dispatch({
        type: DELETE_PRODUCT,
        payload:id      
        }));
        
    }
   
}

export const ProductLoading=()=>{
    return {
        type:PRODUCT_LOADING,

        
    }
}
