const mongoose = require('mongoose');


const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: 'officeDB'
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("Your DB is connected successfully");
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;