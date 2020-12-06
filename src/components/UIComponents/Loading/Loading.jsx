import React from 'react';
import {
    loading,
    loading__label
} from './Loading.scss'

const Loading = (props) => {
    return (
        <div className={loading}>
            <div className={loading__label}>
                Loading...
            </div>
        </div>
    )
}

export default Loading;