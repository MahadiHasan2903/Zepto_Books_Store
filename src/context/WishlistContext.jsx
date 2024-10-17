import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for the wishlist
const WishlistContext = createContext();

// Custom hook to use the wishlist context
export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    // Initialize state from localStorage
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  // Function to add a book to the wishlist
  const addToWishlist = (book) => {
    setWishlist((prevWishlist) => {
      const isAlreadyInWishlist = prevWishlist.some(
        (item) => item.id === book.id
      );

      if (!isAlreadyInWishlist) {
        const updatedWishlist = [...prevWishlist, book];
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        return updatedWishlist; // Update the state with the new wishlist
      } else {
        alert("Book is already in your wishlist!");
        return prevWishlist; // Return the previous wishlist if the book is already present
      }
    });
  };

  // Function to remove a book from the wishlist
  const removeFromWishlist = (bookId) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((item) => item.id !== bookId);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist; // Update the state with the new wishlist
    });
  };

  // Value provided by the context
  const value = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
