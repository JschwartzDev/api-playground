const pool = require("../db");
const productQueries = require("../Queries/ProductQueries");

const getProducts = (req, res) => {
  const pageNum = Number(req.query.pageNum);
  const perPage = Number(req.query.perPage);
  pool.query(productQueries.getProducts, (error, result) => {
    if (error) throw error;
    const start = pageNum * perPage;
    const end = start + perPage;
    const currPageProducts = result.rows.slice(start, end);
    res.status(200).json({ items: currPageProducts, total: result.rowCount });
  });
};

const getProductById = (req, res) => {
  const id = req.params.id;
  pool.query(productQueries.getProductById, [id], (error, result) => {
    if (error) throw error;
    res.status(200).send(result.rows);
  });
};

const deleteProduct = (req, res) => {
  const id = req.query.id;
  const perPage = req.query.perPage;
  const pageNum = req.query.pageNum;
  pool.query(productQueries.getProductById, [id], (error, result) => {
    if (result.rowCount > 0) {
      pool.query(productQueries.deleteProduct, [id], (err, data) => {
        if (error) throw error;
      });
    }
  });
};

module.exports = {
  getProducts,
  getProductById,
  deleteProduct,
};
