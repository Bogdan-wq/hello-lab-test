import {PRODUCTS_SET_ERROR,PRODUCTS_SET_LOADING,PRODUCTS_SET_DATA} from "./action-types";

export const productsSetLoading = (loading) => {
    return {
        type:PRODUCTS_SET_LOADING,
        payload:loading,
    }
}

export const productsSetError = (error) => {
    return {
        type:PRODUCTS_SET_ERROR,
        payload:error,
    }
}


export const productsSetData = (data) => {
    return {
        type:PRODUCTS_SET_DATA,
        payload:data
    }
}

