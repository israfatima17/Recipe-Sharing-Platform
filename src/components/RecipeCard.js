// src/components/RecipeCard.js
import React from 'react';

const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card">
            <h2>{recipe.title}</h2>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
        </div>
    );
};

export default RecipeCard;
