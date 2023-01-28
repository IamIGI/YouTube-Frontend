import { BsSearch, BsKeyboard } from 'react-icons/bs';
import { BiMicrophone } from 'react-icons/bi';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="navbar__searchBar">
            <div className="relative">
                <input placeholder="Szukaj" />
                <div className="navbar__searchBar__search redHover">
                    <BsSearch />
                </div>
                <div className="navbar__searchBar__keyboardIcon redHover">
                    <BsKeyboard />
                </div>
            </div>
            <div className="navbar__searchBar__microphone redHover">
                <BiMicrophone />
            </div>
        </div>
    );
};

export default SearchBar;
