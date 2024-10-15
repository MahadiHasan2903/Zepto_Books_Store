/**
 * A utility function to perform a fetch request and automatically parse the response as JSON.
 * It adds a default "Accept: application/json" header to the request.
 *
 * @param url - The URL to send the request to.
 * @param config - The fetch configuration object (e.g., method, headers, body).
 * @returns - A promise that resolves to the parsed JSON response.
 */
export function fetchTyped(
  url, // The URL to which the request will be sent.
  config // The configuration object for the fetch request.
) {
  // Extend the provided config by adding an "Accept" header for JSON responses.
  const uConfig = {
    ...config,
    headers: { ...config.headers, Accept: "application/json" }, // Merge with existing headers.
  };

  // Perform the fetch request using the updated config.
  return fetch(url, uConfig)
    .then((response) => response.json()) // Parse the response as JSON.
    .then((data) => data); // Return the parsed data.
}
