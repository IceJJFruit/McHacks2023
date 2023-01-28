import React, { useState } from "react";
import './SearchBar.css';

const SearchBar = () => {
    const [ingredients, setIngredients] = useState("");
    const [list, setList] = useState([])
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(ingredients)
        const date={ingredients}
        if(ingredients){
            setList((ls)=>[...ls,date])
            setIngredients("")
        }

    } 
    return (
        <div className="test">
            <form onSubmit={handleSubmit}>
            <input placeholder="" value={ingredients} onChange={(e)=>setIngredients(e.target.value)} />
            </form>

            {
                list.map((a)=><div>
                    <li>{a.ingredients}</li>
                </div>)
            }
        </div>
    );
};

export default SearchBar