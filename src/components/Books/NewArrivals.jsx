import { GoArrowRight } from "react-icons/go";
import { BookCard } from "../Books";
import { Button, SectionHeader } from "../Atoms";
import { useEffect, useState } from "react";
import { getAllBooks } from "../../api";
import { Loader } from "../Layout";

const NewArrivals = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  // Function to handle form submission
  const handleSearch = async () => {
    setLoading(true);

    const getAllBooksData = await getAllBooks();

    // Extract specific fields from the response
    const extractedBooks = getAllBooksData.results.map((book) => ({
      id: book.id,
      title: book.title,
      authors: book.authors.map((author) => author.name).join(", "),
      coverImage: book.formats["image/jpeg"],
      genres: book.subjects.join(", "),
    }));

    // Update the state with the extracted data
    setBooks(extractedBooks);
    setLoading(false);
  };

  // Automatically call handleSearch when the component mounts
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="flex flex-col justify-center max-w-[1440px] mx-auto mt-20">
      <SectionHeader title="New Arrivals" />

      {/* Display the extracted books */}
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.slice(0, 8).map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      )}

      <div className="flex justify-center w-full">
        <Button
          title="View All Books"
          link="/all-books"
          styles="px-4 font-semibold py-3 flex text-lg text-white items-center justify-center gap-x-3 rounded-md bg-tertiary"
          icon={GoArrowRight}
        />
      </div>
    </div>
  );
};

export default NewArrivals;
