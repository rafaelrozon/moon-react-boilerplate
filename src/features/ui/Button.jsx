import React from 'react';

const Button = (props) => {
    const { text } = props;
    return (
        <button>{text}</button>
    );
};

export default Button;