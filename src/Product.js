import React from 'react';
import './Product.scss';

function Product({ title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p class="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (
            <p className="product__ratingIcon">⭐</p>
          ))}
        </div>
      </div>
      <img
        className="product__img"
        src={image} 
        alt="" />
      <button className="product__btn">Add to Shopping Cart</button>
    </div>
  )
}

export default Product
