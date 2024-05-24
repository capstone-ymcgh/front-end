import React, { useState } from 'react';
import TopMenu from '../topmenu/topmenu';
import './consumer.css';

const SaleItem = () => {
  const [mainImage, setMainImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGFuaw8dtKZea8uWr1ruDeMPClcLa1kUbIcoTATmlZIg&s');
  const [uploadedImages, setUploadedImages] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleImageUpload = (event) => {
    const files = event.target.files;
  
    if (files) {
      Array.from(files).forEach((file, index) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const newImage = reader.result;
          setUploadedImages(prevImages => [...prevImages, newImage]);
  
          // 첫 번째 이미지를 메인 이미지로 설정
          if (index === 0) {
            setMainImage(newImage);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleImageClick = (imageUrl) => {
    setMainImage(imageUrl);
  };
  const [isHearted, setIsHearted] = useState(false);

  const handleHeartClick = () => {
    setIsHearted(!isHearted);
  };

  const handleSave = () => {
    // 여기서 이미지, 제목, 설명, 가격을 저장합니다.
    console.log(mainImage, uploadedImages, title, description, price);
  };

  return (
    <div>
      <TopMenu/>
      <div className='sale-box'>
        <div className='sale-img'>
          <img className="sale-img-index"src={mainImage} alt='Sale item' />
          <div className='sm-img'>
          {uploadedImages.map((imageUrl, index) => (
            <img className="sm-img-index"key={index} src={imageUrl} alt='Uploaded item' onClick={() => handleImageClick(imageUrl)} />
          ))}
          </div>
          
        </div>
        <div className='consumer-text'>
            <div className='consumer-title'>
                상품 이름
            </div>
            <div className='consumer-stitle'>
                <div>상품 설명 :</div>
                <div></div>
            </div>
            <div className='consumer-price-box'>
                <div className='consumer-price-box-title'>이름</div>
                <div className='consumer-price-box-button'>
                    <button className='consumer-price-box-button-b'>-</button>
                    <div className='consumer-price-box-button-t'>0</div>
                    <button className='consumer-price-box-button-b'>+</button>        
                    <div className='consumer-price-box-button-price'>원</div>
                </div>
                <div className='price-sum'>
                    <div className='price-sum-text'>주문금액</div>
                    <div className='price-sum-num'>원</div>
                </div>
                
            </div>
            <div className='consumer-buy'>
                    <button className={`heart-button ${isHearted ? 'hearted' : ''}`} onClick={handleHeartClick}>
                    {isHearted ? '♥' : '♡'}
                    </button>
                    <button className='price-sum-button1'>바로구매</button>
                    <button className='price-sum-button2'>장바구니 담기</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SaleItem;