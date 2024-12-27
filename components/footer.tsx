import Link from "next/link";
import React from "react";
import ArrowSvg from "./svg/arrow";

const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-0 my-10 items-start justify-between">
        <div>
          <span className="text-xl block">I am thrilled to answer to</span>
          <div className="text-xl flex items-center gap-2">
            <span className="block">your next project</span>{" "}
            <ArrowSvg className="rotate-90 sm:-rotate-0" w="15" h="15" />
          </div>
        </div>
        <div className="flex flex-col items-start sm:items-end gap-2">
          <span className="block text-lg">sannbusiness16@gmail.com</span>
          <button className="w-fit bg-foreground text-background px-6 h-14 rounded-full flex gap-2 items-center">
            <span className="-mt-0.5">Let`s get in touch</span>{" "}
            <ArrowSvg w="15" h="15" current="#f3f3f3" swapCurrent="#181717" className="-rotate-45" />
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 pb-6">
        <span className="order-2 sm:order-1 block text-secondary font-inter text-sm font-medium">
          Joko Santoso ⏤ {new Date().getFullYear()}
        </span>
        <div className="order-1 sm:order-2 flex gap-4 text-sm font-medium">
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
      </div>
    </footer>
  );
};

export default Footer;
