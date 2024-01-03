const express = require("express");
const orderRouter = express.Router();

const orderController = require("../controllers/orderController.js");

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: API operations related to orders
 */

/**
 * @swagger
 * /api/v1/order:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: A list of orders
 *         content:
 *           application/json:
 *             example: [{ id: 1, name: 'First order',quantity :2 }, { id: 2, name: 'Second Order',quantity:4 }]
 */

orderRouter.get("/", orderController.getList);

/**
 * @swagger
 * /api/v1/order/{id}:
 *   get:
 *     summary: Get a order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the order
 *         schema:
 *           type: integer
 *
 *     responses:
 *       200:
 *         description: A single order
 *         content:
 *           application/json:
 *             example: { id: 1, name: 'First Item',quantity:20 }
 *       404:
 *         description: Order not found
 */
orderRouter.get("/:id", orderController.getById);

/**
 * @swagger
 * /api/v1/order:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example: { "name": "First Item", "quantity": 20 }
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *              example: {"id":undefined, "name": "First Item", "quantity": 20 }
 *       400:
 *         description: Bad request, invalid input
 *       500:
 *         description: Internal Server Error
 */
orderRouter.post("/", orderController.create);

/**
 * @swagger
 * /api/v1/order/{id}:
 *   put:
 *     summary: Update a order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the order to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example: { "name": "First Item","quantity":20 }
 *     responses:
 *       200:
 *         description: Order updated successfully
 *         content:
 *           application/json:
 *             example: { id: 1, name: 'First Item', quantity:20 }
 *       404:
 *         description: Order not found
 *       500:
 *         description: Internal Server Error
 */
orderRouter.put("/:id", orderController.update);

/**
 * @swagger
 * /api/v1/order/{id}:
 *   delete:
 *     summary: Delete a order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the order to delete
 *     responses:
 *       204:
 *         description: Order deleted successfully
 *       404:
 *         description: Order not found
 *       500:
 *         description: Internal Server Error
 */
orderRouter.delete("/:id", orderController.deleteOrder);

module.exports = orderRouter;
