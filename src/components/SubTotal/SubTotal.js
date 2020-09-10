import React from "react";
import CurrencyFormat from "react-currency-format";

import "./SubTotal.css";
import { useStateValue } from "../../context/provider";
import { getBasketTotalPrice } from "../../context/reducer";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        value={getBasketTotalPrice(basket)}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} item): <strong>{value}</strong>
            </p>
          </>
        )}
        displayType="text"
        prefix="$"
        thousandSeparator={true}
        decimalScale={2}
      />

      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
