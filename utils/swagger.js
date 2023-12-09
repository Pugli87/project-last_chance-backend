// /utils/swagger.js
const swaggerJSDOC = require("swagger-jsdoc");
const { PORT } = require("./variables");

// Document
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Back",
      version: "1.0.0",
      description:
        "This is a API REST app made with Express. It controls the info about API GoIT.",
    },
    servers: [
      {
        url: `http://127.0.0.1:${PORT}`,
        description: "Local server",
      },
      {
        url: `https://Code.app`,
        description: "Production server",
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "apiKey",
          in: "header",
          name: "Authorization",
        },
      },
    },
  },
  apis: [
    // add routes
    process.cwd() + "/routes/*.js",
    process.cwd() + "/models/*.js",
    process.cwd() + "/controllers/listProducts/*.js",
  ],
};

const apiSpecification = swaggerJSDOC(swaggerOptions);

module.exports = {
  apiSpecification,
};
