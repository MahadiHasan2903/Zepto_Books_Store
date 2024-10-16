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

  console.log(bookDetails);

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
            <div className="flex items-start mb-8 w-full border-b border-gray-400 pb-3">
              <p className="w-52 font-medium flex items-center text-lg gap-x-4 ">
                <FaHashtag size={20} />
                Book ID
              </p>
              <p className="px-5 text-md ml-5 w-full mt-0">{bookDetails?.id}</p>
            </div>
            <div className="flex items-start mb-8 w-full border-b border-gray-400 pb-3">
              <p className="w-52 font-medium flex items-center text-lg gap-x-4 ">
                <FaBook size={20} />
                Title
              </p>
              <p className="px-5 text-md ml-5 w-full mt-0">
                {bookDetails?.title}
              </p>
            </div>
            <div className="flex items-start mb-8 w-full border-b border-gray-400 pb-3">
              <p className="w-52 font-medium flex items-center text-lg gap-x-4 ">
                <MdGroups size={20} />
                Authors
              </p>
              <p className="px-5 text-md ml-5 w-full mt-0">
                {bookDetails?.authors}
              </p>
            </div>
            <div className="flex items-start mb-8 w-full border-b border-gray-400 pb-3">
              <p className="w-52 font-medium flex items-center text-lg gap-x-4 ">
                <MdSubject size={20} />
                Genre
              </p>
              <p className="px-5 text-md ml-5 w-full mt-0">
                {bookDetails?.genres}
              </p>
            </div>
            <div className="flex items-start mb-8 w-full border-b border-gray-400 pb-3">
              <p className="w-52 font-medium flex items-center text-lg gap-x-4 ">
                <GrLanguage size={20} />
                Languages
              </p>
              <p className="px-5 text-md ml-5 w-full mt-0 uppercase">
                {bookDetails?.languages}
              </p>
            </div>
            <div className="flex items-start mb-8 w-full border-b border-gray-400 pb-3">
              <p className="w-52 font-medium flex items-center text-lg gap-x-4 ">
                <HiOutlineCloudDownload size={20} />
                Downloads
              </p>
              <p className="px-5 ml-5 w-full mt-0">
                {bookDetails?.totalDownloads}
              </p>
            </div>

            <button className="px-4 font-semibold mt-10 py-3 text-white flex text-lg items-center justify-center gap-x-3 rounded-md bg-tertiary">
              Add to Wishlist <AiOutlineHeart size={25} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
