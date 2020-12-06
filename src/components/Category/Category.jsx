import React from 'react';
import PropTypes from 'prop-types';
import { category } from './Category.scss';

const Category = (props) => {

    const {
        children,
        className
    } = props;

    return (
        <span className={`${category} ${className}`}>
            {children}
        </span>
    )
}

Category.propTypes = {
    className:PropTypes.string,
    children:PropTypes.node,
}


export default Category;

