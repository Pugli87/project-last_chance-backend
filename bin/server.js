const mongoose = require("mongoose");
const app = require("../app");
const { variables: V } = require("../utils");

// const { DB_HOST, PORT } = process.env;

mongoose.set("strictQuery", true);

mongoose
  // .connect(DB_HOST)
  .connect(V.DB_HOST)
  .then(() =>
    // app.listen(PORT, () => {
    app.listen(V.PORT, () => {
      console.log("Database connection successful");
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
