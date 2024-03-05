const express = require("express");
const router = express.Router();
const productsController = require("../../Controllers/ProductsController");

router.get("/", productsController.getProducts);
router.get("/:id", productsController.getProductById);
router.delete("/", productsController.deleteProduct);

module.exports = router;
