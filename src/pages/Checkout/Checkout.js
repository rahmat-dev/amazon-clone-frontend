import React, { useEffect } from "react";

import "./Checkout.css";
import { SubTotal, CheckoutProduct } from "../../components";
import { useStateValue } from "../../context/provider";

function Checkout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <h3>Hello, {user?.email ?? "Guest"}</h3>
        <h2 className="checkout__leftTitle">Your shopping Basket</h2>
        <div>
          {basket.map((item, index) => (
            <CheckoutProduct {...item} key={index} />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
