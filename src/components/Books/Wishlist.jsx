import { RxCross1 } from "react-icons/rx";
import { useWishlist } from "../../context/WishlistContext";
import { Link } from "react-router-dom";

const Wishlist = ({ onClose }) => {
  const { wishlist, removeFromWishlist } = useWishlist();

  const handleRemove = (bookId) => {
    removeFromWishlist(bookId);
  };

  return (
    <div className="h-[100vh] fixed z-[99999] top-0 w-[250px] lg:w-[350px] right-0">
      <div className="w-full h-full p-4 bg-primary_background lg:bg-white">
        <div className="flex items-center justify-between pb-3 my-3 border-b border-gray-200">
          <h1 className="text-2xl font-semibold font-Josefin">Wishlist</h1>
          <RxCross1
            size={25}
            className="text-red-600 cursor-pointer"
            onClick={onClose}
          />
        </div>

        <div className="w-full">
          {wishlist.length > 0 ? (
            wishlist.map((book) => (
              <div
                key={book.id}
                className="flex items-center justify-between w-full py-2 border-b border-gray-200 gap-x-1"
              >
                <Link
                  to={`/all-books/${book.id}`}
                  className="flex items-center mb-4"
                >
                  <img
                    src={book.coverImage}
                    alt={`${book.title} cover`}
                    className="object-cover w-16 h-24 mr-4"
                  />
                  <p className="font-medium text-md">{book.title}</p>
                </Link>
                <div>
                  <RxCross1
                    className="text-red-600 cursor-pointer"
                    onClick={() => handleRemove(book.id)}
                  />
                </div>
              </div>
            ))
          ) : (
            <h1 className="mt-5 text-xl font-semibold text-center text-tertiary font-Josefin">
              No Books Found
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
