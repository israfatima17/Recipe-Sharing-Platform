// src/components/RecipeForm.js
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";

const RecipeForm = () => {
    const [recipe, setRecipe] = useState({
        title: '',
        ingredients: '',
        instructions: ''
    });

    const handleChange = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "recipes"), recipe);
        setRecipe({ title: '', ingredients: '', instructions: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Recipe Title"
                value={recipe.title}
                onChange={handleChange}
                required
            />
            <textarea
                name="ingredients"
                placeholder="Ingredients (separated by commas)"
                value={recipe.ingredients}
                onChange={handleChange}
                required
            />
            <textarea
                name="instructions"
                placeholder="Instructions"
                value={recipe.instructions}
                onChange={handleChange}
                required
            />
            <button type="submit">Submit Recipe</button>
        </form>
    );
};

export default RecipeForm;
