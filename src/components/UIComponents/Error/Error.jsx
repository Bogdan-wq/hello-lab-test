import React from 'react';
import {
    error,
    error__label
} from './Error.scss';

const Error = () => {
    return (
        <div className={error}>
            <span className={error__label}>Something goes wrong with requesting data</span>
        </div>
    )
}

export default Error;