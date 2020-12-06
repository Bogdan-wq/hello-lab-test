import {combineReducers} from "redux";
import productsReducer from "./products";
import modalReducer from "./modal";
import formReducer from "./form";

const rootReducer = combineReducers({
    products:productsReducer,
    modal:modalReducer,
    form:formReducer,
})

export default rootReducer;