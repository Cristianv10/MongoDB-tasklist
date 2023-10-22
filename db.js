const env = require("dotenv");
const mongoose = require('mongoose');

env.config();

const connectDB = async function() {
  const db = await mongoose.connect(process.env.MONGO_URI);
  return db;
};

module.exports = connectDB;
