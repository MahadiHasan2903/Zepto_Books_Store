import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { navItems } from "../../assets/data";

const Navbar = () => {
  return (
    <div className="z-50 flex items-center justify-center">
      {/* Main navigation container */}
      <div className="fixed top-0 z-50 w-full px-8 py-3 shadow-md bg-primary_background">
        <div className="flex items-center justify-between w-[1440px] mx-auto">
          {/* Logo and store name section */}
          <Link to="/" className="w-1/6">
            <div className="flex items-center w-full gap-x-5">
              <img src={logo} alt="logo" className="w-[70px] h-[70px]" />{" "}
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

          {/* User action icons section */}
          <div className="flex items-center justify-end w-1/6">
            <div className="flex items-center gap-x-5">
              {/* Favorite items */}
              <div className="flex items-center">
                <div className="relative cursor-pointer">
                  <AiOutlineHeart size={30} />
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
    </div>
  );
};

export default Navbar;
