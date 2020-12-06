import React from 'react';
import PropTypes from 'prop-types';
import {
    input,
    input_error,
    input__error
} from './Input.scss';
import renderIf from "../../../helpers/renderIf";

const Input = (props) => {

    const {
        className,
        error,
        ...domProps
    } = props;


    const errorLabel = renderIf(error)
    (() => <span className={input__error}>{error}</span>)

    return (
        <>
            <div className={`${className} ${input} ${error ? input_error : ''}`}>
                <input {...domProps}/>
            </div>
            {errorLabel}
        </>
    )
}

Input.propTypes = {
    className:PropTypes.string,
    onChange:PropTypes.func,
    value:PropTypes.string,
    placeholder:PropTypes.string,
    onBlur:PropTypes.func,
    error:PropTypes.string,
}

Input.defaultProps = {
    placeholder:'',
    onChange:() => {},
    onBlur:() => {},
    error:'',
}

export default Input;

