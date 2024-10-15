import { GoArrowRight } from "react-icons/go";
import { BookCard } from "../Books";
import { Button } from "../Atoms";
import { booksData } from "../../assets/data";

const NewArrivals = () => {
  return (
    <div className="flex flex-col justify-center max-w-[1440px] mx-auto mt-20">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold uppercase font-Josefin">
          New Arrivals
        </h1>
        <div className="w-20 h-1 mx-auto mt-2 bg-secondary"></div>
      </header>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {booksData.slice(0, 8).map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </div>

      <div className="flex justify-center w-full">
        <Button
          title="View All Books"
          link="/all-books"
          styles="px-4 font-semibold py-3 flex text-lg text-white items-center justify-center gap-x-3 rounded-sm bg-tertiary text-black"
          icon={GoArrowRight}
        />
      </div>
    </div>
  );
};

export default NewArrivals;
