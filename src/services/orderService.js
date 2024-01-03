const orderRepository = require("../repositories/orderRepository");

const getList = async () => {
  try {
    const orders = await orderRepository.getList();
    return orders;
  } catch (error) {
    throw new Error("get all order error");
  }
};

const getById = async (orderId) => {
  try {
    const order = await orderRepository.getById(orderId);
    return order;
  } catch (error) {
    throw new Error("get order details error");
  }
};

const update = async (orderId, updatedOrderData) => {
  try {
    const newOrder = await orderRepository.update(orderId, updatedOrderData);
    return newOrder;
  } catch (error) {
    throw new Error("update order error");
  }
};

const create = async (order) => {
  try {
    const newOrder = await orderRepository.create(order);
    return newOrder;
  } catch (error) {
    throw new Error("order creation error");
  }
};

const deleteOrder = async (id) => {
  try {
    const contact = await orderRepository.deleteOrder(id);
    return contact;
  } catch (error) {
    throw new Error("order deletion error");
  }
};

const orderService = {
  getList,
  getById,
  update,
  create,
  deleteOrder,
};

module.exports = orderService;
