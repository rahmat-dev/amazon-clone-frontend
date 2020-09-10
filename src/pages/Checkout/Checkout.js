import React from "react";

import "./Checkout.css";
import { SubTotal } from "../../components";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <h2 className="checkout__leftTitle">Your shopping Basket</h2>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
