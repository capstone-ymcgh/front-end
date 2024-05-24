import React, { useState } from 'react';

import './checkout.css';

const CheckoutPage = () => {


  return (
    <div>
        <div className='header-img'>
            <img className='header-img-logo'src="/logo.png"/>
        </div>
        <div className='box'>
            <div className='order'>
                <div className='order-t'>주문/결제</div>
            </div>
            <div className='buyInformation'>
                <div className='buyInformation-t'>구매자정보</div>
                <div className='buyInformation-b'>
                    <div className='buyInformation-f'>이름</div><div className='buyInformation-l'> 구매자 이름</div>
                </div>
                <div className='buyInformation-b'>
                    <div className='buyInformation-f'>이메일</div><div className='buyInformation-l'>구매자 이메일</div>
                </div>
                <div className='buyInformation-b'>
                    <div className='buyInformation-f'>휴대폰번호</div><div className='buyInformation-l'>구매자 휴대폰번호</div>
                </div>  
                              
            </div>
            <div className='buyInformation1'>
                <div className='buyInformation-t'>받는 사람정보</div>
                <div className='buyInformation-b'>
                    <div className='buyInformation-f'>이름</div><div className='buyInformation-l'> 구매자 이름</div>
                </div>
                <div className='buyInformation-b'>
                    <div className='buyInformation-f'>배송지 주소</div><input type='text' className='buyInformation-l' placeholder='배송지주소를 입력하세요'/>
                </div>
                <div className='buyInformation-b'>
                    <div className='buyInformation-f'>휴대폰번호</div><div className='buyInformation-l'>구매자 휴대폰번호</div>
                </div> 
                <div className='buyInformation-b'>
                    <div className='buyInformation-f'>배송 요청사항</div><input type='text' className='buyInformation-l' placeholder='배송 요청사항을 적어주세요'/>
                </div>     
                
                <div className='buyInformation2'>
                <div className='buyInformation-t'>구매내용</div>
                <div className='buyInformation-b'>
                    <div className='buyInformation-f'>구매정보</div><div className='buyInformation-l'> 구매정보</div>
                </div> 
                <div className='buyInformation-b'>
                    <div className='buyInformation-f'>결제정보</div><div className='buyInformation-l'> 결제 금액</div>
                </div>            
            </div>
            
            </div>
            <button className='buyInformation-bt'>결제하기</button>       
        </div>
    </div>
  );
};

export default CheckoutPage;
