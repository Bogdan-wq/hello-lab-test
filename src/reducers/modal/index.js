import {MODAL_SET_OPEN, MODAL_SET_PRODUCT} from "./action-types";

const initialState = {
    open:false,
    product:null
}


const modalReducer = (state = initialState,action) => {
    switch (action.type) {
        case MODAL_SET_OPEN: {
            return {
                ...state,
                open:action.payload,
            }
        }
        case MODAL_SET_PRODUCT:{
            return {
                ...state,
                product: action.payload
            }
        }
        default:{
            return state
        }
    }
}

export default modalReducer;