const mongoose = require('mongoose');

const connectDB = (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: 'schooldb'
        }
        mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("Your backend is now connected to the server...");
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;