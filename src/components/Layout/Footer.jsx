import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { footerData } from "../../assets/data";

const Footer = () => {
  return (
    <div className="bg-footer bg-no-repeat bg-bottom bg-cover h-[60vh]">
      <div className="h-full w-[1440px] mx-auto">
        <div className="flex items-start justify-between pt-24">
          <div>
            <h1 className="mb-8 text-4xl font-semibold text-tertiary font-Josefin">
              Zepto Store
            </h1>
            <p className="font-medium leading-8 text-white text-md font-Josefin">
              1203 Town Center <br />
              Drive FL 33458 USA <br />
              +0000 123 456 789 <br />
              info@example.com
            </p>
          </div>
          {footerData.map((column, index) => (
            <div key={index}>
              <h1 className="mb-8 text-2xl font-semibold text-white">
                {column.title}
              </h1>
              {column.items.map((item, index) => (
                <p
                  key={index}
                  className="mt-3 font-medium text-white transition-all cursor-pointer font-Josefin hover:text-tertiary text-md"
                >
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center pb-16 pt-14 pt gap-x-8">
          <RiTwitterXFill
            size={20}
            className="text-white transition-none hover:text-tertiary"
          />
          <FaFacebookSquare
            size={20}
            className="text-white transition-none hover:text-tertiary"
          />
          <FaPinterest
            size={20}
            className="text-white transition-none hover:text-tertiary"
          />
          <IoLogoInstagram
            size={20}
            className="text-white transition-none hover:text-tertiary"
          />
        </div>
        <div className="w-full border-t border-opacity-50 border-primary_background"></div>
        <p className="pt-4 text-lg font-medium text-white font-Josefin">
          All right reserved ©2024,{" "}
          <span className="text-tertiary">Md. Mahadi Hasan</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
