import { useEffect, useState } from "react";
import { SectionHeader } from "../components/Atoms";
import { getAllBooks } from "../api";
import { BookCard } from "../components/Books";
import { Loader } from "../components/Layout";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";

const AllBooks = () => {
  // State variables for pagination, search, loading, and book data
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("");
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [totalBooks, setTotalBooks] = useState(1);
  const [previousPage, setPreviousPage] = useState("");
  const [nextPage, setNextPage] = useState("");

  // Hooks for navigation and location access
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle search requests and update the URL with current parameters
  const handleSearch = async () => {
    setLoading(true);

    // Fetch book data based on current page, search term, and genre
    const getAllBooksData = await getAllBooks(page, searchTerm, genre);

    // Extract relevant book data from the API response
    const extractedBooks = getAllBooksData.results.map((book) => ({
      id: book.id,
      title: book.title,
      authors: book.authors.map((author) => author.name).join(", "),
      coverImage: book.formats["image/jpeg"],
      genres: book.subjects.join(", "),
    }));

    // Update state with fetched data and pagination info
    setTotalBooks(getAllBooksData.count);
    setPreviousPage(getAllBooksData.previous);
    setNextPage(getAllBooksData.next);
    setBooks(extractedBooks);
    setLoading(false);

    // Update the URL with the current search parameters
    const params = new URLSearchParams();
    if (page) params.set("page", page);
    if (searchTerm) params.set("search", searchTerm);
    if (genre) params.set("topic", genre);

    navigate(`/all-books?${params.toString()}`); // Navigate to the updated URL
  };

  // Automatically call handleSearch when the page changes
  useEffect(() => {
    handleSearch();
  }, [page]); // Dependency on page to re-fetch data when it changes

  // Function to handle page changes
  const handlePageChange = (newPage) => {
    setPage(newPage); // Update the current page
  };

  // Effect to parse query parameters from the URL on component mount
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const pageParam = searchParams.get("page");
    const searchParam = searchParams.get("search");
    const genreParam = searchParams.get("topic");

    // Set state with parsed query parameters
    if (pageParam) setPage(Number(pageParam));
    if (searchParam) setSearchTerm(searchParam);
    if (genreParam) setGenre(genreParam);
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="max-w-[1440px] mx-auto mt-40 mb-20">
      <SectionHeader title="All Books" /> {/* Section header for the page */}
      <div className="flex items-center mb-10 gap-x-5">
        <input
          type="text"
          placeholder="Enter Book Title"
          value={searchTerm} // Controlled input for search term
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on change
          className="w-full px-4 py-[10px] text-gray-600 bg-transparent border-2 font-Josefin border-secondary"
        />
        <select
          name="topic"
          id="topic"
          value={genre} // Controlled select for genre
          onChange={(e) => setGenre(e.target.value)} // Update genre on change
          className="py-[0.9rem] pl-5 text-white transition-all font-Josefin cursor-pointer bg-black"
        >
          <option value="" disabled>
            Select Genre
          </option>
          <option value="children">Children</option>
          <option value="fiction">Fiction</option>
          <option value="adventure">Adventure</option>
          <option value="mystery">Mystery</option>
          <option value="romance">Romance</option>
        </select>

        <button
          className={`${
            loading ? "disable cursor-not-allowed bg-gray-500" : "bg-primary"
          } px-10 py-3 transition-all font-Josefin text-white`}
          onClick={() => {
            setPage(1); // Reset to first page when searching
            handleSearch(); // Trigger the search immediately
          }}
        >
          {loading ? "Searching..." : "Search"} {/* Conditional button text */}
        </button>
      </div>
      {/* Display the extracted books */}
      <div className="my-20">
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book, index) => (
              <BookCard key={index} {...book} />
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center justify-center gap-x-3">
        {/* Previous button */}
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1 || previousPage === null}
          className={`flex items-center justify-center px-4 py-2 text-lg font-semibold text-white transition-all border rounded-sm ${
            page === 1 || previousPage === null
              ? "bg-gray-400 cursor-not-allowed border-gray-400"
              : "bg-secondary hover:bg-primary border-primary"
          } gap-x-2`}
        >
          <BsArrowLeft size={20} /> Previous
        </button>

        {/* Only render page numbers if books.length is greater than 0 */}
        {books.length > 0 && totalBooks > 0 ? (
          (() => {
            const totalPages = Math.ceil(totalBooks / books.length);
            const pageNumbers = [];

            // Show the first page if it's not the current page
            if (page > 2) {
              pageNumbers.push(
                <button
                  key={1}
                  onClick={() => handlePageChange(1)}
                  className={`flex items-center justify-center px-4 py-2 text-lg font-semibold text-white transition-all border rounded-sm ${
                    page === 1
                      ? "bg-primary border-primary"
                      : "bg-secondary hover:bg-primary border-primary"
                  } gap-x-2`}
                >
                  1
                </button>
              );
            }

            // Show ellipsis if current page is greater than 3
            if (page > 3) {
              pageNumbers.push(
                <span key="ellipsis-start" className="px-2">
                  ...
                </span>
              );
            }

            // Show the previous, current, and next pages
            for (
              let i = Math.max(1, page - 1);
              i <= Math.min(totalPages, page + 1);
              i++
            ) {
              pageNumbers.push(
                <button
                  key={i}
                  onClick={() => handlePageChange(i)}
                  className={`flex items-center justify-center px-4 py-2 text-lg font-semibold text-white transition-all border rounded-sm ${
                    page === i
                      ? "bg-primary border-primary"
                      : "bg-secondary hover:bg-primary border-primary"
                  } gap-x-2`}
                >
                  {i}
                </button>
              );
            }

            // Show ellipsis if current page is less than totalPages - 2
            if (page < totalPages - 2) {
              pageNumbers.push(
                <span key="ellipsis-end" className="px-2">
                  ...
                </span>
              );
            }

            // Show the last page if it's not the current or next page
            if (page < totalPages) {
              pageNumbers.push(
                <button
                  key={totalPages}
                  onClick={() => handlePageChange(totalPages)}
                  className={`flex items-center justify-center px-4 py-2 text-lg font-semibold text-white transition-all border rounded-sm ${
                    page === totalPages
                      ? "bg-primary border-primary"
                      : "bg-secondary hover:bg-primary border-primary"
                  } gap-x-2`}
                >
                  {totalPages}
                </button>
              );
            }

            return pageNumbers;
          })()
        ) : (
          <div className="flex bg-gray-400 cursor-not-allowed items-center justify-center px-4 py-2 text-lg font-semibold text-white transition-all border rounded-sm gap-x-2">
            Loading pages...
          </div>
        )}

        {/* Next button */}
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={nextPage === null || loading}
          className={`flex items-center justify-center px-4 py-2 text-lg font-semibold text-white transition-all border rounded-sm ${
            nextPage === null || loading
              ? "bg-gray-400 cursor-not-allowed border-gray-400"
              : "bg-secondary hover:bg-primary border-primary"
          } gap-x-2`}
        >
          Next <BsArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default AllBooks;
