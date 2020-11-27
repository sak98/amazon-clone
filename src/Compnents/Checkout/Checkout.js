import React from "react";
import { useStateValue } from "../../Stateprovider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{basket,user}, dispatch] =  useStateValue();
  return (
    
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          alt='checkout ad '
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/pc_banner_2.jpg'
        />
        <div>
  <h3> Hello,{user?.email}</h3>
          <h2 className='checkout__title'>Your Shopping basket </h2>

           {basket.map(item=> (
              <CheckoutProduct 
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
              /> 
           ) )}


        </div>
      </div>
      <div className='checkout__right'>
          {/* Sub total content  */}
          <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
