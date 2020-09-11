import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { Header } from "./components";
import { Home, Checkout, Login } from "./pages";
import { firebaseAuth } from "./utils";
import { useStateValue } from "./context/provider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((authUser) => {
      console.log("User: ", authUser);

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
  }, []);

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
