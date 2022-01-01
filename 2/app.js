const express = require('express');
const connectDB = require('./DB/connectDB');
const createDoc = require('./Models/Office.js');
const createMultiDoc = require('./Models/Office.js');
const app = express();

const PORT = process.env.PORT || 4000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017';

//! Connecting the Database
connectDB(DATABASE_URL);

//! Create Documents
// createDoc();
createDoc('Umesh', 43, 2376.34, ['cooking', 'talking'], true, [{ value: "I love cooking" }]);
createMultiDoc();

//! Models addition
// Model.find()

//! Rendering the text
app.get('/', (req, res) => {
    res.send("<h2>Hello Gorgeous People</h2>");
});

app.listen(PORT, () => {
    console.log(`Server is live on http://localhost:${PORT}`);
});