import { SlCamrecorder } from 'react-icons/sl';
import { BsBell } from 'react-icons/bs';
import './RightTopMenu.css';

const RightTopMenu = () => {
    return (
        <div className="navbar__rightTopMenu">
            <SlCamrecorder className="redHover" />
            <div className="navbar__rightTopMenu__Bell redHover">
                <BsBell />
                <div className="navbar__rightTopMenu__Bell__Notification">9+</div>
            </div>
            <div className="navbar__rightTopMenu__AccountIcon">A</div>
        </div>
    );
};

export default RightTopMenu;
