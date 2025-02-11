"use client";

import Link from "next/link";
import React from "react";
import ArrowSvg from "./svg/arrow";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { CONTACTS } from "@/constants/contacts";

const Footer = () => {
  return (
    <footer className="wrapper py-6">
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-0 mb-10 items-start justify-between">
        <div>
          <span className="text-xl block">I am thrilled to answer to</span>
          <div className="text-xl flex items-center gap-2">
            <span className="block">your next project</span>{" "}
            <ArrowSvg className="rotate-90 sm:-rotate-0" w="15" h="15" />
          </div>
        </div>
        <div className="flex flex-col items-start sm:items-end gap-2">
          <span className="block text-lg">sannbusiness16@gmail.com</span>
          <HoverBorderGradient
            onClick={() => {
              const subject = encodeURIComponent("Get in Touch");
              const body = encodeURIComponent("Your messages...");
              window.location.href = `mailto:sannbusiness16@gmail.com?subject=${subject}&body=${body}`;
            }}
            containerClassName="rounded-full"
            as="button"
            className="bg-background text-foreground flex items-center space-x-2  group transition-all hover:scale-105 px-6 h-14"
          >
            <span className="block text-base">Let`s get in touch</span>
            <ArrowSvg w="15" h="12" className="-rotate-45" />
          </HoverBorderGradient>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
        <span className="order-2 sm:order-1 block  font-inter text-sm font-medium">
          Joko Santoso ⏤ {new Date().getFullYear()}
        </span>
        <div className="order-1 sm:order-2 flex gap-4 text-sm font-medium">
          {CONTACTS.map((contact) => (
            <Link key={contact.id} href={contact.href} className="hover:underline">
              {contact.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
