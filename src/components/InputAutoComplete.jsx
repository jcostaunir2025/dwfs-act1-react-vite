import React, {useContext, useState} from 'react';
import {GlobalContext} from "../context/GlobalContext.jsx";

const inputAutoComplete = () => {
    const [inputValue, setInputValue] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const { changeInputsuggestion, suggestions } = useContext(GlobalContext);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);

        const newFilteredSuggestions = suggestions.filter(
            (item) => item.toLowerCase().startsWith(value.toLowerCase())
        );
        setFilteredSuggestions(newFilteredSuggestions);
        setShowSuggestions(true);
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion);
        setFilteredSuggestions([]);
        setShowSuggestions(false);

        changeInputsuggestion(suggestion);
    };

    return (
        <div>
            <label>Busqueda por titulo de libro: </label>
            <input
                id="titulo"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
            />
            {showSuggestions && filteredSuggestions.length > 0 && (
                <ul>
                    {filteredSuggestions.map((suggestion, index) => (
                        <li key={index}>
                            <button onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default inputAutoComplete;