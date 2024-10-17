import { useEffect, useState } from "react";
import { SectionHeader } from "../components/Atoms";
import { getAllBooks } from "../api";
import { BookCard } from "../components/Books";
import { Loader } from "../components/Layout";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { genres } from "../assets/data";

const AllBooks = () => {
  // Hooks for navigation and location access
  const navigate = useNavigate(); // Hook for programmatic navigation
  const location = useLocation(); // Hook for accessing current URL location

  // State variables for pagination, search, loading, and book data
  const [page, setPage] = useState(1); // Current page number
  const [searchTerm, setSearchTerm] = useState(""); // Search term for filtering books
  const [genre, setGenre] = useState(""); // Selected genre for filtering books
  const [loading, setLoading] = useState(false); // Loading state for API calls
  const [books, setBooks] = useState([]); // Array to hold fetched book data
  const [totalBooks, setTotalBooks] = useState(1); // Total number of books available
  const [previousPage, setPreviousPage] = useState(""); // Previous page link for pagination
  const [nextPage, setNextPage] = useState(""); // Next page link for pagination
  const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility
  const [selectedGenre, setSelectedGenre] = useState(""); // Selected genre for dropdown

  // Function to handle genre selection from the dropdown
  const handleSelect = (value) => {
    setSelectedGenre(value); // Update selected genre
    setGenre(value); // Set genre for fetching books
    setIsOpen(false); // Close the dropdown
  };

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

    navigate(`/all-books?${params.toString()}`);

    // Store search preferences in localStorage
    if (searchTerm || genre) {
      // Only store if at least one is non-empty
      const currentPreference = {
        searchTerm: searchTerm || "", // Store empty string if searchTerm is empty
        genre: genre || "", // Store empty string if genre is empty
      };

      // Get existing search preferences from localStorage or initialize an empty array
      const storedPreferences =
        JSON.parse(localStorage.getItem("searchPreferences")) || [];

      // Push the current preference into the array
      storedPreferences.push(currentPreference);

      // Store the updated preferences array back into localStorage
      localStorage.setItem(
        "searchPreferences",
        JSON.stringify(storedPreferences)
      );
    }
  };

  // Automatically call handleSearch when the page changes
  useEffect(() => {
    handleSearch();
  }, [page]); // Dependency on page to re-fetch data when it changes

  // Function to handle page changes (previous/next)
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
        {/* Search input for book title */}
        <input
          type="text"
          placeholder="Enter Book Title"
          value={searchTerm} // Controlled input for search term
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on change
          className="w-full px-4 py-[10px] text-gray-600 bg-transparent border-2 font-Josefin border-secondary"
        />
        {/* Dropdown for genre selection */}
        <div className="relative w-64">
          <div
            className="flex items-center justify-between px-5 py-3 text-white bg-black cursor-pointer font-Josefin"
            onClick={() => setIsOpen(!isOpen)} // Toggle dropdown visibility
          >
            <span>
              {selectedGenre
                ? genres.find((g) => g.value === selectedGenre)?.label
                : "Select Genre"}
              {/* Display selected genre or placeholder */}
            </span>
            <IoIosArrowDown size={20} /> {/* Dropdown arrow icon */}
          </div>

          {isOpen && (
            <ul className="absolute z-10 w-full text-white bg-black font-Josefin">
              {genres.map((genre) => (
                <li
                  key={genre.value}
                  className="px-5 py-1 cursor-pointer hover:bg-gray-800"
                  onClick={() => handleSelect(genre.value)} // Handle genre selection
                >
                  {genre.label} {/* Display genre label */}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Search button */}
        <button
          disabled={loading}
          className={`${
            loading && "cursor-not-allowed"
          } px-10 py-3 transition-all font-Josefin text-white bg-primary`}
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
          <Loader /> // Display loader while fetching data
        ) : books.length > 0 ? (
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book, index) => (
              <BookCard key={index} {...book} /> // Render BookCard for each book
            ))}
          </div>
        ) : (
          <h1 className="text-3xl font-semibold text-center text-tertiary font-Josefin">
            No Books Found {/* Message when no books are found */}
          </h1>
        )}
      </div>
      <div className="flex items-center justify-center gap-x-3">
        {/* Previous button */}
        <button
          onClick={() => handlePageChange(page - 1)} // Go to previous page
          disabled={page === 1 || previousPage === null} // Disable if on the first page or no previous page
          className={`flex items-center justify-center px-4 py-2 text-lg font-semibold text-white transition-all border rounded-sm ${
            page === 1 || previousPage === null
              ? "bg-gray-400 cursor-not-allowed border-gray-400"
              : "bg-secondary hover:bg-primary border-primary"
          } gap-x-2`}
        >
          <BsArrowLeft size={20} /> Previous {/* Previous button label */}
        </button>

        {/* Only render page numbers if books.length is greater than 0 */}
        {books.length > 0 && totalBooks > 0
          ? (() => {
              const totalPages = Math.ceil(totalBooks / books.length); // Calculate total pages
              const pageNumbers = []; // Array to hold page number buttons

              // Show the first page if it's not the current page
              if (page > 2) {
                pageNumbers.push(
                  <button
                    key={1}
                    onClick={() => handlePageChange(1)} // Go to first page
                    className={`flex items-center justify-center px-4 py-2 text-lg font-semibold text-white transition-all border rounded-sm ${
                      page === 1
                        ? "bg-primary border-primary"
                        : "bg-secondary hover:bg-primary border-primary"
                    } gap-x-2`}
                  >
                    1 {/* First page number */}
                  </button>
                );
              }

              // Show ellipsis if there are pages in between
              if (page > 3) {
                pageNumbers.push(
                  <span
                    key="ellipsis-left"
                    className="flex items-center justify-center text-lg font-semibold"
                  >
                    ...
                  </span>
                );
              }

              // Generate buttons for the current page and surrounding pages
              for (
                let i = Math.max(1, page - 1);
                i <= Math.min(totalPages, page + 1);
                i++
              ) {
                pageNumbers.push(
                  <button
                    key={i}
                    onClick={() => handlePageChange(i)} // Go to selected page
                    className={`flex items-center justify-center px-4 py-2 text-lg font-semibold text-white transition-all border rounded-sm ${
                      i === page
                        ? "bg-primary border-primary"
                        : "bg-secondary hover:bg-primary border-primary"
                    } gap-x-2`}
                  >
                    {i} {/* Current page number */}
                  </button>
                );
              }

              // Show ellipsis if there are pages after the current page
              if (page < totalPages - 2) {
                pageNumbers.push(
                  <span
                    key="ellipsis-right"
                    className="flex items-center justify-center text-lg font-semibold"
                  >
                    ...
                  </span>
                );
              }

              // Show the last page if it's not the current page
              if (page < totalPages - 1) {
                pageNumbers.push(
                  <button
                    key={totalPages}
                    onClick={() => handlePageChange(totalPages)} // Go to last page
                    className={`flex items-center justify-center px-4 py-2 text-lg font-semibold text-white transition-all border rounded-sm ${
                      page === totalPages
                        ? "bg-primary border-primary"
                        : "bg-secondary hover:bg-primary border-primary"
                    } gap-x-2`}
                  >
                    {totalPages} {/* Last page number */}
                  </button>
                );
              }

              return pageNumbers; // Return the generated page numbers
            })()
          : null}

        {/* Next button */}
        <button
          onClick={() => handlePageChange(page + 1)} // Go to next page
          disabled={!nextPage} // Disable if no next page
          className={`flex items-center justify-center px-4 py-2 text-lg font-semibold text-white transition-all border rounded-sm ${
            !nextPage
              ? "bg-gray-400 cursor-not-allowed border-gray-400"
              : "bg-secondary hover:bg-primary border-primary"
          } gap-x-2`}
        >
          Next <BsArrowRight size={20} /> {/* Next button label */}
        </button>
      </div>
    </div>
  );
};

export default AllBooks;
