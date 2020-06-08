import React from 'react';

const Button = ({ name, handleClick }) => (
    <button 
        className="btn btn-danger"
        onClick={ handleClick }
    >
        { name }
    </button>
)

export default Button;