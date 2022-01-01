const mongoose = require("mongoose");

const connecDB = () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Connected to DB : ${con.connection.host}`);
    } catch (error) {
        console.log(error)
    }
}

module.exports = connecDB;