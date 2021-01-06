import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { useStateValue } from './StateProvider';

// material-ui
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
  const [{ cartList }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Nini</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout" className="header__optionShopCartLink">
          <div className="header__optionShopCart">
            <ShoppingCartIcon />
            <div className="header__optionLineTwo header__optionShopCartCount">{cartList?.length}</div>
          </div>
        </Link>
      </div >
    </div>
  )
}

export default Header
