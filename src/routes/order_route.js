const express = require("express");
const orderRouter = express.Router();

const orderController = require("../controllers/orderController.js");

orderRouter.get("/", orderController.getList);
orderRouter.get("/:id", orderController.getById);
orderRouter.post("/", orderController.create);
orderRouter.put("/:id", orderController.update);
orderRouter.delete("/:id", orderController.deleteOrder);

module.exports = orderRouter;
