import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { WishlistProvider } from "../src/context/WishlistContext.jsx";

createRoot(document.getElementById("root")).render(
  <WishlistProvider>
    <App />
  </WishlistProvider>
);
