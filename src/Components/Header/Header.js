import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/crown.svg";

function Header() {
  return (
    <div className="header">
      <Link className="header__logo" to="/">
        <Logo />
      </Link>
      <div className="header__right">
        <Link className="header__shop" to="/shop">
          SHOP
        </Link>
        <Link className="header__contact" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
}

export default Header;
