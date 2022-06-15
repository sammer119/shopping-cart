import { MdHardware } from "react-icons/md";

function Header() {
  return (
    <header className="bg-primary py-4 shadow-md sticky top-0">
      <div className="flex justify-between items-center max-w-7xl m-auto">
        <div className="flex items-center pl-2">
          <MdHardware size={40} color="#ffffff" />
          <h2 className="text-2xl text-white font-semibold px-2 cursor-pointer">
            Smart Hardware Shop
          </h2>
        </div>
        <p
          onClick={() => alert("Page coming soon...")}
          className="text-lg text-gray-50 pr-6s cursor-pointer"
        >
          Contact Us
        </p>
      </div>
    </header>
  );
}

export default Header;
