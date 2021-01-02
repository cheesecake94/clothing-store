import { Link } from "react-router-dom"
import { ReactComponent as AppLogo } from '../../assets/app-icon.svg';
import './header.component.scss';

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <AppLogo className="logo" />
      </Link>
      <div className="menu-items">
        <Link className="menu-item" to="/shop">SHOP</Link>
        <Link className="menu-item" to="/contact">CONTACT</Link>
      </div>
    </div>
  );
}

export default Header