const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const router = require("./routes/route.js");

const app = express();
const PORT = 3000;

app.use(bodyParser.json(), router);
app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
