import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdHeart } from "react-icons/io";
import { useWishlist } from "../../context/WishlistContext";

const BookCard = ({ id, title, authors, coverImage, genres }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist(); // Get wishlist-related methods and data from context
  const isInWishlist = wishlist.some((item) => item.id === id); // Check if the book is already in the wishlist

  // Function to handle adding/removing the book from the wishlist
  const handleWishlistClick = () => {
    if (isInWishlist) {
      removeFromWishlist(id); // Remove the book from the wishlist if it is already there
    } else {
      addToWishlist({ id, title, authors, coverImage, genres }); // Add the book to the wishlist if it isn't
    }
  };

  return (
    <div className="w-full flex flex-col items-center h-[40vh] relative mb-10 border border-black border-opacity-10">
      {/* Link to book details page using the book ID */}
      <Link
        to={`/all-books/${id}`}
        className="w-full h-[50vh] transform transition-transform duration-300 hover:scale-105"
      >
        <img
          src={coverImage} // Display the book cover image
          alt={`${title} cover`}
          className="object-contain w-full h-[30vh] animate-slide-in"
        />
      </Link>

      {/* Wishlist button, showing either a filled heart if in wishlist or an outlined heart otherwise */}
      <div className="absolute flex flex-col right-4 top-4 gap-y-2">
        {isInWishlist ? (
          <IoMdHeart
            size={25} // Filled heart icon if book is in wishlist
            className="p-1 bg-white rounded-full cursor-pointer text-tertiary w-7 h-7"
            onClick={handleWishlistClick} // Handle removing from wishlist
          />
        ) : (
          <AiOutlineHeart
            size={25} // Outlined heart icon if book is not in wishlist
            className="p-1 bg-white rounded-full cursor-pointer text-tertiary w-7 h-7"
            onClick={handleWishlistClick} // Handle adding to wishlist
          />
        )}
      </div>

      {/* Book details: title and authors */}
      <div className="flex flex-col items-center justify-center mt-4">
        <p className="text-sm uppercase font-Josefin">
          {/* Display authors' names, truncated if too long */}
          {authors.length > 30 ? `${authors.slice(0, 25)}...` : authors}
        </p>
        <p className="my-2 text-xl font-medium text-center font-Josefin">
          {/* Display book title, truncated if too long */}
          {title.length > 30 ? `${title.slice(0, 25)}...` : title}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
