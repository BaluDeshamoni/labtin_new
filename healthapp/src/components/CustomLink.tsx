import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomLink: React.FC<any> = ({ title }) => {
    const navigate = useNavigate();
    return (
        <p style={{ width: 'fit-content' }}>
            <button
                style={{ cursor: 'pointer', border: 'none', fontSize: '20px', textDecoration: 'underline', backgroundColor: 'white' }}
                onClick={() => navigate(-1)}
            >{title}</button>
        </p>
    );
};

export default CustomLink;