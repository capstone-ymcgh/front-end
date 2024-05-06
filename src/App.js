import './App.css';
import { Router, Route } from "react-router-dom";
import LoginPage from './Page/LoginPage';
import FristPage from './Page/FristPage';
import MainPage from './Page/MainPage/MainPage';
import React, { useState } from 'react'; // useState import
import NewPage from './Page/NewPage'; // NewPage import

function App() {
  const [pages, setPages] = useState([]);
  return (
    <div className='app'>
    <topMenu />
    <Routers>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/" element={< />} /> */}
    </Routers>
    </div>
  );
}

export default App;