import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

// material-ui
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// global state manage
import { useStateValue } from './StateProvider';

// firebase
import { auth } from './config/firebase';

function Header() {
  const [{ cartList, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if(user) {
      auth.signOut();
    }
  }

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
        <Link
          to={!user && '/login'}
          className="header__login"
          onClick={handleAuth}>
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">
              { user ? 'Sign Out' : 'Sign In' }
            </span>
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
