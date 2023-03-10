const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URI);

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("Error connecting to database");
});

connection.on("connected", () => {
  console.log("Mongo DB Connection Successful");
});

module.exports = connection;
