import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { Header } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route path="/checkout">
            <h1>This is Checkout Page</h1>
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
