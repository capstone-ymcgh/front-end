import React, { useState } from 'react';
import TopMenu from '../topmenu/topmenu';
import './recipePage.css';
import RecipeText from './recipeText';

function RecipePage() {
    const [recipeTexts, setRecipeTexts] = useState([{ key: 0, text: '', image: null }]);
    const [activeIndex, setActiveIndex] = useState(0);

    const addRecipeText = () => {
        setRecipeTexts([...recipeTexts, { key: recipeTexts.length, text: '', image: null }]);
        setActiveIndex(recipeTexts.length);
    };
    const afterRecipeText = () => {
        if (activeIndex < recipeTexts.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    }
    const beforeRecipeText = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    const handleTextChange = (index, text) => {
        const newRecipeTexts = [...recipeTexts];
        newRecipeTexts[index].text = text;
        setRecipeTexts(newRecipeTexts);
    };

    const handleImageChange = (index, image) => {
        const newRecipeTexts = [...recipeTexts];
        newRecipeTexts[index].image = image;
        setRecipeTexts(newRecipeTexts);
    };

    return (
        <div>
            <TopMenu />
            <button className="left-button"onClick={beforeRecipeText}>
            <img src='/free-icon-font-angle-left-3916934.png' alt="button image" />
            </button>   
            {activeIndex >= recipeTexts.length - 1 ?  (
            <button className="add-button" onClick={addRecipeText}>
            <img src='/free-icon-add-6998878.png' alt="button image" />
            </button>
            ) : (
            <button className="right-button"onClick={afterRecipeText}>
            <img src='/free-icon-font-angle-right-3916924.png' alt="button image" />
            </button>
            )}
                    
            <RecipeText
                key={recipeTexts[activeIndex].key}
                index={activeIndex}
                text={recipeTexts[activeIndex].text}
                image={recipeTexts[activeIndex].image}
                onTextChange={handleTextChange}
                onImageChange={handleImageChange}
            />
            <button className="save" onClick={() => console.log(recipeTexts)}>Save</button>
        </div>
    );
}

export default RecipePage;