const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongoUrl)
    .then(()=>console.log("Connected to database"))
    .catch(err => console.log("Failed to connect to database", err))
  } catch (err) {
    handleError(err);
  }
};

module.exports = connectDB;