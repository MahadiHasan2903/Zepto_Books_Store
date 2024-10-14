import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center">
      {/* Main navigation container */}
      <div className="flex items-center justify-between w-full px-8 py-3 bg-white shadow-lg">
        {/* Logo and store name section */}
        <div className="flex items-center gap-x-5 w-1/6">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[70px] h-[70px]" />{" "}
          </Link>
          <p className="text-2xl font-bold">Zepto Store</p>
        </div>

        {/* Search bar section */}
        <div className="w-3/6 relative">
          <input
            type="text"
            placeholder="Search Book..."
            className="h-[40px] w-full p-6 border-[#3957db] border-[2px] rounded-md"
          />
          <AiOutlineSearch
            size={30}
            className="absolute right-2 top-3 cursor-pointer"
          />
        </div>

        {/* User action icons section */}
        <div className="w-1/6 flex items-center justify-center">
          <div className="flex items-center gap-x-5">
            {/* Favorite items  */}
            <div className="flex items-center">
              <div className="relative cursor-pointer">
                <AiOutlineHeart size={30} />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 text-white font-mono text-[12px] leading-tight text-center">
                  0
                </span>
              </div>
            </div>

            {/* Shopping cart items */}
            <div className="flex items-center">
              <div className="relative cursor-pointer">
                <AiOutlineShoppingCart size={30} /> {/* Cart icon */}
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 text-white font-mono text-[12px] leading-tight text-center">
                  0
                </span>
              </div>
            </div>

            {/* User profile icon */}
            <div className="flex items-center">
              <div className="relative cursor-pointer">
                <CgProfile size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar; // Export Navbar component for use in other parts of the app
