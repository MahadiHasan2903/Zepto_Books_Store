import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookDetails } from "../api";
import { Loader } from "../components/Layout";
import { FaBook, FaHashtag } from "react-icons/fa";
import { MdGroups, MdSubject } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { HiOutlineCloudDownload } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [bookDetails, setBookDetails] = useState(null);

  const handleSearchBookDetails = async () => {
    setLoading(true);

    const getBooksDetails = await getBookDetails(id);

    const details = {
      id: getBooksDetails.id,
      title: getBooksDetails.title,
      authors: getBooksDetails.authors.map((author) => author.name).join(", "),
      coverImage: getBooksDetails.formats["image/jpeg"],
      genres: getBooksDetails.subjects.join(", "),
      languages: getBooksDetails.languages.join(", "),
      totalDownloads: getBooksDetails.download_count,
    };

    setBookDetails(details);
    setLoading(false);
  };

  useEffect(() => {
    handleSearchBookDetails(); // Call the search function whenever id changes
  }, [id]); // Dependency array includes id

  return (
    <div className="max-w-[1440px] mx-auto mt-40 mb-20">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex items-start justify-between gap-x-20">
          <div className="w-1/2">
            {bookDetails && bookDetails.coverImage && (
              <img
                src={bookDetails.coverImage}
                alt={bookDetails.title}
                className="w-[400px] h-[60vh] border border-black border-opacity-30 p-2"
              />
            )}
          </div>
          <div className="w-1/2">
            <div className="flex items-start w-full pb-3 mb-8 border-b border-gray-400">
              <p className="flex items-center text-lg font-medium w-52 gap-x-4 ">
                <FaHashtag size={20} />
                Book ID
              </p>
              <p className="w-full px-5 mt-0 ml-5 text-md">{bookDetails?.id}</p>
            </div>
            <div className="flex items-start w-full pb-3 mb-8 border-b border-gray-400">
              <p className="flex items-center text-lg font-medium w-52 gap-x-4 ">
                <FaBook size={20} />
                Title
              </p>
              <p className="w-full px-5 mt-0 ml-5 text-md">
                {bookDetails?.title}
              </p>
            </div>
            <div className="flex items-start w-full pb-3 mb-8 border-b border-gray-400">
              <p className="flex items-center text-lg font-medium w-52 gap-x-4 ">
                <MdGroups size={20} />
                Authors
              </p>
              <p className="w-full px-5 mt-0 ml-5 text-md">
                {bookDetails?.authors}
              </p>
            </div>
            <div className="flex items-start w-full pb-3 mb-8 border-b border-gray-400">
              <p className="flex items-center text-lg font-medium w-52 gap-x-4 ">
                <MdSubject size={20} />
                Genre
              </p>
              <p className="w-full px-5 mt-0 ml-5 text-md">
                {bookDetails?.genres}
              </p>
            </div>
            <div className="flex items-start w-full pb-3 mb-8 border-b border-gray-400">
              <p className="flex items-center text-lg font-medium w-52 gap-x-4 ">
                <GrLanguage size={20} />
                Languages
              </p>
              <p className="w-full px-5 mt-0 ml-5 uppercase text-md">
                {bookDetails?.languages}
              </p>
            </div>
            <div className="flex items-start w-full pb-3 mb-8 border-b border-gray-400">
              <p className="flex items-center text-lg font-medium w-52 gap-x-4 ">
                <HiOutlineCloudDownload size={20} />
                Downloads
              </p>
              <p className="w-full px-5 mt-0 ml-5">
                {bookDetails?.totalDownloads}
              </p>
            </div>

            <button className="flex items-center justify-center px-4 py-3 mt-10 text-lg font-semibold text-white rounded-md gap-x-3 bg-tertiary">
              Add to Wishlist <AiOutlineHeart size={25} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
