const pool = require("../config/db.js");

const getList = async (req, res, next) => {
  try {
    const connection = await pool.getConnection();

    const [rows, fields] = await connection.execute("SELECT * FROM orders");

    connection.release();

    return rows;
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getById = async (id) => {
  try {
    const [result] = await pool.execute("SELECT * FROM orders WHERE id = ?", [
      id,
    ]);
    return result;
  } catch (error) {
    throw error;
  }
};

const update = async (orderId, updatedOrderData) => {
  try {
    const { name, quantity } = updatedOrderData;
    const [result] = await pool.execute(
      "UPDATE orders SET name=?,quantity=? WHERE id = ?",
      [name, quantity, orderId]
    );
    return result;
  } catch (error) {
    throw error;
  }
};

const create = async (order) => {
  try {
    const { name, quantity } = order;

    const [result] = await pool.execute(
      "INSERT INTO orders (name, quantity) VALUES (?,?)",
      [name, quantity]
    );

    const newOrder = {
      id: result.insertId,
      name: name,
      quantity: quantity,
    };

    return newOrder;
  } catch (error) {
    throw error;
  }
};

const deleteOrder = async (id) => {
  try {
    const [result] = await pool.execute("DELETE FROM orders WHERE id = ?", [
      id,
    ]);
    return result;
  } catch (error) {
    throw error;
  }
};

const orderRepository = {
  getList,
  getById,
  update,
  create,
  deleteOrder,
};

module.exports = orderRepository;
