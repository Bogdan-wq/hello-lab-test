import {FORM_CHECK_NAME, FORM_CHECK_PHONE, FORM_NAME_INPUT, FORM_PHONE_INPUT} from "./action-types";

const initialState = {
    name:{
        value:'',
        errorMessage:null
    },
    phone:{
        value:'',
        errorMessage:null
    }
}


const formReducer = (state = initialState,action) => {
    switch (action.type) {
        case FORM_NAME_INPUT:{
            return {
                ...state,
                name:{
                    ...state.name,
                    value:action.payload,
                }
            }
        }

        case FORM_PHONE_INPUT:{
            return {
                ...state,
                phone:{
                    ...state.phone,
                    value:action.payload,
                }
            }
        }

        case FORM_CHECK_PHONE:{
            return {
                ...state,
                phone:{
                    ...state.phone,
                    errorMessage:action.payload
                }
            }
        }


        case FORM_CHECK_NAME: {

            return {
                ...state,
                name:{
                    ...state.name,
                    errorMessage:action.payload
                }
            }
        }
        default:{
            return state;
        }
    }
}

export default formReducer;