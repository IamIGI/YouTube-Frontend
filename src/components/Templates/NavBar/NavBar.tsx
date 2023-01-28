import './NavBar.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsYoutube } from 'react-icons/bs';

import Logo from '../../Atoms/Logo/Logo';
import SearchBar from '../../Atoms/SearchBar/SearchBar';
import RightTopMenu from '../../Atoms/RightTopMenu/RightTopMenu';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__section">
                <div className="navbar__section__hamburgerMenu">
                    <RxHamburgerMenu className="redHover" />
                </div>
                <Logo />
            </div>
            <div className="navbar__section">
                <SearchBar />
            </div>
            <div className="navbar__section">
                <RightTopMenu />
            </div>
        </div>
    );
};

export default NavBar;
