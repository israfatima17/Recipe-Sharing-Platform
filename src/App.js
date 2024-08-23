// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
// src/App.js
import './styles/styles.css';


function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<RecipeList />} />
                <Route path="/submit" element={<RecipeForm />} />
                <Route path="/recipes" element={<RecipeList />} />
            </Routes>
        </Router>
    );
}

export default App;
