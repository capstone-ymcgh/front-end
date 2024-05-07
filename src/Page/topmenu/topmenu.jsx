// import React, {useState} from 'react';
// import './topmenu.css';

// const TopMenu = () => {
//     const [menu, setMenu] = useState("home");
//     return (
//         <div className="topMenu">
//             <a className='logo'>로고</a>
//             <ul className='tpMenu'>
//                 <li onClick={() => setMenu("home")} className={menu==="home"?"active":""}>메인</li>
//                 <li onClick={() => setMenu("Calendar")} className={menu==="Calendar"?"active":""}>식단짜주기</li>
//                 <li onClick={() => setMenu("Blog")} className={menu==="Blog"?"active":""}>레시피게시판</li>
//                 <li onClick={() => setMenu("buy")} className={menu==="buy"?"active":""}>주문하기</li>
//             </ul>               
//             <a to="/login" className="login">내정보</a>
//         </div>
//     );
// };

// export default TopMenu;
import React, { useState } from 'react';
import './topmenu.css';

const TopMenu = () => {
    const [menu, setMenu] = useState("home");
    return (
        <div className="topMenu">
            <div className="leftSection">
                <a className='logo'>로고</a>
            </div>
            <div className="rightSection">
                <ul className='tpMenu'>
                    <li onClick={() => setMenu("home")} className={menu==="home"?"active":""}>메인</li>
                    <li onClick={() => setMenu("Calendar")} className={menu==="Calendar"?"active":""}>식단짜주기</li>
                    <li onClick={() => setMenu("Blog")} className={menu==="Blog"?"active":""}>레시피게시판</li>
                    <li onClick={() => setMenu("buy")} className={menu==="buy"?"active":""}>주문하기</li>
                </ul>
                <a to="/login" className="login">내정보</a>
            </div>
        </div>
    );
};

export default TopMenu;