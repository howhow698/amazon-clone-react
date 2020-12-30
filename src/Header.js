import "./Header.css";

import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      ></img>
      <div className="header_search">
        <input type="text" className="searchInput"></input>
        <SearchIcon className="searchIcon"></SearchIcon>
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">hello motor</span>
          <span className="header_optionLinetwo">Sign in</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">hello motor</span>
          <span className="header_optionLinetwo">hello motor</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">hello motor</span>
          <span className="header_optionLinetwo">hello motor</span>
        </div>
        <div className="header_optionBasket">
          <ShoppingBasket></ShoppingBasket>
          <span className="header_optionLinetwo header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
