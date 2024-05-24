import React, { useState } from 'react';
import TopMenu from '../topmenu/topmenu';
import './saleitem.css';

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
          <label htmlFor="fileUpload" className="customFileUpload">
            이미지 선택하기
          </label>
          <input type='file' id="fileUpload" onChange={handleImageUpload} multiple style={{display: 'none'}} /> 
        </div>
        <div className='sale-text'>
          <div className='sale-title'>
            <div>상품 이름</div>
            <input className="sale-title-t"type="text" onChange={e => setTitle(e.target.value)} />
          </div>
          <div className='sale-stitle'>
            <div>상품의 설명을 적어주세요</div>
            <textarea className="sale-stitle-t"type="text" onChange={e => setDescription(e.target.value)} />
          </div>
          <div className='sale-price'>
            <div>가격을 적어주세요</div>
            <input type="text" onChange={e => setPrice(e.target.value)} />
          </div>
          <button className='sale-button' onClick={handleSave}>상품 등록하기</button>
        </div>
      </div>
    </div>
  );
};

export default SaleItem;