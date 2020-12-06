import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import Category from "../Category";
import Name from "../Name";
import Price from "../Price";


import {
    modal,
    modal__background,
    modal__content,
    modal__category,
    modal__name,
    modal__price,
    modal__form,
    modal__input,
    modal__wrapper,
    modal__close,
} from './Modal.scss';
import Input from "../UIComponents/Input";
import Button from "../UIComponents/Button";
import {checkName, checkPhone, inputName, inputPhone, submitForm} from "../../reducers/form/actions";



const Modal = (props) => {
    const product = useSelector(s => s.modal.product)
    const dispatch = useDispatch()
    const nameValue = useSelector(s => s.form.name.value)
    const phoneValue = useSelector(s => s.form.phone.value);
    const nameError = useSelector(s => s.form.name.errorMessage);
    const phoneError = useSelector(s => s.form.phone.errorMessage)
    const {isOpen, toggle} = props;


    if(isOpen) {
        return (
            <div className={modal}>
                <div className={modal__background} onClick={toggle}/>
                    <div className={modal__content}>
                        <div className={modal__wrapper}>
                            <div className={modal__close} onClick={toggle}>
                                <div>
                                </div>
                            </div>
                            <Category className={modal__category}>{product.category}</Category>
                            <Name className={modal__name}>{product.name}</Name>
                            <Price className={modal__price}>{product.price}</Price>
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                dispatch(submitForm({
                                    name: nameValue,
                                    phone: phoneValue,
                                }))
                            }} className={modal__form}>
                                <Input
                                    className={modal__input}
                                    placeholder="Name"
                                    error={nameError}
                                    value={nameValue}
                                    onBlur={() => dispatch(checkName(nameValue))}
                                    onChange={(e) => dispatch(inputName(e))} />
                                <Input
                                    className={modal__input}
                                    placeholder="Phone number"
                                    value={phoneValue}
                                    error={phoneError}
                                    onBlur={() => dispatch(checkPhone(phoneValue))}
                                    onChange={(e) => dispatch(inputPhone(e))} />
                                <Button type="submit" size="full" className={modal__input}>
                                    Order
                                </Button>
                            </form>
                        </div>
                </div>
            </div>
        )
    }

    return null;

}

Modal.propTypes = {
    isOpen:PropTypes.bool,
    toggle:PropTypes.func,
}

export default Modal;