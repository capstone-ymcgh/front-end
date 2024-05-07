import React from 'react';
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
                    <div>식단관리 및 도매소매값을 알려줍니다.</div>
                    <div>사용해보시겠습니까?</div>
                    <div>
                        <button to="/login" className="sign">가입하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;

