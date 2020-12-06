import React from 'react';
import PropTypes from 'prop-types'

import {name} from './Name.scss'

const Name = (props) => {

    const {
        className,
        children
    } = props;

    return (
        <div className={`${className} ${name}`}>
            {children}
        </div>
    )
}

Name.propTypes = {
    children:PropTypes.node,
    className:PropTypes.string,
}

export default Name;

