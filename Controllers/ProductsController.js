const pool = require("../db");
const productQueries = require("../Queries/ProductQueries");

const getProducts = (req, res) => {
  pool.query(productQueries.getProducts, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

module.exports = {
  getProducts,
};
