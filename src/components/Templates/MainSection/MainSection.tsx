import React from 'react';
import HomeVideoSection from '../../Organisms/HomeVideoSection/HomeVideoSection';
import SideBar from '../../Organisms/SideBar/SideBar';
import './MainSection.css';

const MainSection = () => {
    return (
        <div className="mainSection">
            <SideBar />
            <HomeVideoSection />
        </div>
    );
};

export default MainSection;
