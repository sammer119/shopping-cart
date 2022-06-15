function ProductCard({
  id,
  name,
  price,
  images,
  discount,
  description,
  addToCart,
}) {
  return (
    <div className="shadow-lg hover:shadow-xl">
      <img alt={name} src={images[0] + `?id=${id}`} className="rounded-t-lg" />
      <div className="p-4 bg-white rounded-b-lg">
        <h2 className="font-semibold">{name}</h2>
        <div className="flex justify-between items-center py-1">
          <p className="font-bold">
            £
            {discount === 0
              ? price.toLocaleString()
              : `${(price - discount).toLocaleString()}`}
          </p>
          {discount !== 0 && (
            <p className="line-through text-sm text-gray-500">
              £{price.toLocaleString()}
            </p>
          )}
        </div>
        <p className="line-clamp-3 text-sm my-2">{description}</p>
        <button
          onClick={() =>
            addToCart({
              id,
              name,
              price,
              images,
              discount,
              description,
              quantity: 1,
            })
          }
          className="bg-primary text-white text-md w-full py-[7px] mt-2 rounded-full font-semibold hover:shadow-lg hover:bg-gray-700 cursor-pointer hover:-translate-y-[2px] ease-in-out duration-150 active:-translate-y-[0px] active:bg-gray-800 tracking-wide"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
