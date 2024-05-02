import React from 'react';
import TopMenu from './topmenu';
import './FristPage.css';

const Navigation = () => {
    return (
        <div>
            <nav className="topMenu">
            <a className='logo'>로고</a>
                <div>
                <a to="/login" className="login">로그인</a>
                </div>
            </nav>  
            <div className="main">
                <div className="container">
                    <h1>시작 화면</h1>
                    <p>메인 화면 입니다.</p>
                    <a to="/login" className="sign">가입하기</a>
                </div>
            </div>
        </div>
    );
};

export default Navigation;

