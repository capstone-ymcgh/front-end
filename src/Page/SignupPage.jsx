import React ,{ useEffect, useState } from "react";

export default function Signup(){

    const [pw, setPw] = useState('');
    const [rpw, setrPw] = useState('');

    const [rpwValid, setrPwValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);
    const [selectValue, setSelectValue] = useState('1')
    useEffect(() => {
        if(rpwValid && pwValid) {
          setNotAllow(false);
          return;
        }
        setNotAllow(true);
      }, [rpwValid, pwValid]);


    const handlePw = (e) => {
        setPw(e.target.value);
        const regex = /^(?=.*[!@#$%^&*.])/;
        if (e.target.value.length >= 8 && regex.test(e.target.value)) {
          setPwValid(true);
        } else {
          setPwValid(false);
        }
      };
      const handlerPw = (e) => {
        setrPw(e.target.value);
        const regex = /^(?=.*[!@#$%^&*.])/;
        if (e.target.value.length >= 8 && regex.test(e.target.value)) {
          setrPwValid(true);
        } else {
          setrPwValid(false);
        }
      };

      const handleSelectChange = (e) => { // 추가된 핸들러
        setSelectValue(e.target.value);
    }
    return (
        <div className="page">
            <div className="titleWrap">
                회원가입
            </div>
            <div className="contentWrap">
                <div >
                <div className="inputTitle">
                            닉네임을 입력해주세요
                    </div>
                    <div className="inputWrap">
                    <input
                        type="text"
                        placeholder="닉네임"
                        className="input"
                    />
                    </div>
                    <div style={{ marginTop: "10px" }} className="inputTitle">
                            이메일을 입력해주세요
                    </div>
                    <div className="inputWrap">
                    <input
                        type="text"
                        placeholder="이메일"
                        className="input"
                    />
                    </div>
                    <div style={{ marginTop: "10px" }} className="inputTitle">
                            비밀번호를 입력해주세요
                    </div>
                    <div className="inputWrap">
                            
                    <input
                        type="password"
                        placeholder="비밀번호"
                        className="input"
                        value={pw}
                        onChange={handlePw}
                    />
                    </div>
                    <div className="errorMessageWrap">
                        {!pwValid && pw.length > 0 && (
                        <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                        )}
                    </div>

                    <div style={{ marginTop: "10px" }} className="inputTitle">
                            비밀번호 확인
                    </div>
                    <div className="inputWrap">
                    <input
                        type="password"
                        placeholder="비밀번호 확인"
                        className="input"
                        value={rpw}
                        onChange={handlerPw}
                    />
                    </div>
                    <div className="errorMessageWrap">
                        {!(pwValid === rpwValid) && rpw.length > 0 &&(
                            <div>비밀번호가 다릅니다..</div>
                        )}
                    </div>
                    <div >
                    <div className="inputTitle">
                            사용자 유형을 선택해주세요
                        </div>
                    <select value={selectValue} onChange={handleSelectChange} className="selectWrap">
                        <option value="1">선택해주세요</option>
                        <option value="2">일반</option>
                        <option value="3">도매상</option>
                        </select>
                    </div>

                </div>
                <button   className="SbottomButton">
                    가입하기
                </button>
                </div>

        </div>
    );

}



