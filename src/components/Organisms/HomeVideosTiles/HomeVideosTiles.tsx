import React from 'react';
import './HomeVideosTiles.css';
import { videosData } from './HomeVideoTilesData';

const HomeVideosTiles = () => {
    return (
        <div className="homeVideoSection__homeVideosTiles">
            {videosData.map((video) => (
                <div className="homeVideoSection__homeVideosTiles__Tiles pointer">
                    <div className="homeVideoSection__homeVideosTiles__Tiles__Images">
                        <img src={video.videoImg} alt={video.channelName} />
                        <div className="absoulteHover"> Naciśnij, aby odtwarzać </div>
                    </div>
                    <div className="homeVideoSection__homeVideosTiles__Description">
                        <div className="homeVideoSection__homeVideosTiles__ChannelImage">
                            <img src={video.authorImg} alt={video.channelName} />{' '}
                        </div>
                        <div className="homeVideoSection__homeVideosTiles__Description__Content">
                            <h5>{video.title}</h5>
                            <p>{video.channelName}</p>
                            <p>
                                {video.views} - {video.date}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HomeVideosTiles;
