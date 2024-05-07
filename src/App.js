import './App.css';
import LoginPage from './Page/LoginPage/LoginPage';
import FristPage from './Page/FristPage/FristPage';
import MainPage from './Page/MainPage/MainPage';
import RecipePage from './Page/recipePage/recipePage';
import React, { useState } from 'react'; // useState import
import NewPage from './Page/NewPage'; // NewPage import
import RecipeBlog from './Page/recipeblog/recipeblog'; // RecipeBlog import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/first" element={<FristPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/new" element={<NewPage />} />
        <Route path="/recipePage" element={<RecipePage />} />
        <Route path="/recipeBlog" element={<RecipeBlog />} /> {/* Add this line */}
      </Routes>
    </Router>
  );
}

export default App;