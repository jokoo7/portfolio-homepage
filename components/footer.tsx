import Link from "next/link";
import React from "react";
import ArrowSvg from "./svg/arrow";

const Footer = () => {
  return (
    <div className="wrapper mt-20">
      <div className="mt-10 border-t">
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-0 py-10 items-start justify-between">
          <div>
            <span className="text-xl block">I am thrilled to answer to</span>
            <div className="text-xl flex items-center gap-2">
              <span className="block">your next project</span>{" "}
              <ArrowSvg className="rotate-90 sm:-rotate-0" w="15" h="15" />
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="block text-xl">sannbusiness16@gmail.com</span>
              <button className="w-fit bg-foreground text-background px-6 h-14 rounded-full flex gap-2 items-center">
                <span className="-mt-0.5">Let`s get in touch</span>{" "}
                <ArrowSvg w="15" h="15" current="#f3f3f3" swapCurrent="#181717" className="-rotate-45" />
              </button>
            </div>
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
          </div>
        </div>
      </div>
      <div className="h-16 flex flex-col xs:flex-row items-center justify-between gap-4">
        <span className="block text-secondary font-inter text-sm font-medium">
          Joko Santoso ⏤ {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
};

export default Footer;
