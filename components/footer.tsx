"use client";

import React from "react";
import { FaXTwitter, FaGithub, FaInstagram, FaRss, FaLinkedinIn } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import Link from "next/link";
import { metaData, socialLinks } from "@/lib/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }: { href: string; icon: React.ComponentType }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
      <Link href="/rss.xml" target="_self">
        <FaRss />
      </Link>
    </div>
  );
}

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16">
      <time>© {YEAR}</time>{" "}
      <Link
        className="no-underline"
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        {metaData.title}
      </Link>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}
