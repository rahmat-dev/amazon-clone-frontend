import React from "react";
import CurrencyFormat from "react-currency-format";
import { StarRounded } from "@material-ui/icons";

import "./CheckoutProduct.css";
import { useStateValue } from "../../context/provider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      id,
      type: "REMOVE_FROM_BASKET",
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <CurrencyFormat
          value={price}
          renderText={(value) => (
            <>
              <p className="checkoutProduct__price">
                <strong>{value}</strong>
              </p>
            </>
          )}
          displayType="text"
          prefix="$"
          thousandSeparator={true}
          decimalScale={2}
        />
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarRounded
                key={i}
                style={{ color: "#f0c14b" }}
                fontSize="small"
              />
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
