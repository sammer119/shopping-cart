function CartItem({ product, setCart, cart, setTotal }) {
  function removeFromCart(arrID) {
    setTotal((prevState) => {
      return (prevState -=
        product.quantity * (product.price - product.discount));
    });
    setCart((prevState) => {
      return prevState.filter((x) => x.id !== arrID);
    });
  }

  function incrementUp(arrID) {
    setCart((prevState) => {
      return prevState.map((x) =>
        x.id === arrID ? { ...x, quantity: x.quantity++ } : x
      );
    });
    setTotal((prevState) => {
      return (prevState += product.price - product.discount);
    });
  }

  function incrementDown(arrID) {
    if (product.quantity === 1) {
      return;
    }
    setCart((prevState) => {
      return prevState.map((x) =>
        x.id === arrID ? { ...x, quantity: x.quantity-- } : x
      );
    });
    setTotal((prevState) => {
      return (prevState -= product.price - product.discount);
    });
  }

  return (
    <>
      <div className="flex py-4">
        <div className="basis-1/3">
          <img
            src={product.images[0] + `?id=${product.id}`}
            alt={product.name}
          />
        </div>
        <div className="basis-2/3 flex flex-col justify-between">
          <h3 className="px-2 font-semibold">{product.name}</h3>
          <p className="px-2 py-0 font-semibold">
            £{product.price - product.discount}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex w-20 px-2 pt-2">
              <button
                className={`border px-2 bg-gray-200 hover:bg-gray-300 ${
                  product.quantity === 1
                    ? "bg-gray-50 hover:bg-gray-50 cursor-default"
                    : ""
                }`}
                onClick={() => incrementDown(product.id)}
              >
                -
              </button>
              <p className="border-t border-b px-2">{product.quantity}</p>
              <button
                className="border px-2 bg-gray-200 hover:bg-gray-300"
                onClick={() => incrementUp(product.id)}
              >
                +
              </button>
            </div>
            <button
              className="text-gray-500 mr-6 text-sm pt-2"
              onClick={() => removeFromCart(product.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      {product.id !== cart[cart.length - 1].id && (
        <div className="w-11/12 border-b border-gray-200 self-center"></div>
      )}
    </>
  );
}

export default CartItem;
