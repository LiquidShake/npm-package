import React from 'react';
import './dropdown.css';

/**
 * 
 * @param {String} label - a lowercase string that describe the purpose of the dropdown menu
 * @param {Array} options - array of options to populate the dropdown menu. It can be bidimentional 
 * @param {Function} handler - a function to manipulate the data send by the component
 * @returns {React component} - A dropdown menu base on native HTML select and options. 
 * If you want your options to have values in your forms, please be sure to give a bimentional
 * array as the options prop with the model 
 *  {
        "name": "visible text in my menu",
        "abbreviation": "value of the option in the HTML"
    }
 *  Otherwise the options won't be populate with the value attribute and only the visible text will be send through your form.
 */
const Dropdown = ({label, options, handler}) => {

    return (
        <label className='dropdown-label'>
            {label}
            <select name={label} className='dropdown' onChange={handler}>
                {options.map((option) => 
                    option.abbreviation && option.name ? 
                    <option key={option.abbreviation} value={option.abbreviation}>{option.name}</option> :
                    <option key={option}>{option}</option>
                )}
            </select>
        </label>
    )
}

export default Dropdown;