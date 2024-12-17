import Link from "next/link";
import React from "react";

type IProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: IProps) => {
  return (
    <Link href={href} className="hover:underline hover:text-primary">
      {children}
    </Link>
  );
};

export default NavLink;
