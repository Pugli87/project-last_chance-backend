const mongoose = require("mongoose");
const app = require("../app");
const { variables: V } = require("../utils");

mongoose.set("strictQuery", true);

mongoose
  .connect(V.DB_HOST)
  .then(() =>
    app.listen(V.PORT, () => {
      console.log("Database connection successful");
      console.log(`Server is running on port ${V.PORT}`);
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
