import * as React from 'react';
import { Paragraph } from './paragraph';
import { Button, buttonVariants } from './button';
import { MdEmail } from 'react-icons/md';
import { SOCIALLINKS } from '@/app/page';
import Link from 'next/link';

const NAVLINKS = [
  { path: '/projects', label: 'Projects' },
  { path: '/articles', label: 'Articles' },
  { path: '/about-me', label: 'About me' },
];

export default function Footer() {
  return (
    <>
      <section className="bg-dark-grey w-full">
        <div className="wrapper py-20">
          <div className="wrapper-content">
            <h2 className="text-[32px] leading-[1.2em] font-medium tracking-[-0.02em] text-white md:text-[50px]">
              Interested in connecting?
            </h2>
            <Paragraph className="text-background mt-2">
              Let’s talk projects, collaborations, or anything else!
            </Paragraph>
            <Button
              variant="dark"
              size="big"
              className="mt-8 w-full md:mt-6 md:w-fit"
            >
              <MdEmail /> Let’s connect
            </Button>
          </div>
        </div>
      </section>
      <footer className="w-full bg-black">
        <div className="wrapper py-0">
          <div className="wrapper-content border-grey flex flex-col items-center justify-between gap-10 border-b py-14 md:flex-row md:py-10">
            <div className="flex flex-col items-center gap-10 md:flex-row md:gap-14">
              <Link
                href="/"
                className="text-[18px] leading-[120%] font-bold text-white no-underline md:text-[16px]"
              >
                Joko Santoso
              </Link>

              <div className="flex flex-col items-center gap-8 md:flex-row">
                {NAVLINKS.map((link, i) => (
                  <Link
                    key={i}
                    href={link.path}
                    className="text-grey text-[18px] leading-[1.5em] no-underline hover:text-white md:text-[14px]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-10 md:gap-8">
              {SOCIALLINKS.map((link, i) => (
                <Link
                  href={link.path}
                  key={i}
                  className={buttonVariants({ size: 'icon', variant: 'dark' })}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="wrapper-content py-12 pt-8 text-center">
            <p className="text-grey text-[14px] leading-[1.2em]">
              Copyright {new Date().getFullYear()} by Joko Santoso
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
