import React from "react";
import { Search, ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";

import "./Header.css";
import { useStateValue } from "../../context/provider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <Search className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div className="header__navItem">
            <span className="header__navItemLineOne">Hello,</span>
            <span className="header__navItemLineTwo">Sign In</span>
          </div>
        </Link>

        <div className="header__navItem">
          <span className="header__navItemLineOne">Returns</span>
          <span className="header__navItemLineTwo">& Orders</span>
        </div>

        <div className="header__navItem">
          <span className="header__navItemLineOne">Your</span>
          <span className="header__navItemLineTwo">Prime</span>
        </div>

        <div className="header__navItem header__basket">
          <Link to="/checkout">
            <ShoppingBasket style={{ verticalAlign: "middle" }} />
            <span className="header__navItemLineTwo header__basketCount">
              {basket?.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
