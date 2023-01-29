import React from 'react';
import SideBarMenu from '../SideBarMenu/SideBarMenu';
import SideBarSubscriptionList from '../SideBarSubscriptionList/SideBarSubscriptionList';
import './SideBar.css';
import { sideBarContent, sideBarDiscover } from '../SideBarMenu/sideBarData';

const SideBar = () => {
    return (
        <div className="sideBar">
            <div className="sideBar__tile">
                <SideBarMenu data={sideBarContent} />
            </div>
            <div className="sideBar__tile">
                <SideBarSubscriptionList />
            </div>
            <div className="sideBar__tile">
                <SideBarMenu data={sideBarDiscover} title="Odkrywaj" />
            </div>
        </div>
    );
};

export default SideBar;
