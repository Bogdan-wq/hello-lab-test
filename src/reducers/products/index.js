import {
    PRODUCTS_SET_DATA,
    PRODUCTS_SET_ERROR,
    PRODUCTS_SET_LOADING
} from "./action-types";

const initialState = {
    loading:true,
    error:false,
    data:null,
}


const productsReducer = (state = initialState,action) => {
    switch (action.type) {
        case PRODUCTS_SET_DATA: {
            return {
                ...state,
                data:action.payload
            }
        }
        case PRODUCTS_SET_LOADING:{
            return {
                ...state,
                loading:action.payload
            }
        }
        case PRODUCTS_SET_ERROR : {
            return {
                ...state,
                error:action.payload,
            }
        }
        default:{
            return state;
        }
    }
}

export default productsReducer;