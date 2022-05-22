import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const placeholder = "Dragon Ball";
    const [inputValue, setInputValue] = useState(placeholder);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [ inputValue, ...cats]);
            setInputValue(placeholder);
        } else {
            alert ('La categoría debe tener más de 2 caracteres');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                placeholder={placeholder}
                onChange={e => setInputValue(e.target.value)}
            />
            {/* <button type="submit">Agregar</button> */}
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}