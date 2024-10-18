import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookDetails } from "../api";
import { Loader } from "../components/Layout";
import { FaBook, FaHashtag } from "react-icons/fa";
import { MdGroups, MdSubject } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { HiOutlineCloudDownload } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { useWishlist } from "../context/WishlistContext";
import { SectionHeader } from "../components/Atoms";

const BookDetails = () => {
  const { id } = useParams(); // Retrieve the book ID from the URL parameters
  const [loading, setLoading] = useState(false); // State to track whether the data is loading
  const [bookDetails, setBookDetails] = useState(null); // State to store book details
  const { addToWishlist } = useWishlist(); // Hook to manage adding the book to the wishlist

  // Function to fetch and set book details
  const handleSearchBookDetails = async () => {
    setLoading(true); // Set loading state to true while fetching data

    // Fetch book details using the provided API function
    const getBooksDetails = await getBookDetails(id);

    // Format the fetched data to match the required structure
    const details = {
      id: getBooksDetails.id,
      title: getBooksDetails.title,
      authors: getBooksDetails.authors.map((author) => author.name).join(", "),
      coverImage: getBooksDetails.formats["image/jpeg"],
      genres: getBooksDetails.subjects.join(", "),
      languages: getBooksDetails.languages.join(", "),
      totalDownloads: getBooksDetails.download_count,
    };

    // Set the book details in the state and stop loading
    setBookDetails(details);
    setLoading(false);
  };

  // UseEffect hook to run the fetch function when the component mounts or the book ID changes
  useEffect(() => {
    handleSearchBookDetails();
  }, [id]);

  return (
    <div className="max-w-full lg:max-w-[1280px] lg:mx-auto mx-5 mt-24 lg:mt-40 mb-20">
      <SectionHeader title="Book Details" />{" "}
      {/* Section header with the title "Book Details" */}
      {loading ? ( // Show loader while the data is being fetched
        <Loader />
      ) : (
        <div className="flex flex-col items-start justify-between mt-10 lg:mt-20 gap-y-10 lg:flex-row gap-x-20">
          <div className="w-full lg:w-1/2">
            {/* Display book cover image if available */}
            {bookDetails && bookDetails.coverImage && (
              <img
                src={bookDetails.coverImage}
                alt={bookDetails.title}
                className="w-[300px] lg:w-[400px] h-[50vh] lg:h-[60vh] border border-black border-opacity-30 p-2"
              />
            )}
          </div>

          <div className="w-full lg:w-1/2">
            {/* Display book ID */}
            <div className="flex items-start w-full pb-3 mb-8 border-b border-gray-400">
              <p className="flex items-center font-medium lg:text-lg text-md w-52 gap-x-4 ">
                <FaHashtag size={20} />
                Book ID
              </p>
              <p className="w-full px-5 mt-0 ml-5 text-sm lg:text-md">
                {bookDetails?.id}
              </p>
            </div>

            {/* Display book title */}
            <div className="flex items-start w-full pb-3 mb-8 border-b border-gray-400">
              <p className="flex items-center font-medium lg:text-lg text-md w-52 gap-x-4 ">
                <FaBook size={20} />
                Title
              </p>
              <p className="w-full px-5 mt-0 ml-5 text-sm lg:text-md">
                {bookDetails?.title}
              </p>
            </div>

            {/* Display book authors */}
            <div className="flex items-start w-full pb-3 mb-8 border-b border-gray-400">
              <p className="flex items-center font-medium lg:text-lg text-md w-52 gap-x-4 ">
                <MdGroups size={20} />
                Authors
              </p>
              <p className="w-full px-5 mt-0 ml-5 text-sm lg:text-md">
                {bookDetails?.authors}
              </p>
            </div>

            {/* Display book genre */}
            <div className="flex items-start w-full pb-3 mb-8 border-b border-gray-400">
              <p className="flex items-center font-medium lg:text-lg text-md w-52 gap-x-4 ">
                <MdSubject size={20} />
                Genre
              </p>
              <p className="w-full px-5 mt-0 ml-5 text-sm lg:text-md">
                {bookDetails?.genres}
              </p>
            </div>

            {/* Display book languages */}
            <div className="flex items-start w-full pb-3 mb-8 border-b border-gray-400">
              <p className="flex items-center font-medium lg:text-lg text-md w-52 gap-x-4 ">
                <GrLanguage size={20} />
                Languages
              </p>
              <p className="w-full px-5 mt-0 ml-5 text-sm uppercase lg:text-md">
                {bookDetails?.languages}
              </p>
            </div>

            {/* Display book download count */}
            <div className="flex items-start w-full pb-3 mb-8 border-b border-gray-400">
              <p className="flex items-center font-medium lg:text-lg text-md w-52 gap-x-4 ">
                <HiOutlineCloudDownload size={20} />
                Downloads
              </p>
              <p className="w-full px-5 mt-0 ml-5 text-sm lg:text-md">
                {bookDetails?.totalDownloads}
              </p>
            </div>

            {/* Button to add the book to the wishlist */}
            <button
              onClick={() =>
                addToWishlist({
                  id: bookDetails?.id,
                  title: bookDetails?.title,
                  authors: bookDetails?.authors,
                  coverImage: bookDetails?.coverImage,
                  genres: bookDetails?.genres,
                })
              }
              className="flex items-center justify-center p-2 mt-10 text-sm font-semibold text-white rounded-md lg:py-3 lg:px-4 lg:text-lg gap-x-3 bg-tertiary"
            >
              Add to Wishlist <AiOutlineHeart />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
