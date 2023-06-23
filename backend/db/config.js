const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/e-commerce")
  .then(() => {
    console.log("DB Connected Sucessfully!");
  })
  .catch((error) => {
    console.log("Error occured while Db connection", error);
  });

module.exports = mongoose;
