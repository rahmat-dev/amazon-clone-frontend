import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Login.css";
import { firebaseAuth } from "../../utils";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);

    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => setError(error.message))
      .finally(() => setTimeout(() => setLoading(false), 400));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading((currentState) => !currentState);
    console.log("register", loading);

    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => setError(error.message))
      .finally(() => setTimeout(() => setLoading(false), 400));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        {error && (
          <div className="login__error">
            <span>{error}</span>
          </div>
        )}

        <form method="POST">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signInButton"
            onClick={handleSignIn}
            disabled={loading}
          >
            Sign-in
          </button>

          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
        </form>
        <button
          className="login__registerButton"
          onClick={handleRegister}
          disabled={loading}
        >
          Create your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
