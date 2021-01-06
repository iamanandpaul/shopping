import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { auth } from "../../Firebase/Firebase";

function Header({ currentUser }) {
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
      </div>
    </div>
  );
}

export default Header;
