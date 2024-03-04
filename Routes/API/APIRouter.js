const express = require("express");
const router = express.Router();
const productRouter = require("./Products");

router.use("/products", productRouter);

module.exports = router;
