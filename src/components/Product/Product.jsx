import React from 'react';
import PropTypes from 'prop-types';

import {
    product,
    product__category,
    product__footer,
    product__name
} from './Product.scss';
import Button from "../UIComponents/Button";
import Category from "../Category";
import Name from "../Name";
import Price from "../Price";

const Product = (props) => {

    const {
        category,
        name,
        price,
        className,
        openModal
    } = props;

    return (
        <div className={`${className} ${product}`}>
            <Category className={product__category}>{category}</Category>
            <Name className={product__name}>{name}</Name>
            <div className={product__footer}>
                <Price >
                    {price}
                </Price>
                <Button upperCase onClick={openModal}>
                    Buy
                </Button>
            </div>
        </div>
    )
}

Product.propTypes = {
    category:PropTypes.string,
    name:PropTypes.string,
    price:PropTypes.number,
    className:PropTypes.string,
    openModal:PropTypes.func,
}

export default Product;