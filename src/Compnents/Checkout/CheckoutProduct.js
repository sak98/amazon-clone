import React from "react";
import { useStateValue } from "../../Stateprovider";
import "./CheckoutProduct.css";
function CheckoutProduct({ id, image, title, price, rating }) {
  
    const [{basket}, dispatch] =  useStateValue();

    const removeFomBasket = () => {
    //remove from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className='checkoutProduct'>
      <img className='checkoutproduct__image' src={image} alt='hello' />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'> {title} </p>
        <p className='checkoutProduct__price'>
          <small> $ </small>
          <strong> {price} </strong>
        </p>
        <div className='checkoutProduct_rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p> ⭐ </p>
            ))}
        </div>
        <button onClick={removeFomBasket}> Remove from cart </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
