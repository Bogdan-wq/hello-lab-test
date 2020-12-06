import {formCheckName, formCheckPhone, formInputName, formInputPhone} from "./action-creators";
import Validator from "../../helpers/validate";

const inputName = ({target : {value}}) => (dispatch) => {
    dispatch(formInputName(value))
}

const inputPhone = ({target : {value}}) => (dispatch) => {
    dispatch(formInputPhone(value))
}

const checkName = (value) => (dispatch) => {
    dispatch(formCheckName(null))
    const isValid = new Validator(value)
        .noLength()
        .onlyLetters()
        .getValue()

    if(isValid.error) {
        dispatch(formCheckName(isValid.message))
    }
}

const checkPhone = (value) => (dispatch) => {
    dispatch(formCheckPhone(null))
    const isValid = new Validator(value)
        .noLength()
        .onlyNumbers()
        .strongSymbols(12)
        .getValue()


    if(isValid.error) {
        dispatch(formCheckPhone(isValid.message))
    }
}

const submitForm = (form) => (dispatch) => {
    dispatch(formCheckPhone(null))
    dispatch(formCheckName(null))

    const isValidName = new Validator(form.name)
        .noLength()
        .onlyLetters()
        .getValue()

    const isValidPhone = new Validator(form.phone)
        .noLength()
        .onlyNumbers()
        .strongSymbols(12)
        .getValue()


    if(isValidName.error) {
        dispatch(formCheckName(isValidName.message))
    }

    if(isValidPhone.error) {
        dispatch(formCheckPhone(isValidPhone.message))
    }

    if(!isValidName.error && !isValidPhone.error) {
        console.log({
            name:form.name,
            phone:form.phone,
        })
    }
}

export {
    inputName,
    inputPhone,
    checkName,
    checkPhone,
    submitForm
}