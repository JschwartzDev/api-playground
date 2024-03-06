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

const createProduct = (req, res) => {
  const product = {
    price: String(req.query.price),
    rating: String(req.query.rating),
    url: String(req.query.url),
  };

  if (product.price !== "" && product.rating !== "" && product.url !== "") {
    pool.query(
      productQueries.createProduct,
      [product.url, product.price, product.rating],
      (error, result) => {
        if (error) throw error;
        res.status(201).json({ message: "worked" });
      }
    );
  } else {
    res.json({ message: "not enough data provided" });
  }
};

const editProduct = (req, res) => {
  const product = {
    id: req.query.id,
    price: String(req.query.price),
    rating: String(req.query.rating),
    url: String(req.query.url),
  };

  if (product.id) {
    pool.query(productQueries.getProductById, [product.id], (error, result) => {
      if (result.rowCount > 0) {
        if (product.price === "") {
          product.price = result.rows[0].price;
        }
        if (product.rating === "") {
          product.rating = result.rows[0].rating;
        }
        if (product.url === "") {
          product.url = result.rows[0].url;
        }
        pool.query(
          productQueries.editProduct,
          [product.url, product.price, product.rating, product.id],
          (err, data) => {
            if (error) throw error;
            res.status(200).json({ message: "worked" });
          }
        );
      }
    });
  } else {
    res.json({ message: "didnt work" });
  }
};

const deleteProduct = (req, res) => {
  const id = req.query.id;
  pool.query(productQueries.getProductById, [id], (error, result) => {
    if (result.rowCount > 0) {
      pool.query(productQueries.deleteProduct, [id], (err, data) => {
        if (error) throw error;
        res.status(200);
      });
    }
  });
};

module.exports = {
  getProducts,
  getProductById,
  editProduct,
  createProduct,
  deleteProduct,
};
