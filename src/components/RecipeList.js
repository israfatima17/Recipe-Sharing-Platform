// src/components/RecipeList.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";
import RecipeCard from './RecipeCard';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const querySnapshot = await getDocs(collection(db, "recipes"));
            setRecipes(querySnapshot.docs.map(doc => doc.data()));
        };
        fetchRecipes();
    }, []);

    return (
        <div className="recipe-list">
            {recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
            ))}
        </div>
    );
};

export default RecipeList;
