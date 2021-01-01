import React from 'react';
import './Checkout.scss';

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner3.png"
          alt=""
          />
          <h2 className="checkout__title">Your Shopping List</h2>
          {/* ShoppingItem */}
          {/* ShoppingItem */}
          {/* ShoppingItem */}
          {/* ShoppingItem */}
      </div>
      <div className="checkout__right">
        <div>The subtotal will show here</div>
      </div>
    </div>
  )
}

export default Checkout;
