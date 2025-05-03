import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import React from "react";

export const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-6 mt-6">
      <a
        href="https://facebook.com/d`bolivar"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-600 transition duration-300 text-2xl"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://instagram.com/d`bolivar"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-pink-500 transition duration-300 text-2xl"
      >
        <FaInstagram />
      </a>
      <a
        href="https://twitter.com/d`bolivar"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-sky-400 transition duration-300 text-2xl"
      >
        <FaTwitter />
      </a>
      <a
        href="https://wa.me/51999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-green-500 transition duration-300 text-2xl"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};
