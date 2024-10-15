import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineDiscount } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { RxReload } from "react-icons/rx";

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

export const navItems = [
  { to: "/", label: "Home" },
  { to: "#about", label: "About" },
  { to: "#contact-us", label: "Contact Us" },
  { to: "#privacy", label: "Privacy Policy" },
  { to: "#help", label: "Help" },
];
