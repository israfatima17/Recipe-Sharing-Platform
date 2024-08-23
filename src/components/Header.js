// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Recipe Sharing Platform</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/submit">Submit Recipe</Link></li>
                    <li><Link to="/recipes">Browse Recipes</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
