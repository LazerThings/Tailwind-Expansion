import React from 'react';
import '../index.css'

const Button = ({ text, onClick, color="blue", textcolor="white" }) => {
    const buttonColor = `bg-${color}-500 hover:bg-${color}-700`;
    const textColor = `text-${textcolor}`

    return (
        <button 
            className={`${buttonColor} ${textColor} font-bold py-2 px-4 rounded`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;
