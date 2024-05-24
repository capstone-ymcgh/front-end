import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

export default function FindPW() {
  const [email, setEmail] = useState('');
  const [name, setNamem] = useState('');
  const navigate = useNavigate();

// 이메일 입력 필드의 값을 처리하는 함수입니다.
// 사용자가 이메일 입력 필드에 값을 입력하면 이 함수가 호출됩니다.
// 이 함수는 이벤트 객체 'e'를 매개변수로 받습니다.
// 'e.target.value'는 이벤트가 발생한 HTML 요소, 즉 이메일 입력 필드의 현재 값을 반환합니다.
// 이 값을 setEmail 함수를 사용하여 이메일 상태를 업데이트합니다.
const handleEmailChange = (e) => {
  setEmail(e.target.value);
};

  const handleSubmit = (e) => {
    e.preventDefault();
    // 이메일 보내기 로직을 여기에 추가하세요.
    // 이메일이 성공적으로 보내진 후, 사용자를 로그인 페이지로 리다이렉트합니다.
    navigate('/login');
  };

  return (
    <div className='page-c'>
      <div className="page-L">
        <img src="logo.png" alt="logo" className="logo-a" />
        <div className="titleWrap">
          비밀번호를 찾기 위해 이메일을 입력해주세요
        </div>
        <div className="contentWrap">
          <div className="inputTitle">이메일</div>
          <div className="inputWrap">
            <input
              type="email"
              placeholder="이메일을 입력해주세요"
              className="input_text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div style={{ marginTop: "10px" }}className="inputTitle">
            이름을 입력해주세요
          </div>
          <div className="inputWrap">
            <input
              type="text"
              placeholder="이름"
              className="input_text"
              value={name}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
              <button type="submit" className="SbottomButton">비밀번호 찾기</button>
        </div>
      </div>
    </div>
  );
}