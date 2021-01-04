import React from 'react';
import './CheckoutProduct.scss';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, price, rating, image}) {
  const [{cartList}, dispatch] = useStateValue();

  const removeFromCart = () => {
    // dispatch the remove item(s) from the data layer
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id
    });
  };
  
  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct__img"
        src={image}
        alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct__rating">
          {Array(rating).fill().map((_, i) => (
            <p className="checkoutProduct__ratingIcon">⭐</p>
          ))}
        </p>
        <button
          className="checkoutProduct__btn"
          onClick={removeFromCart}>
          Remove from Shopping Cart
        </button>
      </div>
    </div>
  )
}

export default CheckoutProduct
