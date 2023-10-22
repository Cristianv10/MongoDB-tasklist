const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const userSchema = new Schema({name: {type: String, required: true}, age: {type: Number, required: true}});

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;
