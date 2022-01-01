const express = require("express");
const dotenv = require("dotenv")
const morgan = require('morgan')
const bodyparser = require('body-parser');
const Router = require("./server/Routes/routes")
const connectDB = require("./server/DB/connectDB")

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 4000;

// log requests
app.use(morgan('tiny'));

// Connecting to the DB
connectDB();

//parse request to the bodyparser
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// load assets
// app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
// app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
// app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use(express.static("assets"));


// Load Routers
app.use(Router);

app.listen(PORT, () => {
    console.log(`Your server is on http://localhost:${PORT}`);
});