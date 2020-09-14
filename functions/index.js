const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQt7mDPGnFPZHLuGICoJDzNlmQigWBPqCgrrk8LxyO5641ojQOnLIpGOEm3HFHBy7VfnirPuVjRP2LzCAyDZ0Mr00gLEcfxDQ"
);

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const { total } = req.query;

  console.log("Recieved", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });

  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

// Listen command
exports.api = functions.https.onRequest(app);
