const orderService = require("../services/orderService.js");
const customResponse = require("../utils/customResponse.js");
const { StatusCodes } = require("http-status-codes");

const getList = async (req, res, next) => {
  try {
    const orders = await orderService.getList();
    const responseData = customResponse("okay", { orders }, false);
    res.status(StatusCodes.OK).json(responseData);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await orderService.getById(id);
    const responseData = customResponse("okay", { order }, false);
    res.status(StatusCodes.OK).json(responseData);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = req.body;
    const updatedOrder = await orderService.update(id, order);
    const responseData = customResponse("okay", { order: updatedOrder }, false);

    res.status(StatusCodes.OK).json(responseData);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const order = req.body;
    const newOrder = await orderService.create(order);

    const responseData = customResponse("okay", { order: newOrder }, false);

    res.status(StatusCodes.OK).json(responseData);
  } catch (error) {
    next(error);
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await orderService.deleteOrder(id);
    const responseData = customResponse(
      "Deleted order successfully",
      { order },
      false
    );
    res.status(StatusCodes.OK).json(responseData);
  } catch (error) {
    next(error);
  }
};

const orderController = {
  getList,
  getById,
  update,
  create,
  deleteOrder,
};

module.exports = orderController;
