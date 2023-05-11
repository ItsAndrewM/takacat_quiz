require("dotenv").config({
  path: "./.env",
});

// Setup:
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
  url: "https://stg-takacatinflatables-staging.kinsta.cloud/", // Your store URL
  consumerKey: process.env.WOOCOMMERCE_KEY, // Your consumer key
  consumerSecret: process.env.WOOCOMMERCE_SECRET, // Your consumer secret
  version: "wc/v3", // WooCommerce WP REST API version
});

const getProductsVariations = async (id) => {
  return WooCommerce.get(`products/${id}/variations`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

module.exports = { getProductsVariations };
