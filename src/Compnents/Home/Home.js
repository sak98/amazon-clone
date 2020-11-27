import React from "react";
import "./Home.css";
import ProductComponent from "./ProductComponent";
function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          alt='home_banner'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Chhalaang/nobranding/1500x600_Hero-Tall_ft._CB415559866_.jpg'
        />

        <div className='home__row'>
          {/* Product */}
          <ProductComponent
          id="12343482"
            title='The Lean Startup'
            price={29.29}
            image='https://m.media-amazon.com/images/I/81s6DUyQCZL._AC_UY218_.jpg'
            rating={3}
          />
          <ProductComponent 
          id="987689"
          title='Think and grow rich'
          price={19.29}
          image='https://m.media-amazon.com/images/I/71AdHA+qqwL._AC_UY218_.jpg'
          rating={4} />
          {/* Product */}
        </div>
        <div className='home__row'>
          {/* Product */}
          <ProductComponent 
          
          id="123245342"
          title='LG 22 inch Gaming Monitor - 1ms, 75Hz, Full HD,  AMD Freesync, TN Panel Monitor, HDMI & VGA Port - 22MK400H (Black)'
          price={600}
          image='https://m.media-amazon.com/images/I/71m05O2uNdL._AC_UY218_.jpg'
          rating={4}
           />
          <ProductComponent 
          id="10987"
          title='LG 22 inch Gaming Monitor - 1ms, 75Hz, Full HD,  AMD Freesync, TN Panel Monitor, HDMI & VGA Port - 22MK400H (Black)'
          price={600}
          image='https://m.media-amazon.com/images/I/81aJZQk3+PL._AC_UY218_.jpg'
          rating={4}
           />
          <ProductComponent 
          id="1987654"
          title='LG 22 inch Gaming Monitor - 1ms, 75Hz, Full HD,  AMD Freesync, TN Panel Monitor, HDMI & VGA Port - 22MK400H (Black)'
          price={600}
          image='https://images-eu.ssl-images-amazon.com/images/I/41DLHU3-F2L._AC_US160_.jpg'
          rating={4}
           />
          {/* Product */}
          {/* Product */}
        </div>
        <div className='home__row'>
          {/* Product */}
          <ProductComponent 
          id="1678765"
          title='LG 22 inch Gaming Monitor - 1ms, 75Hz, Full HD,  AMD Freesync, TN Panel Monitor, HDMI & VGA Port - 22MK400H (Black)'
          price={600}
          image='https://m.media-amazon.com/images/I/61DWru8Y9NL._AC_UY218_.jpg'
          rating={4}
           />
        </div>
      </div>
    </div>
  );
}

export default Home;
