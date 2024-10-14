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
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute right-4 top-8 flex flex-col gap-y-2">
        <AiFillEye
          size={20}
          className="cursor-pointer bg-white text-tertiary rounded-full w-7 h-7 p-1"
        />
        <AiOutlineHeart
          size={20}
          className="cursor-pointer bg-white text-tertiary rounded-full w-7 h-7 p-1"
        />
        <AiOutlineShoppingCart
          size={20}
          className="cursor-pointer bg-white text-tertiary rounded-full w-7 h-7 p-1"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <p className="font-Josefin uppercase text-sm">{author}</p>
        <p className="font-Josefin text-xl font-medium my-2 text-center">
          {title.length > 30 ? `${title.slice(0, 25)}...` : title}
        </p>
        <p className="font-Josefin text-lg">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default BookCard;
