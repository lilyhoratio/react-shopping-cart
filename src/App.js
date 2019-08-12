import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Contexts
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);
  //   console.log("CART		:", cart);

  const addItem = item => {
    setCart([...cart, item]);
  };

  const removeItem = itemId => {
    // for all items currently in cart, isolate the ones that weren't removed/clicked. set state of cart to those remaining items

    console.log(cart);
    const filteredItems = cart.filter(cartItem => {
      //   console.log(typeof cartItem.id);
      //   console.log(typeof item.id);
      return cartItem.id !== itemId;
    });
    // console.log("delete id", filteredItems);
    setCart(filteredItems);
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={{ cart, setCart, removeItem }}>
        <div className="App">
          <Navigation cart={cart} />

          {/* Routes */}
          <Route
            exact
            path="/"
            //   render={() => <Products products={products} addItem={addItem} />}
            component={Products}
          />

          {/* <Route path="/cart" render={() => <ShoppingCart cart={cart} />} /> */}
          <Route path="/cart" component={ShoppingCart} />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
