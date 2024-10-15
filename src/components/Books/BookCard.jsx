import {
  AiFillEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const BookCard = ({ title, price, author, thumbnail }) => {
  return (
    <div className="w-full flex flex-col items-center h-[65vh] cursor-pointer relative mb-10">
      <div className="w-full h-[50vh] transform transition-transform duration-300 hover:scale-105">
        <img
          src={thumbnail}
          alt={`${title} cover`}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="absolute flex flex-col right-4 top-8 gap-y-2">
        <AiFillEye
          size={20}
          className="p-1 bg-white rounded-full cursor-pointer text-tertiary w-7 h-7"
        />
        <AiOutlineHeart
          size={20}
          className="p-1 bg-white rounded-full cursor-pointer text-tertiary w-7 h-7"
        />
        <AiOutlineShoppingCart
          size={20}
          className="p-1 bg-white rounded-full cursor-pointer text-tertiary w-7 h-7"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <p className="text-sm uppercase font-Josefin">{author}</p>
        <p className="my-2 text-xl font-medium text-center font-Josefin">
          {title.length > 30 ? `${title.slice(0, 25)}...` : title}
        </p>
        <p className="text-lg font-Josefin">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default BookCard;
