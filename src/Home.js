import React from 'react';
import './Home.scss';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__img"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
        <div className="home__row">
          <Product
            title="FACT FULNESS"
            price={19.99}
            rating={5}
            image="https://kbimages1-a.akamaihd.net/787950cf-36ca-480c-8b17-f237f87bce30/1200/1200/False/tG1aCXbY1zG4OkF74QbGYQ.jpg"/>
          <Product
            title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
            price={21.99}
            rating={5}
            image="https://s.eslite.dev/Upload/Product/201910/l/637073300298322340.jpg"/>
        </div>
        <div className="home__row">
          <Product
            title="AirPods Pro"
            price={199}
            rating={5}
            image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591634795000"
            />
          <Product
            title="SAMSUNG Galaxy Buds Live"
            price={99}
            rating={5}
            image="https://media.etmall.com.tw/nximg/002724/2724899/2724899-1_xxl.jpg?t=17943588901"/>
          <Product
            title="GoPro Hero 9"
            price={249}
            rating={5}
            image="https://i1.wp.com/www.expandore.sg/wp-content/uploads/2020/09/gopro-hero-9-black.jpg?fit=750%2C750&ssl=1" />
        </div>
        <div className="home__row">
          <Product
            title="BenQ monitor"
            price={599}
            rating={5}
            image="https://www.benq.com/content/dam/b2c/zh-tw/lighting/screen-front-lamp/wit-screenbar/image01/lighting-wit-screenbar-15.jpg" />
        </div>
      </div>
    </div>
  )
}

export default Home
