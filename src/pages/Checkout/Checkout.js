import React from "react";

import "./Checkout.css";
import { SubTotal, CheckoutProduct } from "../../components";
import { useStateValue } from "../../context/provider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <h3>Hello, {user?.email ?? "Guest"}</h3>
        <h2 className="checkout__leftTitle">Your shopping Basket</h2>
        <div>
          {basket.map((item, index) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
              key={index}
            />
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
