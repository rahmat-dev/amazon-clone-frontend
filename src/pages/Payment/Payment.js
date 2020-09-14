import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";

import "./Payment.css";
import { useStateValue } from "../../context/provider";
import { getBasketTotalPrice } from "../../context/reducer";
import { CheckoutProduct } from "../../components";
import { axios } from "../../utils";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // redirect to home if cart item is empty
    if (!basket.length) {
      history.replace("/");
    }

    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "POST",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotalPrice(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    // do all the fancy stripe stuff
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({ type: "EMPTY_BASKET" });

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    console.log(e);
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(e.empty || e.error || !e.complete);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item, index) => (
              <CheckoutProduct {...item} key={index} />
            ))}
          </div>
        </div>

        {/* Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  value={getBasketTotalPrice(basket)}
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  displayType="text"
                  prefix="$"
                  thousandSeparator={true}
                  decimalScale={2}
                />
                <button disabled={disabled || processing || succeeded}>
                  <span>{processing ? "Processing" : "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
