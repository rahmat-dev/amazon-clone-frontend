import React from "react";
import { StarRounded } from "@material-ui/icons";

import "./Product.css";

function Product({ title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
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
      </div>
      <img src={image} alt="" />

      <button>Add to basket</button>
    </div>
  );
}

export default Product;
