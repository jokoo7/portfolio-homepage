import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="wrapper mb-6 mt-20 flex flex-col xs:flex-row justify-between gap-4">
      <span className="block text-secondary font-inter text-sm font-medium">
        Joko Santoso ⏤ {new Date().getFullYear()}
      </span>
      <div className="flex gap-4 text-sm font-medium">
        <Link href="/" className="hover:underline">
          Instagram
        </Link>
        <Link href="/" className="hover:underline">
          Tiktok
        </Link>
        <Link href="/" className="hover:underline">
          Github
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
