import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { ReactComponent as AppLogo } from '../../assets/app-icon.svg';
import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import { createStructuredSelector } from 'reselect';
import './header.component.scss';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <AppLogo className="logo" />
      </Link>
      <div className="menu-items">
        <Link className="menu-item" to="/shop">SHOP</Link>
        <Link className="menu-item" to="/contact">CONTACT</Link>
        {
          currentUser ?
            <div className="menu-item" onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link className="menu-item" to="/login">SIGN IN</Link>
        }
        <CartIcon />
      </div>
      { hidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);