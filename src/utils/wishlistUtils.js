export const getWishlist = () => {
  return JSON.parse(localStorage.getItem("wishlist")) || [];
};

export const addToWishlist = (book) => {
  const existingWishlist = getWishlist();

  const isAlreadyInWishlist = existingWishlist.some(
    (item) => item.id === book.id
  );

  if (!isAlreadyInWishlist) {
    const updatedWishlist = [...existingWishlist, book];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    // Dispatch a custom event to notify that wishlist has been updated
    window.dispatchEvent(new Event("wishlistUpdated"));
  } else {
    alert("Book is already in your wishlist!");
  }
};

export const removeFromWishlist = (bookId) => {
  const existingWishlist = getWishlist();

  const updatedWishlist = existingWishlist.filter((item) => item.id !== bookId);

  localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

  // Dispatch a custom event to notify that wishlist has been updated
  window.dispatchEvent(new Event("wishlistUpdated"));
};
