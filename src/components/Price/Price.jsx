import React from 'react';
import PropTypes from 'prop-types';

import {
    price,
    price__sign,
    price__amount,
} from './Price.scss'

const Price = (props) => {

    const {
        children,
        className
    } = props;

    return (
        <div className={`${className} ${price}`}>
            <span className={price__sign}>
                $
            </span>
            <span className={price__amount}>
                {children}
            </span>
        </div>
    )
}

Price.propTypes = {
    children:PropTypes.node,
    className:PropTypes.string,
}

export default Price;


