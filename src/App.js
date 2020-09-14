import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./App.css";
import { Header } from "./components";
import { Home, Checkout, Login, Payment, Orders } from "./pages";
import { firebaseAuth } from "./utils";
import { useStateValue } from "./context/provider";

const stripePromise = loadStripe(
  "pk_test_51HQt7mDPGnFPZHLuPSchiKLOa9f7wh7CxqFIlV176bFjL2FgZEKcavZyZC7NoC6gPR3BkJ7cAnTjDaFtYSXjXfBu00AIxz2AbB"
);

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
