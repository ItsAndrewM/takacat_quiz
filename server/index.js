const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { handleGetProducts } = require("./handlers/handleGetProducts");
const {
  handleGetProductsCategories,
} = require("./handlers/handleGetProductsCategories");
const {
  handleGetProductsVariations,
} = require("./handlers/handleGetProductsVariations");

const {
  handleGetProductsAllVariations,
} = require("./handlers/handleGetProductsAllVariations");

const port = 8080;

express()
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST,GET,OPTIONS,PUT,DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })

  .use(express.json())
  .use(helmet())
  .use(morgan("dev"))

  .get("/api/products", handleGetProducts)
  .get("/api/products/categories", handleGetProductsCategories)
  .get("/api/products/variations/:id", handleGetProductsVariations)
  .get("/api/products/variations/all", handleGetProductsAllVariations)

  .listen(port, () => {
    console.log(`Takacat Model Finder Server listening on port ${port}`);
  });
