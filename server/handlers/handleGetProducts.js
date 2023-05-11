const { getProducts } = require("../utils/getProducts");

require("dotenv").config({
  path: "../.env",
});

const handleGetProducts = async (req, res) => {
  try {
    const result = await getProducts();
    const publishedProducts = await result.filter((product) => {
      if (!product.status.match("publish")) {
        return false;
      }
      return true;
    });

    if (result) {
      res.status(200).json({
        status: 200,
        message: "products retrieved successfully",
        data: publishedProducts,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "something went wrong, products were not retrieved",
        error: publishedProducts,
      });
    }
  } catch (error) {
    return `ERROR: ${error}`;
  }
};

module.exports = { handleGetProducts };
