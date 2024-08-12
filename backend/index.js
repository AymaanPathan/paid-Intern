const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const cors = require("cors");
const app = express();

app.use(cors({ origin: "*" }));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
