import {GET_PRODUCTS,ADD_PRODUCTS,DELETE_PRODUCT,PRODUCT_LOADING} from '../ProductReducer/ProductType';
const INTIAL_STATE = {
   products:[{
    id: 1,
    name: 'Brown Brim',
    description:'lorem is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using   making it look like readable English.',
    imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
    price: 25,
    weight:12,
    variants: {
      variant1: {
        name:'color',
        options:['yellow','blue','green'],
        price:123
      },
      variant2: {
        name:'size',
        options:['8','9','10'],
        price:100
      },
      variant3: {
        name:'cutting',
        options:['small','large','medium'],
        price:100
      }

    }
  }],
   loading:false
    
}
const ProductReducer = (state = INTIAL_STATE, action) => {
    switch(action.type) {
       case GET_PRODUCTS:
         return {...state,
                   products:action.payload,
                  loading:false
                };
         
         case DELETE_PRODUCT:
          return {...state,
                  products:state.orders.filter(product=>product._id!==action.payload) };
     
       case ADD_PRODUCTS:
         return state = state -1;

         case PRODUCT_LOADING:
          return {
            ...state,
            loading:true
          }

       default:
         return state;
     }
  };
   export default ProductReducer;