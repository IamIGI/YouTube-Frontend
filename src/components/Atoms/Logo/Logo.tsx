import './Logo.css';
import { BsYoutube } from 'react-icons/bs';

const Logo = () => {
    return (
        <div className="navbar__logo">
            <div className="navbar__logo__icon">
                <BsYoutube />
            </div>
            <div className="navbar__logo__text">YouTube</div>
            <div className="navbar__logo__languageMark">PL</div>
        </div>
    );
};

export default Logo;
