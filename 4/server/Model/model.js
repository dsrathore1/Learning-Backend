const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String },
    status: { type: Boolean }
});

const userDB = mongoose.model("user", userSchema);

module.exports = userDB