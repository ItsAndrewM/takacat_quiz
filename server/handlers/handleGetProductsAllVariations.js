const { getProductsVariations } = require("../utils/getProductsVariations");
const { getProducts } = require("../utils/getProducts");

const handleGetProductsAllVariations = async (req, res) => {
  try {
    const products = await getProducts();
    const productVarationArr = [];
    if (products) {
      for (const product of products) {
        if (product.type === "variable") {
          const productVar = await getProductsVariations(product.id);

          if (productVar) {
            const productObj = {
              id: product.id,
              variations: productVar,
            };
            productVarationArr.push(productObj);
          }
        }
      }
      if (productVarationArr) {
        res.status(200).json({
          status: 200,
          message: "product variations retrieved successfully",
          data: productVarationArr,
        });
      } else {
        res.status(404).json({
          status: 404,
          message:
            "something went wrong, product variations were not retrieved",
          error: productVarationArr,
        });
      }
    } else {
      res.status(404).json({
        status: 404,
        message: "something went wrong, products were not retrieved",
        error: products,
      });
      throw new Error();
    }
  } catch (error) {
    return `ERROR: ${error}`;
  }
};

module.exports = { handleGetProductsAllVariations };
