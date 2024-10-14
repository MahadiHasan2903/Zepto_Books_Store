import { GoArrowRight } from "react-icons/go";
import bookThumbnail from "../../assets/book.webp";
import { BookCard } from "../Books";
import { Button } from "../Atoms";

export const books = [
  {
    title: "The Great Gatsby",
    price: 12.5,
    author: "F. Scott Fitzgerald",
    thumbnail: bookThumbnail,
  },
  {
    title: "1984",
    price: 8.99,
    author: "George Orwell",
    thumbnail: bookThumbnail,
  },
  {
    title: "To Kill a Mockingbird",
    price: 10.99,
    author: "Harper Lee",
    thumbnail: bookThumbnail,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    price: 11.99,
    author: "J.K. Rowling",
    thumbnail: bookThumbnail,
  },
  {
    title: "The Hobbit",
    price: 5.99,
    author: "J.R.R. Tolkien",
    thumbnail: bookThumbnail,
  },
  {
    title: "Pride and Prejudice",
    price: 6.5,
    author: "Jane Austen",
    thumbnail: bookThumbnail,
  },
  {
    title: "The Catcher in the Rye",
    price: 12.99,
    author: "J.D. Salinger",
    thumbnail: bookThumbnail,
  },
  {
    title: "The Alchemist",
    price: 9.99,
    author: "Paulo Coelho",
    thumbnail: bookThumbnail,
  },
];

const NewArrivals = () => {
  return (
    <div className="flex flex-col justify-center max-w-[1440px] mx-auto mt-20">
      <header className="text-center mb-10">
        <h1 className="uppercase font-Josefin text-3xl font-bold">
          New Arrivals
        </h1>
        <div className="bg-secondary w-20 h-1 mt-2 mx-auto"></div>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {books.slice(0, 8).map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </div>

      <div className="w-full flex justify-center">
        <Button
          title="View All Books"
          link="/all-books"
          styles="px-4 py-3 flex text-lg items-center justify-center gap-x-3 rounded-sm bg-tertiary text-black"
          icon={GoArrowRight}
        />
      </div>
    </div>
  );
};

export default NewArrivals;
