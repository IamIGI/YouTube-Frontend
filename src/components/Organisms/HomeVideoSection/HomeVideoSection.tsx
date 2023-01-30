import React from 'react';
import VideoCategoryTags from '../../Molecules/VideoCategoryTags/VideoCategoryTags';
import HomeVideoShortsSection from '../HomeVideoShortsSection/HomeVideoShortsSection';
import HomeVideosTiles from '../HomeVideosTiles/HomeVideosTiles';
import './HomeVideoSection.css'

const HomeVideoSection = () => {
    return (
        <div className="homeVideoSection">
            <VideoCategoryTags />
            <HomeVideosTiles />
            <div className='line' />
             <HomeVideoShortsSection />
        </div>
    );
};

export default HomeVideoSection;
