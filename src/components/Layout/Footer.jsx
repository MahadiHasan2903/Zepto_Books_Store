import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { footerData } from "../../assets/data";

const Footer = () => {
  return (
    <div className="bg-footer bg-no-repeat bg-bottom bg-cover h-full  lg:h-[60vh]">
      <div className="h-full max-w-full lg:w-[1280px] mx-3 lg:mx-auto">
        <div className="grid grid-cols-1 pt-12 lg:pt-24 md:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0">
          <div>
            <h1 className="mb-4 text-2xl font-semibold lg:mb-8 lg:ext-4xl text-tertiary font-Josefin">
              Zepto Store
            </h1>
            <p className="text-sm font-medium leading-8 text-white lg:text-md font-Josefin">
              1203 Town Center <br />
              Drive FL 33458 USA <br />
              +0000 123 456 789 <br />
              info@example.com
            </p>
          </div>
          {footerData.map((column, index) => (
            <div key={index}>
              <h1 className="mb-4 text-lg font-semibold text-white lg:text-2xl lg:mb-8">
                {column.title}
              </h1>
              {column.items.map((item, index) => (
                <p
                  key={index}
                  className="mt-3 text-sm font-medium text-white transition-all cursor-pointer font-Josefin hover:text-tertiary lg:text-md"
                >
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center py-10 lg:pb-16 lg:pt-14 pt gap-x-8">
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXFill
              size={20}
              className="text-white transition-none cursor-pointer hover:text-tertiary"
            />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare
              size={20}
              className="text-white transition-none cursor-pointer hover:text-tertiary"
            />
          </a>
          <a
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterest
              size={20}
              className="text-white transition-none cursor-pointer hover:text-tertiary"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram
              size={20}
              className="text-white transition-none cursor-pointer hover:text-tertiary"
            />
          </a>
        </div>
        <div className="w-full border-t border-opacity-50 border-primary_background"></div>
        <p className="pt-4 font-medium text-white text-md lg:text-lg font-Josefin">
          All right reserved ©2024,{" "}
          <span className="block text-tertiary lg:inline">
            Md. Mahadi Hasan
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
