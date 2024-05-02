import React from 'react';
import './topmenu.css';
const TopMenu = () => {
    return (
        <div className="topMenu">
            <a className='logo'>로고</a>
            <div>
                <a to="/login" className="login">내정보</a>
            </div>
        </div>
    );
};

export default TopMenu;