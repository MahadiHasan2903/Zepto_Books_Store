import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-bottom bg-cover h-[90vh]">
      <div className="flex flex-col justify-center h-full w-[1440px] mx-auto">
        <p className="text-4xl font-medium text-gray-700 mb-4 font-Josefin">
          Year end sale!
        </p>
        <h1 className="text-[52px] text-primary font-semibold mb-2 ">
          Enjoy A Massive 70% Off <br /> For All History Books
        </h1>
        <p className="mb-4 font-Josefin">
          Don&apos;t miss our Year End Sale! Enjoy 70% off on all history books.
          Shop now and save big!
        </p>
        <Link to="/books">
          <button className="w-[150px] px-4 py-3 rounded-sm bg-tertiary text-black">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
