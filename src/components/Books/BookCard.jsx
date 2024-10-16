import { AiFillEye, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const BookCard = ({ id, title, authors, coverImage }) => {
  return (
    <div className="w-full flex flex-col items-center h-[40vh] relative mb-10 border border-black border-opacity-10">
      <Link
        to={`/all-books/${id}`}
        className="w-full h-[50vh] transform transition-transform duration-300 hover:scale-105"
      >
        <img
          src={coverImage}
          alt={`${title} cover`}
          className="object-contain w-full h-[30vh]"
        />
      </Link>
      <div className="absolute flex flex-col right-4 top-4 gap-y-2">
        <AiFillEye
          size={25}
          className="p-1 bg-white rounded-full cursor-pointer text-tertiary w-7 h-7"
        />
        <AiOutlineHeart
          size={25}
          className="p-1 bg-white rounded-full cursor-pointer text-tertiary w-7 h-7"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <p className="text-sm uppercase font-Josefin">
          {authors.length > 30 ? `${authors.slice(0, 25)}...` : authors}
        </p>
        <p className="my-2 text-xl font-medium text-center font-Josefin">
          {title.length > 30 ? `${title.slice(0, 25)}...` : title}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
