import React from 'react';

function RecipeDetail({ recipe, onBack }) {
  return (
    <div className="recipe-detail">
      <button onClick={onBack} style={{ marginBottom: '20px', padding: '10px 20px', backgroundColor: '#6200ea', color: '#fff', border: 'none', borderRadius: '5px' }}>
        Back to Recipes
      </button>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }} />
      <p>{recipe.description}</p>
      <div className="rating">⭐ {recipe.rating}</div>
    </div>
  );
}

export default RecipeDetail;
