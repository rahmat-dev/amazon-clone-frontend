import React from "react";
import { Search, ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";

import "./Header.css";
import { useStateValue } from "../../context/provider";
import { firebaseAuth } from "../../utils";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      firebaseAuth.signOut();
    }
  };

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
        <Link to={user ? "/" : "/login"}>
          <div className="header__navItem" onClick={handleAuthentication}>
            <span className="header__navItemLineOne">
              Hello, {user?.email ?? "Guest"}
            </span>
            <span className="header__navItemLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
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
