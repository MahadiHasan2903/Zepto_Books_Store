import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineDiscount } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { RxReload } from "react-icons/rx";
import bookThumbnail from "./book.webp";

export const footerData = [
  {
    title: "Help",
    items: [
      "FAQs",
      "Contact Us",
      "Order Tracking",
      "Returns",
      "Shipping Information",
    ],
  },
  {
    title: "Support",
    items: [
      "Customer Support",
      "Technical Support",
      "Warranty",
      "Account Settings",
      "Live Chat",
    ],
  },
  {
    title: "Information",
    items: [
      "About Us",
      "Careers",
      "Privacy Policy",
      "Terms & Conditions",
      "Cookie Policy",
    ],
  },
];

export const advertisementData = [
  {
    icon: MdOutlineDiscount,
    title: "Best Price",
    description: "Guaranteed Price",
  },
  {
    icon: RxReload,
    title: "Free Returns",
    description: "Within 30 Days returns",
  },
  {
    icon: LiaShippingFastSolid,
    title: "Free Shipping",
    description: "Order over $100",
  },
  {
    icon: RiSecurePaymentLine,
    title: "Secure Payment",
    description: "100% Secure Payment",
  },
];

export const booksData = [
  {
    title: "The Great Gatsby",
    totalDownload: 1025,
    author: "F. Scott Fitzgerald",
    thumbnail: bookThumbnail,
  },
  {
    title: "1984",
    totalDownload: 899,
    author: "George Orwell",
    thumbnail: bookThumbnail,
  },
  {
    title: "To Kill a Mockingbird",
    totalDownload: 1099,
    author: "Harper Lee",
    thumbnail: bookThumbnail,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    totalDownload: 1199,
    author: "J.K. Rowling",
    thumbnail: bookThumbnail,
  },
  {
    title: "The Hobbit",
    totalDownload: 599,
    author: "J.R.R. Tolkien",
    thumbnail: bookThumbnail,
  },
  {
    title: "Pride and Prejudice",
    totalDownload: 605,
    author: "Jane Austen",
    thumbnail: bookThumbnail,
  },
  {
    title: "The Catcher in the Rye",
    totalDownload: 1299,
    author: "J.D. Salinger",
    thumbnail: bookThumbnail,
  },
  {
    title: "The Alchemist",
    totalDownload: 999,
    author: "Paulo Coelho",
    thumbnail: bookThumbnail,
  },
];

export const navItems = [
  { to: "/", label: "Home" },
  { to: "#about", label: "About" },
  { to: "#contact-us", label: "Contact Us" },
  { to: "#privacy", label: "Privacy Policy" },
  { to: "#help", label: "Help" },
];
