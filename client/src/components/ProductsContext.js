import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState();
  const [productCats, setProductCats] = useState();

  useEffect(() => {
    const productDataFetch = async () => {
      const promiseData = await Promise.all([
        fetch(`${process.env.REACT_APP_URL}/api/products`),
        fetch(`${process.env.REACT_APP_URL}/api/products/categories`),
      ]);
      const results = await promiseData.map((data) => {
        return data.json();
      });
      const [productResult, productCatResult] = await Promise.all(results);
      localStorage.setItem("products", JSON.stringify(productResult.data));
      localStorage.setItem(
        "productCats",
        JSON.stringify(productCatResult.data)
      );
      setProducts(productResult.data);
      setProductCats(productCatResult.data);
    };
    if (
      !localStorage.getItem("products") &&
      !localStorage.getItem("productCats")
    ) {
      productDataFetch();
    } else {
      setProducts(JSON.parse(localStorage.getItem("products")));
      setProductCats(JSON.parse(localStorage.getItem("productCats")));
      productDataFetch();
    }
  }, []);

  return (
    <ProductsContext.Provider value={{ products, productCats }}>
      {children}
    </ProductsContext.Provider>
  );
};
