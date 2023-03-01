const mongoose = require("mongoose");
const URL = "mongodb://127.0.0.1:27017/polyglot_db";
try {
  mongoose.connect(URL);
  console.log("connection to database was successful");
} catch (error) {
  console.log(error);
}
module.exports = mongoose;
