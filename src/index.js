import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import MainPage from './Page/MainPage';
import CalendarPage from './Page/CalendarPage';
import Board from './Page/Board';
import LoginPage from './Page/LoginPage';
import FristPage from './Page/FristPage';
// import Newpage from './Page/NewPage';
import SignupPage from './Page/SignupPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignupPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
