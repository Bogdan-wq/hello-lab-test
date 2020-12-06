import {
    MODAL_SET_OPEN,
    MODAL_SET_PRODUCT
} from "./action-types";

export const modalSetOpen = (open) => {
    return {
        type:MODAL_SET_OPEN,
        payload:open,
    }
}

export const modalSetProduct = (product) => {
    return {
        type:MODAL_SET_PRODUCT,
        payload:product,
    }
}