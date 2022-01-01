const express = require("express");
const connectDB = require('./DB/connectDB.js');
const createDoc = require("./Model/Student.js");
const getAllDoc = require("./Model/Student.js")

//! Creating the PORT
const PORT = process.env.PORT || 3000;
//! Connect mongodb
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

//! Connect to DB
connectDB(DATABASE_URL);

//! Adding a DATA to the DB
// createDoc();

//! Get all doc
getAllDoc();

//! Creating express object
const app = express();

//! Creating routes
app.get("/", (req, res) => {
    res.send('<h2>Hello world</h2>');
});

app.listen(PORT, () => {
    console.log(`Your server is live on http://localhost:${PORT}`);
});