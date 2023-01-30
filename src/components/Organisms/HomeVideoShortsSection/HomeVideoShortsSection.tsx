import React from 'react';
import './HomeVideoShortsSection.css';
import { shortsData } from './HomeVideoShortsSectionData';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { SiYoutubemusic } from 'react-icons/si';

const HomeVideoShortsSection = () => {
    return (
        <div className="homeVideoShorts">
            <div className="homeVideoShorts__title">
                <SiYoutubemusic />
                <h3>Shorts</h3>
            </div>

            <div className="homeVideoShorts_inside">
                {shortsData.map((short) => (
                    <div className="homeVideoShorts__tile pointer">
                        <img src={short.image} alt={short.title} />
                        <div className="homeVideoShorts__tile__title">
                            <h4>{short.title}</h4>
                            <div className="homeVideoShorts__tile__title__menu">
                                <BiDotsVerticalRounded />
                            </div>
                        </div>

                        <p>{short.views}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeVideoShortsSection;
