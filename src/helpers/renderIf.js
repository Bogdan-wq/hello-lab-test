import React from 'react';

const renderIf = (statement) => {
    return (Component) => {
        if(statement) {
            return <Component />;
        }

        return null;
    }
}

export default renderIf;