import React from 'react';
import { dataList } from './SideBarSubscirptionListData';
import './SideBarSubscriptionList.css';

const SideBarSubscriptionList = () => {
    const trimText = (value: string) => {
        value.length > 10;
    };

    return (
        <div className="sideBarSubscriptions">
            <h4>Subskrypcje</h4>
            {dataList.map((tile) => (
                <div className="sideBarSubscriptions__tile grayHover" key={tile.name}>
                    <div className="sideBarSubscriptions__tile__icon">
                        <img src={tile.image} alt={tile.name} />
                    </div>
                    <div className="sideBarSubscriptions__tile__ChannelName">{tile.name}</div>
                    {tile.notifications && <div className="sideBarSubscriptions__notifications" />}
                </div>
            ))}
        </div>
    );
};

export default SideBarSubscriptionList;
