import './Product.css';

import React from 'react';

function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>The lean start up</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product_rating">
                    <p></p>
                </div>
            </div>
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-2020-hero-space-wifi-select?wid%3D1716%26hei%3D2000%26fmt%3Djpeg%26qlt%3D95%26op_usm%3D0.5,0.5%26.v%3D1598915064000&imgrefurl=https://www.apple.com/tw/shop/buy-ipad/ipad-10-2/128gb-%25E5%25A4%25AA%25E7%25A9%25BA%25E7%2581%25B0%25E8%2589%25B2-wifi&tbnid=H6WJgImYebdnCM&vet=1&docid=5AxTOMYp29SryM&w=1716&h=2000&source=sh/x/im"></img>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
