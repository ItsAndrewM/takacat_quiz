const { getProductsCategories } = require("../utils/getProductsCategories");

const handleGetProductsCategories = async (req, res) => {
  try {
    const categories = await getProductsCategories();
    if (categories) {
      res.status(200).json({
        status: 200,
        message: "product categories retrieved successfully",
        data: categories,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "something went wrong, product categories were not retrieved",
        error: categories,
      });
    }
  } catch (error) {
    return `ERROR: ${error}`;
  }
};

module.exports = { handleGetProductsCategories };
