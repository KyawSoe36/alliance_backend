const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Order List API",
      version: "1.0.0",
    },
    components: {},
  },
  // Path to the API routes
  apis: ["./src/routes/*.js"],
};

module.exports = swaggerOptions;
