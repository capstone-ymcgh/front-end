import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './recipeblog.css';
import TopMenu from '../topmenu/topmenu';

const RecipeBlog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20; // 5 items * 4 rows
    
    // const navigate = useNavigate();

    // const handleAddRecipe = () => {
    // navigate('/recipePage');
    // };  

    // const recipes = [
    
    // ];
    
    const recipes = Array(500).fill().map((_, i) => ({
        title: `Recipe ${i + 1}`,
        description: '설명',
        imageUrl: '/header_img.png'
    }));

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedRecipes = recipes.slice(startIndex, startIndex + itemsPerPage);

    const totalPages = Math.ceil(recipes.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const [startPage, setStartPage] = useState(1);

const handleNextSet = () => {
    if (startPage + 10 <= totalPages) {
        setStartPage(startPage + 10);
    }
};

const handlePreviousSet = () => {
    if (startPage - 10 >= 1) {
        setStartPage(startPage - 10);
    }
};
    return (
        <div>
            <TopMenu />
            <div>
                <div className='recipe-text'>레시피 공유 게시판</div>
            </div>
            <div className='recipe-search'>
                <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search..." />
                <button className='button-Catagory'/*onClick={handleSearch} */>Search</button> 
            </div>
            <div className='recipe-Category'>
                <button className='button-Catagory'>Category 1</button>
                <button className='button-Catagory'>Category 2</button>
                <button className='button-Catagory'>Category 3</button>
            </div>
            
            <div className="grid-container">
                <div className="recipe-grid">
                    {selectedRecipes.map((recipe, index) => (
                        <div key={index} className="recipe-item">
                            <img className='recipe-img' src={recipe.imageUrl} alt={recipe.title} />
                            <h3>{recipe.title}</h3>
                            <p>{recipe.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
            <button className="recipe-add" /*onClick={handleAddRecipe}*/>나만의 레시피 추가하기</button>
            </div>
            <div className='recipe-list'>
            {Array.from({length: Math.min(10, totalPages - startPage + 1)}, (_, i) => startPage + i).map(pageNumber => (
        <button className='pageNumber'key={pageNumber} onClick={() => handlePageChange(pageNumber)}>{pageNumber}</button>
    ))}
    {totalPages > 10 && (
        <>
            <button className='left'onClick={handlePreviousSet}>&lt;</button>
            <button className='right'onClick={handleNextSet}>&gt;</button>
        </>
    )}
            </div>
        </div>
    );
};

export default RecipeBlog;
