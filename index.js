require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const orderRouter = require("./src/routes/order_route.js");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Sample Api!");
});

app.use("/api/v1/order", orderRouter);

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
