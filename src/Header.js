import React from 'react';
import './Header.scss';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
  return (
    <div className="header">
      <a href="https://www.amazon.com/amazonprime/137-0254394-3237200?_encoding=UTF8&%2AVersion%2A=1&%2Aentries%2A=0">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </a>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Nini</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionShopCart">
          <ShoppingCartIcon />
          <div class="header__optionLineTwo header__optionShopCartCount">0</div>
        </div>
      </div >
    </div>
  )
}

export default Header
