import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { useWishlist } from "../../context/WishlistContext";
import { useState } from "react";
import Wishlist from "../Books/Wishlist";
import { navItems } from "../../assets/data";

const Navbar = () => {
  const { wishlist } = useWishlist();
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const handleToggleWishlist = () => {
    setIsWishlistOpen(!isWishlistOpen);
  };

  return (
    <div className="relative z-50 flex items-center justify-center">
      <div className="fixed top-0 z-50 w-full px-8 py-3 shadow-md bg-primary_background">
        <div className="flex items-center justify-between w-[1440px] mx-auto">
          <Link to="/" className="w-1/6">
            <div className="flex items-center w-full gap-x-5">
              <img src={logo} alt="logo" className="w-[70px] h-[70px]" />
              <p className="text-2xl font-bold">Zepto Store</p>
            </div>
          </Link>

          {/* Navbar section */}
          <div className="flex justify-center">
            <div className="relative flex items-center w-full gap-x-14">
              {navItems.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="text-lg font-medium transition-all text-primary hover:text-tertiary font-Josefin"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* User action icons */}
          <div className="flex items-center justify-end w-1/6">
            <div className="flex items-center gap-x-5">
              <div className="flex items-center">
                <div
                  className="relative cursor-pointer"
                  onClick={handleToggleWishlist}
                >
                  <AiOutlineHeart size={30} />
                  <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 text-white font-mono text-[12px] leading-tight text-center">
                    {wishlist.length}
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <div className="relative cursor-pointer">
                  <CgProfile size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isWishlistOpen && <Wishlist onClose={handleToggleWishlist} />}
    </div>
  );
};

export default Navbar;
