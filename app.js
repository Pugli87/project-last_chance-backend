require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const { apiSpecification } = require("./utils");
const swaggerUI = require("swagger-ui-express");

const router = require("./routes");

const { notFound, errorHandler } = require("./middleware");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(
  express.urlencoded({
    extended: false,
  })
);

// Document swagger
app.use("/swagger", swaggerUI.serve, swaggerUI.setup(apiSpecification));

app.use("/api", router());

// Middleware to verify the token and secure the necessary routes

app.use(notFound);

app.use(errorHandler);

module.exports = app;
