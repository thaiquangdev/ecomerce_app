const express = require("express");
require("dotenv").config();
const cookieParse = require("cookie-parser");
const cors = require("cors");
const dbConnect = require("./configs/dbConnect");
const initRoutes = require("./routes");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(cookieParse());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnect();
initRoutes(app);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
