import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../Stateprovider";
import { getBasketTotlal } from "../../reducer";


function Subtotal() {
  const [{basket}, dispatch] =  useStateValue();
    return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
        Subtotal ({basket.length}) : <strong>{ value }</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order Contains gift{" "}
            </small>
          </>
        )}
        decimalScale={2}
        value={ getBasketTotlal(basket) }
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button> Proceed to checkout </button>
    </div>
  );
}

export default Subtotal;
