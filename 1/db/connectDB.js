const mongoose = require('mongoose');

//! Without async method
// const connectDB = (DATABASE_URI)=>{
//     return mongoose.connect(DATABASE_URI).then(()=>{
//         console.log("Connected Successfully...");
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }

//! With async method
const connectDB = async (DATABASE_URL)=>{
    try{
        //* Creating objects for the authentication to secure and reuseability of code
        const DB_Options = {
            user:'king',
            pass:'123456',
            dbName:'schooldb',
            authSource:'schooldb'
        }
        
        await mongoose.connect(DATABASE_URL, DB_Options);
        console.log("Successfully Connected...");
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDB;