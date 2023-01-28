import React, { useState } from "react";
import './SearchBar.css';

const SearchBar = () => {
    const [ingredients, setIngredients] = useState(['apple', 'eggs']);

    return (
        <div className="test">
            <div>
                <input placeholder=""/>
            </div>

        </div>
    );
};

export default SearchBar