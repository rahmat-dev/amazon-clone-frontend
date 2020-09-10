import React from "react";

import "./SubTotal.css";
import { useStateValue } from "../../context/provider";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket?.length} item): $<strong>0</strong>
      </p>

      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
