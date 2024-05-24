import React, { useEffect, useRef } from 'react';
import TopMenu from '../topmenu/topmenu';
import Slide from './Slide';
import './MainPage.css';
import SaleuSlide from './SaleSlide';
import MennuSlide from './menuSlide';
function MainPage() {

    return (
        <div>
            <TopMenu />
            <Slide/>
            <div className='main-box'>
                <div className='main-box-text'>인기 식자재</div>
            <SaleuSlide/>
            </div>
            <div className='main-box'>
                <div className='main-box-r1text'>인기 레시피</div>
                <div className='main-box-r2text'>푸드팔레트에서 많은 분들이 찾아본 인기 레시피를 소개합니다.</div>
            <MennuSlide/>
            </div>
        </div>
    );
}

export default MainPage;