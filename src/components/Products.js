import React, { useContext } from "react";

// Contexts
import { ProductContext } from "../contexts/ProductContext";
// Components
import Product from "./Product";

const Products = () => {
  //   const product = useContext(ProductContext);
  const { products, addItem } = useContext(ProductContext);
  // console.log("Products		:", products, "\nAdd Item		:", addItem);

  return (
    <div className="products-container">
      {products.map(product => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};

export default Products;
