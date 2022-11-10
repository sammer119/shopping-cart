import { RiShoppingCart2Line } from "react-icons/ri";
import CartItem from "./CartItem";

function ShoppingCart({ cart, setCart, total, setTotal, addToCart }) {
  //   function calcTotal() {
  //     let sum = cart.reduce((accumulator, currVal) => {
  //       return (
  //         accumulator + (currVal.price - currVal.discount) * currVal.quantity
  //       );
  //     }, 0);
  //     setTotal(sum);
  //   }

  //   useEffect(() => {
  //     calcTotal();
  //   }, [cart]);

  return (
    <div className="basis-1/3 m-2 bg-white border-solid border rounded-lg flex flex-col items-center min-h-64 max-h-[520px] sticky top-[100px] overflow-scroll overflow-x-hidden shadow-sm">
      <div className="bg-primary text-white w-full flex items-center justify-center rounded-t-lg sticky top-0">
        <h2 className="text-xl py-2">Your Cart</h2>
      </div>
      {/*  Text icon for when there are no items in cart */}
      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center m-auto pb-16">
          <div className="border-[2px] rounded-full p-4 border-primary my-6 shadow-md">
            <RiShoppingCart2Line size={60} color="#2B4141" />
          </div>
          <p className="text-lg text-gray-500">
            There are no items in your cart!
          </p>
        </div>
      )}
      {/* Cart Items */}
      {cart.length > 0 && (
        <div className="flex flex-col ">
          {cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              setCart={setCart}
              cart={cart}
              setTotal={setTotal}
              addToCart={addToCart}
            />
          ))}
          <div className="flex justify-between items-center w-full p-4 bottom-0 sticky z-20 overflow-auto bg-white border-t-2 border-gray-200 self-center">
            <h3 className="font-semibold ml-4 text-sm">TOTAL</h3>
            <p className="mr-4 font-bold text-lg">
              £{(Math.round(total * 100) / 100).toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
