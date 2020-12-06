import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = (props) => {

    const {
        size,
        upperCase,
        theme,
        children,
        className,
        shadow,
        ...domProps
    } = props;


    const buttonSize = styles[`button_${size}`]

    const buttonCase = upperCase ? styles.button_upper : '';

    const buttonShadow = shadow ? styles.button_shadow : '';

    return <button
        {...domProps}
        className={`${className} ${styles.button} ${buttonSize} ${buttonCase} ${buttonShadow}`}>
        {children}
    </button>
}

Button.propTypes = {
    size:PropTypes.oneOf(['sm','lg','full']),
    upperCase:PropTypes.bool,
    children:PropTypes.node,
    onClick:PropTypes.func,
    className:PropTypes.string,
    type:PropTypes.oneOf(['button','submit']),
    shadow:PropTypes.bool
}

Button.defaultProps = {
    size:'sm',
    upperCase:true,
    onClick:() => {},
    type:'button',
    shadow:false,
}

export default Button;