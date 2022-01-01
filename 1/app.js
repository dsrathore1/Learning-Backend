const express = require("express");
const connectDB = require("./db/connectDB");
const app = express();


const PORT = process.env.PORT || 4040;
const DATABASE_URI = process.env.DATABASE_URI || "mongodb://localhost:27017";

//! This is how we access the DB credentials from different page 
connectDB(DATABASE_URI);

//* This is also way to use mongoose and connect to the server but this is not a good practice to secure your auth credentials.
// mongoose.connect('mongodb://localhost:27017/schooldb').then(() => {
//     console.log("Connected Successfully");
// });


app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>");
});


app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});