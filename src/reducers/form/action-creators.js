import {FORM_CHECK_NAME, FORM_CHECK_PHONE, FORM_NAME_INPUT, FORM_PHONE_INPUT} from "./action-types";

export const formCheckName = (errorMessage) => {
    return {
        type:FORM_CHECK_NAME,
        payload:errorMessage,
    }
}

export const formCheckPhone = (errorMessage) => {
    return {
        type:FORM_CHECK_PHONE,
        payload:errorMessage,
    }
}

export const formInputName = (value) => {
    return {
        type:FORM_NAME_INPUT,
        payload:value,
    }
}

export const formInputPhone = (value) => {
    return {
        type:FORM_PHONE_INPUT,
        payload:value,
    }
}
