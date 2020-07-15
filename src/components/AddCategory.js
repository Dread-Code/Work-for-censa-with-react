import React, { useState } from 'react';
import Proptypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const  handleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories( cat => [ inputValue, ...cat]);
            setinputValue('');
        }
    }
    return (
        <form onSubmit = { handleSubmit }>
            <input
                type = "text"
                value =  {inputValue}
                onChange = { (e) => {handleInputChange(e)}}
            />
        </form>
        
    )
}

AddCategory.propTypes = {
    setCategories: Proptypes.func.isRequired
}
