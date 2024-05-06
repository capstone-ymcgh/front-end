import React, { useState } from 'react';
import TopMenu from '../topmenu/topmenu';

function MainPage() {
    const [posts, setPosts] = useState([]);

    const addPost = () => {
        if (posts.length < 10) {
            const newPost = `게시글 ${posts.length + 1}`;
            setPosts([...posts, newPost]);
        }
    };

    return (
        <div>
            <TopMenu />
            <div className="main">
                <div className="container">
                    <div className='containerTop'>  
                        <div className='text'>나만의 식단목록</div>
                        <a className="NewPage"onClick={addPost}>+ 새로 만들기</a>
                    </div>
                    <div>    
                    {posts.map((post, index) => (
                            <a className="menu" key={index}>{post}</a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;