import React from 'react';
import './VideoCategoryTags.css';
import { videoCategories } from './VideoCategoryTagsData';

const VideoCategoryTags = () => {
    return (
        <div className="homeVideoSection__VideoCategoryTags">
            {videoCategories.map((tag) => (
                <div className="homeVideoSection__VideoCategoryTags_tag">
                    <button>{tag}</button>
                </div>
            ))}
        </div>
    );
};

export default VideoCategoryTags;
