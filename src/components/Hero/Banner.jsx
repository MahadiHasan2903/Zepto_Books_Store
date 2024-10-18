import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "../Atoms";

const Banner = () => {
  return (
    <div className="bg-none lg:bg-hero bg-no-repeat bg-bottom bg-cover mt-24 lg:mt-0 h-full lg:h-[90vh]">
      <div className="flex flex-col justify-center h-full max-w-full lg:w-[1280px] lg:mx-auto mx-3">
        <p className="mb-4 text-xl font-medium text-gray-700 lg:text-4xl font-Josefin">
          Year end sale!
        </p>
        <h1 className="mb-2 text-2xl font-semibold lg:text-[52px] text-tertiary leading-0 lg:leading-[65px]">
          Enjoy A Massive 70% Off <br /> For All History Books
        </h1>
        <p className="mb-4 text-sm lg:text-lg font-Josefin text-wrap">
          Don&apos;t miss our Year End Sale! Enjoy 70% off on all history books.
          Shop now and save big!
        </p>

        <Button
          title="Shop Now"
          link="/all-books"
          styles="px-2 lg:px-4 font-semibold py-2 lg:py-3 text-white flex text-sm lg:text-lg items-center justify-center gap-x-3 rounded-md bg-tertiary"
          icon={AiOutlineShoppingCart}
        />
      </div>
    </div>
  );
};

export default Banner;
