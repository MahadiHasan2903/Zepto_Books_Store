import { BASE_URL } from "../config/constants";
import { fetchTyped } from "./client";

/**
 * Fetches a paginated list of books from the API, optionally filtering by search term and topic.
 *
 * @param {number} page - The page number to fetch (default is 1).
 * @param {string} [search] - The search term to filter the books (optional).
 * @param {string} [topic] - The topic to filter the books (optional).
 * @returns {Promise<Object|void>} - Returns a promise that resolves to the book list data or undefined if an error occurs.
 */
const getAllBooks = async (page = 1, search, topic) => {
  try {
    // Construct the base URL for the API request
    const url =
      `${BASE_URL}/books/?page=${page}` +
      (search ? `&search=${encodeURIComponent(search)}` : "") +
      (topic ? `&topic=${encodeURIComponent(topic)}` : "");

    // Make a fetch request to retrieve books with pagination and optional filters
    const response = await fetchTyped(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Create an object containing pagination information and the results
    const bookListData = {
      count: response.count,
      next: response.next,
      previous: response.previous,
      results: response.results,
    };

    // Return the book list data
    return bookListData;
  } catch (error) {
    // Log an error message if the fetch request fails
    console.error("Failed to fetch book list", error);
  }
};

/**
 * Fetches detailed information about a specific book from the API.
 *
 * @param {number} id - The ID of the book to fetch details for.
 * @returns {Promise<Object|void>} - Returns a promise that resolves to the book details or undefined if an error occurs.
 */
const getBookDetails = async (id) => {
  try {
    // Make a fetch request to retrieve the details of a specific book
    const response = await fetchTyped(`${BASE_URL}/books/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Create an object containing the detailed information of the book
    const bookDetails = {
      id: response.id,
      title: response.title,
      authors: response.authors,
      translators: response.translators,
      subjects: response.subjects,
      bookshelves: response.bookshelves,
      languages: response.languages,
      copyright: response.copyright,
      media_type: response.media_type,
      formats: response.formats,
      download_count: response.download_count,
    };

    // Return the book details
    return bookDetails;
  } catch (error) {
    // Log an error message if the fetch request fails
    console.error("Failed to fetch book details", error);
  }
};

// Export the functions to be used in other parts of the application
export { getAllBooks, getBookDetails };
