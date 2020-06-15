import {GET_BANNERS,ADD_BANNERS,DELETE_BANNER,BANNER_LOADING} from '../BANNERReducer/BANNERTypes';
const INTIAL_STATE = {
   banners:[],
   loading:false
    
}
const BannerReducer = (state = INTIAL_STATE, action) => {
    switch(action.type) {
       case GET_BANNERS:
         return {...state,
                   banners:action.payload,
                  loading:false
                };
         
         case DELETE_BANNER:
          return {...state,
                  banners:state.BANNERs.filter(BANNER=>BANNER._id!==action.payload) };
     
       case ADD_BANNERS:
         return state = state -1;

         case BANNER_LOADING:
          return {
            ...state,
            loading:true
          }

       default:
         return state;
     }
  };
   export default BannerReducer;