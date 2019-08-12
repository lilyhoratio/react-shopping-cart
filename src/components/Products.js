import React, { useContext } from "react";

// Components
import Product from "./Product";
import { ProductContext } from "../contexts/ProductContext";

const Products = () => {
  //   const product = useContext(ProductContext);
  const { products, addItem } = useContext(ProductContext);
  console.log("Products		:", products, "\nAdd Item		:", addItem);

  return (
    <div className="products-container">
      {products.map(product => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};

export default Products;
