import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";
import ProductSection from "./components/ProductSection";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function addToCart(product) {
    // Add total price of product to total
    setTotal((prevState) => {
      return (prevState += product.price - product.discount);
    });
    // if item already exists in cart, increase quantity
    if (cart.filter((x) => x.id === product.id).length > 0) {
      setCart((prevState) => {
        return prevState.map((x) =>
          x.id === product.id ? { ...x, quantity: x.quantity++ } : x
        );
      });
      // otherwise add item to cart
    } else {
      setCart((prevState) => {
        return [...prevState, product];
      });
    }
  }

  function resetCart() {
    setCart([]);
  }

  return (
    <div>
      <Header />
      <div className="flex m-auto pt-8 max-w-7xl justify-between ">
        {/* left part of screen */}
        <ProductSection
          addToCart={addToCart}
          total={total}
          setTotal={setTotal}
        />
        {/* right part of screen */}
        <ShoppingCart
          cart={cart}
          setCart={setCart}
          total={total}
          setTotal={setTotal}
        />
      </div>
    </div>
  );
}

export default App;
