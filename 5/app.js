const express = require("express");
const mainRouter = require("./Routes/routes");
const connectDB = require("./DB/connectDB");
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });

const app = express();

//! Giving port
const PORT = process.env.PORT || 4040;

//! Setting view engine
app.set("view engine", "ejs");

//! Middlewares
app.use(express.static("Public"));
app.use(mainRouter);

//! Connecting to the DB
connectDB();

//! Listening to the port
app.listen(PORT, () => {
    console.log(`Your site is live on http://localhost:${PORT}`);
});