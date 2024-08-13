const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const cors = require("cors");
const app = express();
const email = require("./email");

app.use(express.json());
app.use(cors({ origin: "*" }));

const port = process.env.PORT;

const Router = express.Router();

Router.post("/sendmail", email.sendNewsLetter);
Router.post("/sendContactUsMessage", email.sendContactUsMessage);

app.use(Router);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
