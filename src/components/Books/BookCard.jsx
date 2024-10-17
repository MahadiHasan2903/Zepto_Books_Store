import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdHeart } from "react-icons/io";
import { useWishlist } from "../../context/WishlistContext"; // Import the context hook

const BookCard = ({ id, title, authors, coverImage, genres }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isInWishlist = wishlist.some((item) => item.id === id);

  const handleWishlistClick = () => {
    if (isInWishlist) {
      removeFromWishlist(id);
    } else {
      addToWishlist({ id, title, authors, coverImage, genres });
    }
  };

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
        {isInWishlist ? (
          <IoMdHeart
            size={25}
            className="p-1 bg-white rounded-full cursor-pointer text-tertiary w-7 h-7"
            onClick={handleWishlistClick}
          />
        ) : (
          <AiOutlineHeart
            size={25}
            className="p-1 bg-white rounded-full cursor-pointer text-tertiary w-7 h-7"
            onClick={handleWishlistClick}
          />
        )}
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
