import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import LoginPage from './Page/LoginPage';
import FristPage from './Page/FristPage';
import MainPage from './Page/MainPage';
import React, { useState } from 'react'; // useState import
import NewPage from './Page/NewPage'; // NewPage import

function App() {
  const [pages, setPages] = useState([]);
  return (
    <Router>
        <Route path="/" exact>
            <MainPage pages={pages} />
        </Route>
        <Route path="/new">
            <NewPage setPages={setPages} />
        </Route>
    </Router>
  );
}

export default App;