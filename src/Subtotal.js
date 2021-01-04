import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.scss';
import { useStateValue } from './StateProvider';
import { getCartListTotal } from './reducer';

function Subtotal() {
  const [{cartList}, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cartList.length} items):
              <strong> {value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />This order contain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartListTotal(cartList)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="subtotal__btn">Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal;
