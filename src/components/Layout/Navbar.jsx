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
    <div className="w-full relative z-[99] flex items-center justify-center">
      <div className="fixed top-0 z-[99] w-full px-3 xl:px-8 py-3 shadow-md bg-primary_background">
        <div className="flex items-center justify-between w-full xl:w-[1280px] mx-auto">
          <Link to="/">
            <div className="flex items-center w-full gap-x-5">
              <img
                src={logo}
                alt="logo"
                className="w-10 h-10 xl:w-[70px] xl:h-[70px]"
              />
              <p className="text-lg font-bold xl:text-2xl">Zepto Store</p>
            </div>
          </Link>

          {/* Navbar section */}
          <div className="justify-center hidden md:flex ">
            <div className="relative flex items-center w-full gap-x-5 lg:gap-x-8 xl:gap-x-12">
              {navItems.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="text-sm font-medium transition-all lg:text-lg text-primary hover:text-tertiary font-Josefin"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* User action icons */}
          <div className="flex items-center justify-end ">
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
