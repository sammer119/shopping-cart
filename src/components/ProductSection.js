import { useState } from "react";
import productList from "../productList";
import ProductCard from "./ProductCard";
import { MdHardware } from "react-icons/md";

function ProductSection({ addToCart }) {
  const [products, setProducts] = useState(productList);
  const [search, setSearch] = useState("");
  const [noResult, setNoResult] = useState("");

  const productCards = products.map((product) => (
    <ProductCard {...product} key={product.id} addToCart={addToCart} />
  ));

  function searchArr() {
    setNoResult(search);
    if (search === "") {
      setProducts(productList);
    } else {
      setProducts((prevState) => {
        return prevState.filter(
          (x) =>
            x.name.toLowerCase().includes(search.toLowerCase()) ||
            x.description.toLowerCase().includes(search.toLowerCase())
        );
      });
    }
  }

  return (
    <div className="basis-2/3 m-2 rounded-lg px-2 pb-12">
      {/* banner image */}
      <div className="relative -z-30">
        <img
          src="https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Hardware store"
          className="opacity-75 rounded-xl"
        />
        <div className="absolute bottom-0 bg-gradient-to-t from-primary ... p-28 w-full rounded-b-xl flex flex-col items-center justify-center m-auto">
          <div className="flex items-center mt-20">
            <MdHardware size={50} color="#ffffff" className="mr-2" />
            <h1 className="text-white text-5xl font-semibold ">
              Smart Hardware Shop
            </h1>
          </div>
          <p className="text-gray-50 text-xl pt-4">
            The place to go for all your hardware needs!
          </p>
        </div>
      </div>
      {/* search */}
      <div className="space-x-4 my-8 flex items-center bg-gray-300 rounded-full px-4 py-1">
        <input
          type="text"
          placeholder="Search products..."
          className="py-2 px-4 rounded-full border border-solid border-gray-300 my-2 flex-grow shadow-sm hover:shadow-lg outline-none"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          onKeyDown={(e) => e.key === "Enter" && searchArr()}
        />
        <button
          className="bg-primary py-2 px-6 shadow-md text-white rounded-full hover:bg-gray-600 cursor-pointer hover:shadow-lg hover:-translate-y-[2px] ease-in-out duration-150 active:-translate-y-[0px] active:bg-gray-800 tracking-wide"
          onClick={() => searchArr()}
        >
          Search
        </button>
      </div>
      {/* products */}
      <div className="grid grid-cols-3 gap-8">{productCards}</div>
      {products.length === 0 && (
        <div className="p-2">
          <p className="font-semibold">{`No results could be found for '${noResult}'.`}</p>
        </div>
      )}
    </div>
  );
}

export default ProductSection;
