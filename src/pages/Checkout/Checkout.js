import React from "react";

import "./Checkout.css";
import { SubTotal } from "../../components";
import { useStateValue } from "../../context/provider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <h2 className="checkout__leftTitle">Your shopping Basket</h2>
        <div>
          <ul>
            {basket.map((item) => (
              <li>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
