import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { auth } from "../../Firebase/Firebase";
import { connect } from "react-redux";
import CartComponent from "../CartComponent/CartComponent";
import CartDropdown from "../CartDropdown/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../Redux/User/UserSelector";
import { selectCartHidden } from "../../Redux/Cart/CartSelector";

function Header({ currentUser, hidden }) {
  return (
    <div className="header">
      <Link className="header__logo" to="/">
        <Logo />
      </Link>
      <div className="header__right">
        <Link className="header__option" to="/shop">
          SHOP
        </Link>
        <Link className="header__option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="header__option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="header__option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartComponent />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
