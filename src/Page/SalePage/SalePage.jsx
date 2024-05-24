import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopMenu from '../topmenu/topmenu';
import './SalePage.css';
import SaleItem from './saleItem';

const categories = [
    { name: '신선식품', subcategories: ['과일', '채소', '육류', '해산물', '계란 및 유제품'] },
    { name: '건조 및 저장식품', subcategories: ['쌀 및 곡물', '파스타 및 국수', '콩 및 렌틸', '통조림 및 병조림 식품', '말린 과일 및 견과류'] },
    { name: '냉동식품', subcategories: ['냉동 과일 및 채소', '냉동 육류', '냉동 해산물', '냉동 간편식'] },
    { name: '음료', subcategories: ['주스 및 청량음료', '커피 및 차', '알코올 음료', '생수 및 탄산수'] },
    { name: '조미료 및 소스', subcategories: ['소금 및 설탕', '허브 및 향신료', '소스 및 드레싱', '식초 및 오일'] },
    { name: '베이킹 및 요리재료', subcategories: ['밀가루 및 베이킹 믹스', '베이킹 재료', '요리용 초콜릿 및 코코아', '식품 첨가물 및 색소'] },
    { name: '간식 및 과자', subcategories: ['과자류', '초콜릿 및 사탕', '견과류 및 시리얼바', '건강 간식'] },
    { name: '특별식품', subcategories: ['유기농 식품', '글루텐 프리 식품', '비건 및 채식주의 식품', '저지방 및 다이어트 식품'] },
    { name: '비식품 상품', subcategories: ['주방용품', '위생용품', '포장재'] }
];

export default function SalePage() {
    // 상태 변수 선언
const [searchTerm, setSearchTerm] = useState('');
const [selectedCategory, setSelectedCategory] = useState(null);
const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태

// 상수 선언
const itemsPerPage = 25; // 페이지 당 아이템 수

// 판매 데이터 생성
const sales = Array(26).fill().map((_, i) => ({
    title: `Sale ${i + 1}`,
    price: '가격',
    imageUrl: '/header_img.png'
}));

// 페이지 이동 함수
const navigate = useNavigate();

// useEffect를 사용하여 판매 데이터 가져오기
useEffect(() => {
    // 여기에서 판매 데이터를 가져오는 코드를 추가합니다.
    // 예를 들어, API 호출을 사용할 수 있습니다.
    // 가져온 데이터를 setSales를 사용하여 상태를 설정합니다.
}, []);

// 이벤트 핸들러 함수
const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
};

const handleCategoryChange = (categoryName) => {
    const category = categories.find(c => c.name === categoryName);
    setSelectedCategory(category);
};


const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); // 페이지 변경 핸들러
};

const handleNextPage = () => {
    if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1); // 다음 페이지로 이동
    }
};

const handlePreviousPage = () => {
    if (currentPage > 1) {
        setCurrentPage(currentPage - 1); // 이전 페이지로 이동
    }
};

const handleSubcategoryChange = (subcategoryName) => {
    // 여기에 하위 카테고리 변경 로직을 추가합니다.
};

// 페이지 관련 계산
const startIndex = (currentPage - 1) * itemsPerPage; // 현재 페이지의 시작 인덱스
const endIndex = startIndex + itemsPerPage; // 현재 페이지의 끝 인덱스
const totalPages = Math.ceil(sales.length / itemsPerPage); // 총 페이지 수

// 현재 페이지의 아이템만 보여주기
const selectedItems = sales.slice(startIndex, startIndex + itemsPerPage); // 현재 페이지의 레시피 선택

const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1; // 시작 페이지 계산
const endPage = Math.min(startPage + 9, totalPages); // 끝 페이지 계산

// 페이지 번호 배열 생성
const pageNumbers = [];
for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
}
const [sortType, setSortType] = useState('recommendations'); // 정렬 타입 상태 ('recommendations' 또는 'latest')

const handleSortChange = (newSortType) => {
    setSortType(newSortType); // 정렬 타입 변경 핸들러
};

// 정렬된 아이템
const sortedItems = [...selectedItems].sort((a, b) => {
    if (sortType === 'recommendations') {
        return b.recommendations - a.recommendations; // 추천 수가 많은 순서로 정렬
    } else if (sortType === 'latest') {
        return new Date(b.date) - new Date(a.date); // 최신 날짜 순서로 정렬
    } else {
        return 0;
    }
});
    return (
        <div>
            <TopMenu />
            <div className='Sale-search-box'>
                <div className='Sale-search'>
                    <input 
                        className="search-text"
                        type="text" 
                        value={searchTerm} 
                        onChange={handleSearchChange} 
                        placeholder="상품을 검색해주세요" 
                    />
                    <button className='button-Catagory'>
                    </button>
                </div>
                <div>검색결과입니다.</div>
                <div className='Catagor-menu'>
                    <ul>
                        {categories.map((category, index) => (
                            <li key={index} onMouseEnter={() => handleCategoryChange(category.name)}>
                                {category.name}
                                {selectedCategory && selectedCategory.name === category.name && (
                                    <div className="subcategory-list">
                                        {selectedCategory.subcategories.map((subcategory, index) => (
                                            <div key={index} onClick={() => handleSubcategoryChange(subcategory)}>
                                                {subcategory}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='saleitem-box'>
            <div className="sale-grid-container">
                        <div className='click-button'>
                            <button className="button-d"onClick={() => handleSortChange('recommendations')}>추천순</button>
                            <button className="button-d"onClick={() => handleSortChange('latest')}>최신순</button>
                        </div>
                        <div className="sale-grid">
                            {sortedItems.map((saleitem, index) => (
                                <div key={index} className="sale-item">
                                    <img className='sale-img-box' src={saleitem.imageUrl} alt={saleitem.title} />
                                    <h3>{saleitem.title}</h3>
                                    <p>{saleitem.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                <div className='salePage-bottom'> 
                    <button className="recipePage-bottom-button" onClick={handlePreviousPage}>&lt;</button>
                    {pageNumbers.map((page) => (
                        <button className="recipePage-bottom-button" key={page} onClick={() => handlePageChange(page)}>{page}</button>
                    ))}
                    <button className="recipePage-bottom-button" onClick={handleNextPage}>&gt;</button>
                </div>

            </div>
        </div>
    );
}