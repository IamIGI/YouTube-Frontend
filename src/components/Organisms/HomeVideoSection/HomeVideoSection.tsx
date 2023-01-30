import React from 'react';
import VideoCategoryTags from '../../Molecules/VideoCategoryTags/VideoCategoryTags';
import HomeVideosTiles from '../HomeVideosTiles/HomeVideosTiles';
import './HomeVideoSection.css';

const HomeVideoSection = () => {
    return (
        <div className="homeVideoSection">
            <VideoCategoryTags />
            <HomeVideosTiles />
        </div>
    );
};

export default HomeVideoSection;
