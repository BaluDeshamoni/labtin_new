import React from 'react';

const FormHeading: React.FC<any> = ({ children }) => {
    return (
        <h1 style={{ textAlign: 'center', color: '#000C83' }}>{children}</h1>
    );
};

export default FormHeading;