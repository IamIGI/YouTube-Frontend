import { ReactNode } from 'react';
import './SideBarMenu.css';

interface SideBarMenuProps {
    data: { icon?: JSX.Element; title?: string; image?: string; name?: string; notifications?: boolean }[];
    title?: string;
}

const SideBarMenu = ({ data, title = '' }: SideBarMenuProps) => {
    return (
        <div className="sideBarMenu">
            {title && <h4>{title}</h4>}
            {data.map((tile) => (
                <div className="sideBarMenu__tile grayHover">
                    <div className="sideBarMenu__tile__icon">{tile.icon}</div>
                    <div className="sideBarMenu__tile__title">{tile.title}</div>
                </div>
            ))}
        </div>
    );
};

export default SideBarMenu;
